import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import UserListPage from "./UserListPage";
import UserDetailPage from "./UserDetailPage";
import Layout from "./Layout";
import ErrorPage from "./ErrorPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "users",
        element: <UserListPage />,
        children: [{ path: ":id", element: <UserDetailPage /> }],
      },
    ],
  },
]);

export default Router;
