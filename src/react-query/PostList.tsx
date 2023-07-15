import React, { useState } from "react";
import UsePosts from "../hooks/UsePosts";

const PostList = () => {
  const pageSize = 10;
  const [user, setUser] = useState<number>();
  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = UsePosts({ userId: user, pageSize: pageSize });

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
        {posts?.pages?.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => {
              return (
                <li key={post.id} className="list-group-item">
                  {post.title}
                </li>
              );
            })}
          </React.Fragment>
        ))}
      </ul>
      <button
        className="btn btn-primary my-3 ms-3"
        onClick={() => fetchNextPage()}
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
