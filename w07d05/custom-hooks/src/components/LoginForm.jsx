// import {useState} from 'react';
import useInput from "../hooks/useInput";

const LoginForm = () => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const usernameInput = useInput('');
  const passwordInput = useInput('');

  const submitHandler = (event) => {
    event.preventDefault();

    alert(`you are logging in as ${usernameInput.value} with ${passwordInput.value}`);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Username</label>
        <input 
          value={usernameInput.value}
          onChange={usernameInput.onChange}
        />
        <br/>

        <label>Password</label>
        <input 
          // value={password}
          // onChange={(event) => setPassword(event.target.value)}
          { ...passwordInput }
        />
        <br/>

        <button type="submit">Login!</button>
      </form>
    </div>
  );
};

export default LoginForm;
