import useFetch from "./useFetch";

function Users() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>
          <strong>{user.name}</strong> – {user.email}
        </div>
      ))}
    </div>
  );
}

export default Users;
