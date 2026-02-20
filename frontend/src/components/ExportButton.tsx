import "../index.css";
import { type Candidate } from "../types/index.js";
import { downloadCSV } from "../utils/csvGenerator";

interface Props {
  candidates: Candidate[] | undefined;
}

export default function ExportButton({ candidates }: Props) {
  return (
    <button
      className="button"
      disabled={!candidates || candidates.length === 0}
      onClick={() => candidates && downloadCSV(candidates)}
    >
      Download CSV
    </button>
  );
}
