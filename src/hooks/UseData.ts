import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  endPoint: string;
  key: any[];
  params?: any;
}
// UseData<Todo[]>({ endPoint: "/todos", key: CACHE_KEY_TODOS });

const UseData = <T>({ endPoint, key, params }: Props) => {};

export default UseData;
