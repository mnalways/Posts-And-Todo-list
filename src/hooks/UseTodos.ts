import { CACHE_KEY_TODOS } from "../react-query/constants";
import UseData from "./UseData";

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const UseTodos = () =>
  UseData<Todo[]>({ endPoint: "/todos", key: CACHE_KEY_TODOS });

export default UseTodos;
