import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchUsers } from '../api/usersApi';

const UsersList = () => {
  const { data, isLoading, isError } = useQuery(['users'], fetchUsers);

  if (isLoading) return <p>Loading users...</p>;
  if (isError) return <p>Error loading users.</p>;

  return (
    <div>
      <h2>User List:</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>👤 {user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
