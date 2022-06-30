# W01D04 - Callbacks!

### To Do
- [x] Functions as values
- [x] Function calling vs function passing
- [x] Callbacks and higher order functions
- [x] Anonymous functions
- [x] Arrow functions
- [x] Make our own higher order function (forEach, filter, map, reduce)


### Callbacks
* a function that gets passed to another function to be invoked by that function

### Higher Order Function (HOF)
* a function that accepts another function as an argument
* a function that returns another function


```js
const helper = function(word) {
  console.log(word);
}

const myFunc = function() {
  helper('hello');
}
```

```js
if (something === true) {
  console.log('hello');
}

if (something === true) console.log('hello');

```


cafe, neon, naan, decoupe


```js
for (const key in obj) {
  // if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  // }
}

for (const key of Object.keys(obj)) {
  console.log(obj[key]);
}
```





