import "../App.css";
import { type Candidate } from "../types/index.js";

interface Props {
  candidates: Candidate[] | undefined;
}

export default function CandidatesList({ candidates }: Props) {
  return (
    <div className="candidates-container">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Application Time and Date</th>
            </tr>
          </thead>
          <tbody>
            {candidates?.map((c) => (
              <tr key={c.candidate_id}>
                <td className="id-cell">{c.candidate_id}</td>
                <td className="date-cell">
                  {c.job_application_created_at.slice(11, 23)}{" "}
                  {c.job_application_created_at &&
                    new Date(
                      c.job_application_created_at,
                    ).toLocaleDateString()}{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
