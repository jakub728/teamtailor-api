import { baseApi } from "../utils/client.js";
import {
  Router,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import { saveToJson, getFromJson } from "../utils/storage.js";

const router: Router = Router();

interface Candidate {
  id: string;
  attributes: {
    "first-name": string;
    "last-name": string;
    email: string;
  };
  relationships: {
    "job-applications": {
      data: Array<{ id: string; type: string }>;
    };
  };
}

interface Jobs {
  id: string;
  attributes: {
    "created-at": string;
  };
}

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const localData = await getFromJson();

    const forceRefresh = req.query.refresh === "true";

    if (!localData || forceRefresh) {
      const users = await baseApi.get("/candidates", {
        params: {
          include: "job-applications",
        },
      });

      const jobs = await baseApi.get("/job-applications");

      console.log(jobs);

      const updatedUsers =
        users?.data.data.map((c: Candidate) => {
          const appId =
            c.relationships["job-applications"]?.data?.[0]?.id || "";

          const isApplication =
            appId && jobs
              ? jobs?.data.data.find((a: Jobs) => a.id === appId)
              : null;

          return {
            candidate_id: c.id,
            first_name: c.attributes["first-name"],
            last_name: c.attributes["last-name"],
            email: c.attributes["email"],
            job_application_id: appId,
            job_application_created_at: isApplication
              ? isApplication.attributes["created-at"]
              : "",
          };
        }) || [];

      await saveToJson(updatedUsers);
    }
    res.status(200).send(localData);
  } catch (error) {
    next(error);
  }
});

export default router;
