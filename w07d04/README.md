# W07D04 - Data Fetching & Other Side Effects

### To Do
- [x] Rules for Hooks
- [x] Pure Functions and Side Effects
- [x] `useEffect`
- [x] Cleanup
- [x] _useEffect_ Flow
- [ ] Dependencies

### Rules for Hooks
* hooks cannot be called conditionally (they have to be top-level)
* they have to be called inside a React function
* all hooks have to start with `use`

useState
useEffect

### Pure Functions
* given the same arguments, it returns the same result
* doesn't have side effects

```js
let addition = 5;
let username = 'Alice';

const addTwo = (num) => {
  username = 'Bob';
  return num + addition;
};
```

### Side Effects
* console.log
* interacting with the DOM
* fetching data
* websocket connections
* setting timers and intervals



```js
const [state, setState] = useState({
  day: "Monday",
  days: [],
  appointments: {},
});

useEffect(() => {
    // use Promise.all() for multiple async calls
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ])
      .then((res) => {
        // res is an array of responses, index corresponds to the async call

        // set state of all states in the state object
        setDays(res[0].data);
        setAppointments(res[1].data);

        setState((prev) => ({
          // ...prev,
          days: res[0].data,
          appointments: res[1].data,
        }));
      })
      .catch((err) => console.log(err));
  }, []);


```

```js
useEffect(() => {}); // run on every render
useEffect(() => {}, [username]); // called on initial render, and then when username changes
useEffect(() => {}, []); // once and only once
```






