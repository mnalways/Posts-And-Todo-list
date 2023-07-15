import { useQuery } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import { APIClient } from "../react-query/services/apiClient";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const UseTodos = () => {
  const apiClient = new APIClient<Todo>("/todos");

  return useQuery<Todo[], Error>({
    queryKey: CACHE_KEY_TODOS,
    queryFn: apiClient.getAll,
    staleTime: 10_000000,
    keepPreviousData: true,
  });
};

export default UseTodos;
