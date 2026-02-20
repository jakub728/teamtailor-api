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

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const localData = await getFromJson();

    const forceRefresh = req.query.refresh === "true";

    if (localData && !forceRefresh) {
      return res.status(200).json(localData);
    }

    const users = await baseApi.get("/candidates", {
      params: {
        include: "job-applications",
      },
    });

    const updatedUsers =
      users?.data.data.map((c: Candidate) => {
        return {
          candidate_id: c.id,
          first_name: c.attributes["first-name"],
          last_name: c.attributes["last-name"],
          email: c.attributes["email"],
          job_application_id:
            c.relationships["job-applications"]?.data?.[0]?.id || "",
        };
      }) || [];

    await saveToJson(updatedUsers);

    res.status(200).json(updatedUsers);
  } catch (error) {
    next(error);
  }
});

export default router;
