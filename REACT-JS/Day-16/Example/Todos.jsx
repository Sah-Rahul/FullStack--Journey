import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

function Todos() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['todos'],
    queryFn: () => axios.get('https://jsonplaceholder.typicode.com/todos').then(res => res.data),
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data</p>;

  return (
    <ul>
      {data.slice(0, 5).map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
