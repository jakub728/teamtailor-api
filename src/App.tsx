import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "./../client";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["candidates"],
    queryFn: async () => {
      const response = await api.get("/candidates");
      return response.data;
    },
  });

  if (isLoading) return "Loading";
  if (error) return "Error";

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
