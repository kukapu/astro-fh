import { createSignal, type Component, type JSX } from 'solid-js';

interface Props {
  initialValue: number;
  children?: JSX.Element;
}

export const Counter: Component<Props> = (props) => {

  const [count, setCount] = createSignal(props.initialValue);

  return (
    <>
      {props.children}
      <h1 class='text-2xl font-bold'>Counter</h1>
      <h3 class='text-xl'>Value: {count()}</h3>

      <button class='bg-blue-500 text-white px-4 py-2 rounded-md' onClick={() => setCount((prev) => prev + 1)}>+1</button>
      <button class='bg-red-500 text-white px-4 py-2 rounded-md' onClick={() => setCount((prev) => prev - 1)}> -1</button>
    </>
  )
}