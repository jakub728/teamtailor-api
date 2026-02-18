import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "./../client";

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

  let candidatesUpdatedData =
    candidatesData?.map((c: any) => {
      return {
        id: c.id,
        firstName: c.attributes["first-name"],
        lastName: c.attributes["last-name"],
        email: c.attributes["email"],
        applicationId: c.relationships["job-applications"]?.data?.[0]?.id || "",
        applicationCreatedAt: "",
      };
    }) || [];

  console.log("Candidates data:", candidatesData);
  console.log("Updated  data:", candidatesUpdatedData);
  console.log("Job application:", applicationsData);

  if (isLoadingCandidates || isLoadingApplications) return "Loading data...";
  if (errorCandidates || errorApplications) return "Error fetching data";

  return (
    <div>
      <button>Download CSV</button>
    </div>
  );
}

export default App;
