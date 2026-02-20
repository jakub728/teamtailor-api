import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "./utils/client.js";
import { type Candidate } from "./types/index.js";
import ExportButton from "./components/ExportButton";
import CandidatesList from "./components/CandidatesList.js";

function App() {
  const { data, isLoading, error } = useQuery<Candidate[]>({
    queryKey: ["candidates"],
    queryFn: async () => {
      const response = await api.get("/users");
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <CandidatesList candidates={data} />
      <ExportButton candidates={data} />
    </div>
  );
}

export default App;
