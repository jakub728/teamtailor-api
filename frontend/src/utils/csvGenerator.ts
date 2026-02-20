import { type Candidate } from "../types/index.js";

export const downloadCSV = (data: Candidate[]) => {
  if (!data.length) return;
  const headers = Object.keys(data[0]).join(",");
  const rows = data
    .map((obj) =>
      Object.values(obj)
        .map((val) => `"${val}"`)
        .join(","),
    )
    .join("\n");

  const blob = new Blob([[headers, rows].join("\n")], {
    type: "text/csv;charset=utf-8",
  });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "candidates.csv";
  link.click();
  URL.revokeObjectURL(url);
};
