import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/UseTodos";

const TodoForm = () => {
  const endPoint = "/todos";
  const ref = useRef<HTMLInputElement>(null);
  const queryClient = useQueryClient();
  const updateTodo = useMutation({
    mutationFn: (todo: Todo) =>
      axios
        .post<Todo>(`https://jsonplaceholder.typicode.com${endPoint}`, todo)
        .then((res) => res.data),
    onSuccess: (UpdatedTodo) => {
      // approach1: Invalidate cache
      // queryClient.invalidateQueries(['todo']);

      // approach2: Update cache
      queryClient.setQueryData<Todo[]>(["todos"], (todos) => [
        UpdatedTodo,
        ...(todos || []),
      ]);
    },
  });

  return (
    <form
      className="row mb-3"
      onSubmit={(event) => {
        event.preventDefault();
        //mutate
        if (ref.current && ref.current.value)
          updateTodo.mutate({
            id: 0,
            title: ref.current?.value,
            userId: 1,
            completed: true,
          });
      }}
    >
      <div className="col">
        <input ref={ref} type="text" className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default TodoForm;
