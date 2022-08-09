import './App.css';
// import Header from './components/Header';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="App">
      <h2>Welcome to the site!</h2>
{/* 
      <Header 
        message="This is the home page!"
      ></Header>

      <Header message="These are all the products in the database"></Header> */}

      {/* <Header /> Header({ message: "something" }) */}

      <Counter />
    </div>
  );
};

export default App;
