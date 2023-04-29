import { getUsers } from "@/hooks/queries/users";

async function Users() {
  const usersData = await getUsers();

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {usersData.map(user => (
          <li key={user.id}>
            <button>{user.name}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
