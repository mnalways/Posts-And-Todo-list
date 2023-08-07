import { Link, Outlet } from "react-router-dom";

const UserListPage = () => {
  const users = [
    { id: 1, name: "Mosh" },
    { id: 2, name: "John" },
    { id: 3, name: "Alice" },
  ];
  return (
    <div className="row">
      <ul className="list-group col">
        {users.map((user) => (
          <li className="list-group-item" key={user.id}>
            <Link to={`${user.id}`}>{user.name}</Link>
            {/* <a href="#">{user.name}</a> */}
          </li>
        ))}
      </ul>
      <div className="col">
        <Outlet />
      </div>
    </div>
  );
};

export default UserListPage;
