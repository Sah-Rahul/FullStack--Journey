// Mutation Example


import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

function AddTodo() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (newTodo) =>
      axios.post('https://jsonplaceholder.typicode.com/todos', newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries(['todos']);
    },
  });

  const handleAdd = () => {
    mutation.mutate({ title: 'New Todo', completed: false });
  };

  return <button onClick={handleAdd}>Add Todo</button>;
}
