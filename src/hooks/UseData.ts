import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Props {
  endPoint: string;
  key: any[];
  params?: any;
}

const UseData = <T>({ endPoint, key, params }: Props) => {
  const fetchData = () => {
    return axios
      .get<T>(`https://jsonplaceholder.typicode.com${endPoint}`, {
        params: params,
      })
      .then((res) => res.data);
  };

  return useQuery<T, Error>({
    queryKey: key,
    queryFn: fetchData,
    staleTime: 10_000000,
    keepPreviousData: true,
  });
};

export default UseData;
