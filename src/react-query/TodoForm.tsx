import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/UseTodos";
import { useAddTodo } from "../hooks/useAddTodo";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);
  const onAdd = () => {
    if (ref.current) ref.current.value = "";
  };

  const updateTodo = useAddTodo(onAdd);

  return (
    <>
      {updateTodo.error ? (
        <div className="alert alert-danger">{updateTodo.error?.message}</div>
      ) : null}
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
          <button className="btn btn-primary">
            {/* {updateTodo.isLoading ? "...Adding" : "Add"} */}
            Add
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
