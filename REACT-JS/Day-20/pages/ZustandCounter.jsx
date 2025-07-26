import React from 'react';
import { useCounterStore } from '../store/useCounterStore';

const ZustandCounter = () => {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div>
      <h2>Zustand Counter: {count}</h2>
      <button onClick={increment}>➕ Increment</button>
      <button onClick={decrement}>➖ Decrement</button>
    </div>
  );
};

export default ZustandCounter;
