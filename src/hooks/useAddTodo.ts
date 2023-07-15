import { useQueryClient, useMutation } from "@tanstack/react-query";
import { CACHE_KEY_TODOS } from "../react-query/constants";
import todoService, { Todo } from "../react-query/services/todoService";

interface TodoContext {
  previousTodos: Todo[];
}

export const useAddTodo = (onAdd: () => void) => {
  const endPoint = "/todos";
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: (todo: Todo) => todoService.post(todo),
    onMutate: (newTodo) => {
      const previousTodos =
        queryClient.getQueryData<Todo[]>(CACHE_KEY_TODOS) || [];
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
