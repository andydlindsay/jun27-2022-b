import './App.css';
import ClassBased from './components/ClassBased';
import Lifecycle from './components/Lifecycle';
import {useState} from 'react';

const App = () => {
  const [showLifecycle, setShowLifecycle] = useState(false);

  return (
    <div className="App">
      <h2>Class-Based Components</h2>

      <button onClick={() => setShowLifecycle(!showLifecycle)}>Toggle!</button>

      { !showLifecycle && <ClassBased secretMessage="the answer is 42" /> }
      { showLifecycle && <Lifecycle /> }
    </div>
  );
};

export default App;

// const yourComponent = new ClassBased(props);
// yourComponent.props = props;
// yourComponent.componentDidMount();
