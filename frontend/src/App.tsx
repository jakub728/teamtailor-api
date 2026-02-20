import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "./../client";

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

interface JobApplication {
  id: string;
  attributes: {
    "created-at": string;
  };
}

function App() {
  const {
    data: candidatesData,
    isLoading: isLoadingCandidates,
    error: errorCandidates,
  } = useQuery({
    queryKey: ["candidates"],
    queryFn: async () => {
      const response = await api.get("/candidates", {
        params: {
          include: "job-applications",
        },
      });
      return response.data.data;
    },
  });

  const {
    data: applicationsData,
    isLoading: isLoadingApplications,
    error: errorApplications,
  } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const response = await api.get("/job-applications");
      return response.data.data;
    },
  });

  const candidatesUpdatedData =
    candidatesData?.map((c: Candidate) => {
      const appId = c.relationships["job-applications"]?.data?.[0]?.id || "";

      const isApplication =
        appId && applicationsData
          ? applicationsData.find((a: JobApplication) => a.id === appId)
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

  // console.log("Candidates data:", candidatesData);
  // console.log("Job application:", applicationsData);
  // console.log("Updated candidates [{}]:", candidatesUpdatedData);

  const uploadCSV = (array: any[]) => {
    const headers = Object.keys(array[0]).join(",");
    const rows = array
      .map((o) =>
        Object.values(o)
          .map((val) => `${val}`)
          .join(","),
      )
      .join("\n");

    const content = [headers, rows].join("\n");
    const blob = new Blob([content], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Application_candidates.csv");
    link.click();
  };

  if (isLoadingCandidates || isLoadingApplications) return "Loading data...";

  if (errorCandidates || errorApplications) {
    console.log({ errorCandidates, errorApplications });
    const errorMessage = errorCandidates?.message || errorApplications?.message;
    return `Error: ${errorMessage}`;
  }

  return (
    <div>
      <button onClick={() => uploadCSV(candidatesUpdatedData)}>
        Download CSV file
      </button>
    </div>
  );
}

export default App;
