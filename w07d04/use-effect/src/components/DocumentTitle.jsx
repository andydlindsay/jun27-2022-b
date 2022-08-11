import {useEffect, useState} from 'react';

// useEffect(() => {});
// useEffect(() => {}, []);

const DocumentTitle = () => {

  const [counter, setCounter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    console.log('document title has been updated');
    document.title = `clicked ${counter} times!`;
  }, [counter]);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(`the counter is at ${counter}`);
    }, 2000);

    const cleanup = () => {
      console.log('clearing the interval');
      clearInterval(interval);
    };

    return cleanup;
  }, [counter]);

  // infinite loop example
  // useEffect(() => {
  //   setCounter(counter + 1);
  // }, [counter]);

  return (
    <div>
      <h2>Document Title component</h2>
      <h2>Counter: {counter}</h2>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>

      <div>
        <input 
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default DocumentTitle;
