import { baseApi } from "../utils/client.js";
import {
  Router,
  type Request,
  type Response,
  type NextFunction,
} from "express";
import { saveToJson, getFromJson } from "../utils/storage.js";
import { type Candidate } from "../types/interface.js";

const router: Router = Router();

export interface Jobs {
  id: string;
  attributes: {
    "created-at": string;
  };
}

router.post(
  "/sync",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const localData = await getFromJson();

      const jobs = await baseApi.get("/job-applications");

      const updatedUsers =
        localData.map((c: Candidate) => {
          const appId = c.job_application_id;

          const isApplication =
            appId && jobs ? jobs.data.data.find((a: Jobs) => a.id === appId) : null;

          return {
            ...c,
            job_application_created_at: isApplication
              ? isApplication.attributes["created-at"]
              : "",
          };
        }) || [];

      await saveToJson(updatedUsers);

      res.status(200).send("Jobs synchronized");
    } catch (error) {
      next(error);
    }
  },
);

export default router;
