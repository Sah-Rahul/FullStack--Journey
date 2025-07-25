import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../features/counter/counterSlice';

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-bold">Redux Counter: {count}</h1>
      <div className="space-x-4">
        <button onClick={() => dispatch(increment())} className="bg-green-500 text-white px-4 py-2 rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 text-white px-4 py-2 rounded">-</button>
        <button onClick={() => dispatch(reset())} className="bg-gray-500 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </div>
  );
}

export default Counter;
