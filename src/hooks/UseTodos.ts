import UseData from "./UseData";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const UseTodos = () => UseData<Todo[]>({ endPoint: "/todos", key: ["todos"] });

export default UseTodos;
