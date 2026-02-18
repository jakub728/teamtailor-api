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
      const response = await api.get("/candidates");
      return response.data;
    },
  });

  const candidatesIds = candidatesData?.data.map((c: any) => c.id) || [];
  const candidatesFirstNames =
    candidatesData?.data.map((c: any) => c.attributes["first-name"]) || [];
  const candidatesLastNames =
    candidatesData?.data.map((c: any) => c.attributes["last-name"]) || [];
  const candidatesEmails =
    candidatesData?.data.map((c: any) => c.attributes["email"]) || [];

  console.log(candidatesIds);

  if (isLoadingCandidates) return "Loading data...";
  if (errorCandidates) return "Error fetching data";

  return (
    <div>
      <button>Download CSV</button>
    </div>
  );
}

export default App;
