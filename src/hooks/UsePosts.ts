import UseData from "./UseData";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface Query {
  userId: number | undefined;
  page: number;
  pageSize: number;
}

const UsePosts = (query: Query) =>
  UseData<Post[]>({
    endPoint: "/posts",
    key: ["posts", query],
    params: {
      userId: query.userId,
      _limit: query.pageSize,
      _start: (query?.page - 1) * query.pageSize,
    },
  });

export default UsePosts;
