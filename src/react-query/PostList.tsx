import { useEffect, useState } from "react";
import UsePosts from "../hooks/UsePosts";

const PostList = () => {
  const pageSize = 10;
  const [user, setUser] = useState<number>();
  const [page, setPage] = useState<number>(1);
  const {
    data: posts,
    error,
    isLoading,
  } = UsePosts({ userId: user, page: page, pageSize: pageSize });

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <select
        onChange={(event) => setUser(parseInt(event.target.value))}
        value={user}
        className="form-select mb-3 "
      >
        <option value=""></option>
        <option value={1}>User1</option>
        <option value={2}>User2</option>
        <option value={3}>User3</option>
      </select>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3"
        onClick={() => (page === 1 ? setPage(1) : setPage(page - 1))}
      >
        Previous
      </button>
      <button
        className="btn btn-primary my-3 ms-3"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </>
  );
};

export default PostList;
