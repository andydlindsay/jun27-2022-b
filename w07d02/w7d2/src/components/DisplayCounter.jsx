const DisplayCounter = (props) => {
  console.log('props', props);

  return (
    <div>
      <h2>Counter: {props.count}</h2>
    </div>
  );
};

export default DisplayCounter;
