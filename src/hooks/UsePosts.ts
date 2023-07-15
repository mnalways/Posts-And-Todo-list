import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Query {
  userId: number | undefined;
  pageSize: number;
}

const UsePosts = (query: Query) => {
  const fetchData = ({ pageParam = 1 }) => {
    const endPoint = "/posts";
    return axios
      .get<Post[]>(`https://jsonplaceholder.typicode.com${endPoint}`, {
        params: {
          userId: query.userId,
          _limit: query.pageSize,
          _start: (pageParam - 1) * query.pageSize,
        },
      })
      .then((res) => res.data);
  };

  return useInfiniteQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: fetchData,
    staleTime: 10_000000,
    keepPreviousData: true,
    getNextPageParam: (lastPage: Post[], allPages) => {
      return lastPage?.length > 0 ? allPages.length + 1 : undefined;
    },
  });
};

export default UsePosts;
