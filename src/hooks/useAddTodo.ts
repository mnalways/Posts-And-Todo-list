import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Todo } from "./UseTodos";
import { CACHE_KEY_TODOS } from "../react-query/constants";

interface TodoContext {
  previousTodos: Todo[];
}

export const useAddTodo = (onAdd: () => void) => {
  const endPoint = "/todos";
  const queryClient = useQueryClient();
  return useMutation<Todo, Error, Todo, TodoContext>({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>(`https://jsonplaceholder.typicode.com${endPoint}`, todo)
        .then((res) => res.data),
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
