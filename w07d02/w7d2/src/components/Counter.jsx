import {useState} from 'react';
import DisplayCounter from './DisplayCounter';
import Button from './Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
    console.log('count', count);
  };

  return (
    <div>
      <h2>This is the counter component</h2>
      <DisplayCounter count={count} />
      {/* <button onClick={clickHandler}>Click me!!!</button> */}
      <Button onClick={clickHandler}>Increment</Button>
    </div>
  );
};

export default Counter;
