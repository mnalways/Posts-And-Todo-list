import { useQueryClient, useMutation } from "@tanstack/react-query";
import { Todo } from "./UseTodos";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import { APIClient } from "../react-query/services/apiClient";

interface TodoContext {
  previousTodos: Todo[];
}

export const useAddTodo = (onAdd: () => void) => {
  const endPoint = "/todos";
  const queryClient = useQueryClient();
  const apiClient = new APIClient<Todo>("/todos");
  return useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: (todo: Todo) => apiClient.post(todo),
    onMutate: (newTodo) => {
      const previousTodos = queryClient.getQueryData(CACHE_KEY_TODOS);
      // approach2: Update cache
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      onAdd();
      return { previousTodos };
    },
    onSuccess: (UpdatedTodo, newTodo) => {
      // approach1: Invalidate cache
      // queryClient.invalidateQueries(['todo']);
      queryClient.setQueryData<Todo[]>(
        CACHE_KEY_TODOS,
        (todos) =>
          todos?.map((todo) => (todo === newTodo ? UpdatedTodo : todo)) || []
      );
    },
    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData<Todo[]>(CACHE_KEY_TODOS, (todos) => [
        ...(context?.previousTodos || []),
      ]);
    },
  });
};
