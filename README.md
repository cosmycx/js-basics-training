# JavaScript Basics (training)
JavaScript - the language browsers (UI) understand
### Outline
- Styling Guide
- Variables
- Data Types
- Object Iteration
- Arrays
- Arrays Methods
- Functions
- Classes
- Node.js
- Npm
- Example http get/post
- Webpack
Used for code examples: [https://repl.it](https://repl.it)
For local code must run `npm install` in the folder to get dependencies
---

### Styling Guide 
- Airbnb: [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
- Google: [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
- Automatic Semicolon Insertion (ASI)
- Semicolons or not? - stick with one style only
- Lint for code: [https://www.jslint.com/](https://www.jslint.com/)

---
### Variables (var, let, const)
```javascript
// ---------- var, let
var a = 'some string'
let b = "something"
var total = a + b
console.log(total)
// ---------- let
if (true) {
    let foo = 9
}// .if
console.log(foo) // error
// ---------- const
const c = 42
c = 2 // error
```
[https://caniuse.com/#search=let](https://caniuse.com/#search=let)

---
### Data Types
###### numbers, strings, boolean
---
```javascript
// number: integer || float
var length = 42
length = 42.89 
var name = 'John'
// ---------- Infinity, -Infinity and NaN
console.log( 1 / 0)
console.log(1 > Infinity) // evaluates to bool
console.log( "hello" / 15 )
// ----------- Strings
let s1 = "Hello" // double quotes
let s2 = 'Both single and double quotes are ok for strings'
let p = `composing ${s1} and ${s2}` // sting interpolation
console.log(p)
```
###### null, undefined
---
```javascript
console.log(foo) // error
var bar
console.log(bar) // undefined
// ---------- null
let age = null // reference to non existing, similar nil, null pointer
console.log(age)
```
###### objects - data structure, key value pair
---
```javascript
var obj = {
    a: 'hello',
    b: 2
}
console.log(obj)
// ---------- json notation ok
var obj =  {
 	"a": "hello",
 	"b": 2
 }
console.log(obj)
console.log(obj.a) // dot notation
console.log(obj["a"]) // bracket notation
```
- nested objects
-[https://jsonlint.com/](https://jsonlint.com/)
###### typeoff()
---
```javascript
console.log(typeof undefined) // "undefined"
console.log(typeof 0) // "number"
console.log(typeof true) // "boolean"
console.log(typeof "foo") // "string"
// ---------- objects
console.log(typeof Math) // "object"
console.log(typeof null) // "object" 
console.log(typeof [1,2,3]) // "object"
```

---
### Object iteration
```javascript
var hat = {
    a: 'kit',
    b: 'kat'
}// .hat
for (var key in hat) {
  console.log('key: ', key)
  console.log('cat: ', hat[key])
}// .for
```


---
### Arrays
// ~~collection (list) of same types~~, js: multiple values in a single variable
```javascript
let arr = [1, 3, 5, 9, 13, "25"]
console.log(arr)
console.log(typeof(arr)) // js: object(!?)
```


---
### Array Methods
- join, pop, push, shift, unshift, splice, concat...
```javascript
let arr = [1, 2, 3]
arr.push(42) // appends another element
console.log(arr)
```
- sort
```javascript
let arr = [1, 3, 12, 7, 5, 9, 13]
arr.sort()
console.log(arr) // !? - sort() method sorts an array alphabetically!
// sort number, needs a sorting function passed to sort
console.log(arr.sort(function(a, b){return a-b}))
```
- forEach, iterates over and applies some operations, e.g. console.log
```javascript
let arr = [1, 3, 12, 7, 5, 9, 13]
arr.forEach(function(el) {
    console.log(el)
})// .forEach
```
- map, reduce, filter
- map returns a new array vs. forEach
- reduce returns a single output value
- filter return a new array
```javascript
const arr = [1, 2, 3, 4]
const reducer = (acc, curr) => acc + curr
console.log(arr.reduce(reducer))
console.log(arr.reduce(reducer, 5))
```


---
### Functions
- they are a prime class citizen (first class objects)
meaning: 
- an assign a function into a variable
- can pass a function to another function
```javascript
var foo = function(a,b) {
    return a + b
}// .foo
console.log(foo(3,4))
```
- function notation
```javascript
function foo (a,b) {
    return a + b
}// .foo
```
- arrow notation
```javascript
var foo = (a,b) => {
    return a + b
}// .foo
```


---
### Classes
```javascript
// ---------- new objects from constructor function with new
function User(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
}// .User

user100 = new User('Jack', 'Doe', 32)
user200 = new User('Jill', 'Doe', 29)
console.log(user100, user200)

// ---------- using prototype
User.prototype.getFullName = function() {
    return this.name + " " + this.lastName
}// .getFullName

console.log(user100.getFullName())
console.log(user200.getFullName())
```
```javascript
// ---------- using class, "syntactic sugar"
class User {
  constructor(name, lastName, age) {
    this.name = name
    this.lastName = lastName
    this.age = age
  }// .constructor

  getFullName() {
    return this.name + " " + this.lastName
  }// .getFullName

}// .User

user100 = new User('Jack', 'Doe', 32)
user200 = new User('Jill', 'Doe', 29)

console.log(user100, user200)

console.log(user100.getFullName())
console.log(user200.getFullName())
```

---
### Node.js
- JavaScript runtime built on Chrome's V8 JavaScript engine
- [https://nodejs.org/en/](https://nodejs.org/en/)


---
### Npm 
- JavaScript development tools - Package (dependencies) Manager
- npm init
- package.json



---
### Example http 
- Axios
```javascript, node ...
const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/1'

const getData = async url => {
  try {
    const response = await axios.get(url)
    const data = response.data
    return data
  } catch (error) {
    return error
  }// .catch
}// .getData

getData(url).then(function(data){
  console.log(data)
})// .getData
```

- Fetch
```javascript
const fetch = require("node-fetch")

const url = "https://jsonplaceholder.typicode.com/posts/1"

const getData = async url => {
  try {
    const response = await fetch(url)
    const json = await response.json()
    return json

  } catch (error) {
    return error
  }// .catch
}// getData

getData(url).then(function(data){
  console.log(data)
})
```


---
### Webpack
- bundle your scripts: https://webpack.js.org/
- seed project to try:
- webpack starter: https://github.com/wbkd/webpack-starter

Thank you!


