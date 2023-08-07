import { useParams, useSearchParams } from "react-router-dom";

const UserDetailPage = () => {
  const params = useParams();
  console.log("params", params);
  // For future Revision
  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log('searchParams.get("name")', searchParams.get("name"));
  // console.log("searchParams.toString()", searchParams.toString());

  return <p>User</p>;
};

export default UserDetailPage;
