## JavaScript Basics

### Basics

1. Declare JavaScript variables with 8 different data types: `undefined`, `null`, `boolean`, `string`, `number`, `symbol`, `bigint` and `object`.
2. When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an `undefined` variable, you will get a literal string of `undefined`.
3. Escaping literal in strings: `\n`, `\t`, `\r`, `\'`, `\"`, `\\`, `\b`(word boundary), `\f`(form feed). In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.
4. Global vs. local scope in functions: It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
5. Undefined value returned from a function: It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
6. Comparision operators: `===`, `!==`, `==`, `!=`, `<`, `<=`, `>`, `>=`. The `===` operator is strict equality, the `==` operator is loose equality. `<`, `>` will convert data types while comparing. E.g., `7 >= '6'` and `'7' > 6` will return `true`.
7. Building JavaScript objects: Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties. You can even omit the quotes for single-word string properties: `{name: 'John'}`.
8. Two ways to access object properties: `.` and `[]`.
9. To delete a property, use `delete`, to check if it has a property, use `.hasOwnProperty()`.
10. Use `Object.freeze(obj)` to prevent any changes of the object.
11. Destructuring: `let {a, b} = {a: 1, b: 2}` and `let [a, b] = [1, 2]`.
12. Spreading: `let arr = [1, 2, 3]` and `let arr2 = [...arr]` and `let arr3 = [1, ...arr]`.
13. Arrow functions: `(param1, param2) => { statements }` and `(param) => expression`.
14. Template literals: `${expression}`.
15. Concise declaration functions with ES6: `` const person = {name: "Taylor", sayHello() {return `Hello! My name is ${this.name}.`;}} ``;
16. Use class instead of constructor functions: `class Person {constructor(name) {this.name = name;}}`.
17. Use getters and setters: `get name() {return this._name;}` and `set name(value) {this._name = value;}`.

```javascript
const Person = function (firstAndLast) {
	let fullname = firstAndLast;
	this.getFullName = () => fullname;
	this.setFullName = (name) => {
		fullname = name;
	};
	this.getFirstName = () => fullname.split(" ")[0];
	this.setFirstName = (first) => {
		fullname = first + " " + fullname.split(" ")[1];
	};
	this.getLastName = () => fullname.split(" ")[1];
	this.setLastName = (last) => {
		fullname = fullname.split(" ")[0] + " " + last;
	};
};
```

18. Create a module script: `<script type="module" src="filename.js"></script>`, a script that uses this module type can now use the import and export features of ES6.
19. Export and import: `export default {name: 'Taylor'}` and `import {name} from './filename.js'`, `import * as myMathModule from "./math_functions.js";`.
20. Create a JavaScript promise: `const myPromise = new Promise((resolve, reject) => {resolve(value);})`. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise. The resolve method is called when the promise is fulfilled, and the reject function is called when the promise is rejected.
21. Complet a promise with resolve and reject methods:

```javascript
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```

22. Use the Promise.all method to wait for all promises to resolve: `Promise.all([promise1, promise2, promise3])`.
23. Promises are most useful when you have a process that takes an unknown amount of time in your code (i.e. something asynchronous), often a server request. When you make a server request it takes some amount of time, and after it completes you usually want to do something with the response from the server. This can be achieved by using the `then` method. The `then` method is executed immediately after your promise is fulfilled with resolve. `myPromise.then(response => {do something with response})`, the `response` comes from the argument given to the `resolve` method.

```js
const makeServerRequest = new Promise((resolve, reject) => {
	// responseFromServer is set to true to represent a successful response from a server
	let responseFromServer = true;

	if (responseFromServer) {
		resolve("We got the data");
	} else {
		reject("Data not received");
	}
});
makeServerRequest.then((result) => {
	console.log(result);
});
makeServerRequest.catch((error) => {
	console.log(error);
});
```

24. Handle a rejected promise with catch: `catch` is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called.`myPromise.catch(error => {do something with error})`. `error` is the argument passed in to the reject method.

25. Create a method on an object: Objects can have a special type of property, called a method. Methods are properties that are functions. This adds different behavior to an object.

```javascript
let dog = {
	name: "Spot",
	numLegs: 4,
	sayLegs: function () {
		return `This dog has ${this.numLegs} legs.`;
	},
};
```

26. Define a constructor function: `function Dog(name) {this.name = name;}`.
27. Use a constructor to create an object: `let terrier = new Dog("Terrier");`.
28. Verify an object's constructor with instanceof: `if (dog instanceof Dog) {console.log("This is a dog!");}`.
29. The `for...in` iterates over all enumerable properties of an object that are keyed by strings (ignoring ones keyed by `Symbols`), including inherited enumerable properties.

```javascript
function Bird(name) {
	this.name = name;
	this.numLegs = 2;
}
let canary = new Bird("Tweety");
let ownProps = [];
for (let prop in canary) {
	ownProps.push(prop);
}
```

30. Use prototype to add methods to all instances of a constructor: `Bird.prototype.fly = function() {return "I am flying!";}`. Or use `Bird.prototype.fly = () => {return "I am flying!";}`. Or use prototype properties to reduce duplicate codes; `Bird.prototype.numLegs = 2;`. Just think of a prototype as a "recipe" for creating objects.
31. Iterate over all properties: _own properties_ are those that are defined directly on the object, and not on one of its prototypes; _prototype properties_ are those that are defined directly on an object's prototype.

```javascript
function Dog(name) {
	this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
let ownProps = [];
let prototypeProps = [];
for (let prop in beagle) {
	if (beagle.hasOwnProperty(prop)) {
		ownProps.push(prop);
	} else {
		prototypeProps.push(prop);
	}
}
```

32. Understand where an object sits in the prototype chain: `Object.getPrototypeOf(obj)` returns the prototype of an object.
33. Use Object.setPrototypeOf to set the prototype of an object: `Object.setPrototypeOf(obj, prototype)`.
34. Understand the difference between `instanceof` and `in`: `instanceof` checks if an object is an instance of a constructor, while `in` checks if an object has a property.
35. Understand the difference between `this` and `that`: `this` refers to the object that is executing the current function, while `that` refers to the object that is executing the function that called the current function.?
36. Understand the difference between `new` and `call/apply`: `new` creates a new object, while `call/apply` calls a function with a given object as `this`.
37. Understand the difference between `new` and `bind`: `new` creates a new object, while `bind` creates a new function with a given object as `this`.?
38. Understand the constructor property: the constructor property is a reference to the function that created an object.

```javascript
let duck = new Bird();
console.log(duck.constructor === Bird);
```

39. Change the prototype to a new object.

```javascript
Bird.prototype = {
	// whenever a prototype is manually set to a new object, remember to define the constructor property
	constructor: Bird,
	numLegs: 2,
	eat: function () {
		console.log("nom nom nom");
	},
	describe: function () {
		console.log("My name is " + this.name);
	},
};
```

40. Understand where an object's prototype comes from.

```javascript
function Bird(name) {
	this.name = name;
}
let duck = new Bird("Donald");
// duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:
Bird.prototype.isPrototypeOf(duck);
```

41. Understand the prototype chain. The `hasOwnProperty` method is defined in `Object.prototype`, which can be accessed by `Bird.prototype`, which can then be accessed by `duck`. This is an example of the prototype chain. In this prototype chain, `Bird` is the supertype for `duck`, while `duck` is the subtype. `Object` is a supertype for both `Bird` and `duck`. `Object` is a supertype for all objects in JavaScript. Therefore, any object can use the `hasOwnProperty` method.

```javascript
Bird.prototype.isPrototypeOf(duck);
Object.prototype.isPrototypeOf(Bird.prototype);
```

42. Inherit from supertype.

```javascript
function Animal() {}
Animal.prototype.eat = function () {
	console.log("nom nom nom");
};
function Dog() {}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = () => console.log("Woof!");
let beagle = new Dog();
```

43. Override the supertype's method.

```javascript
function Animal() {}
Animal.prototype.eat = function () {
	return "nom nom nom";
};
function Bird() {}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function () {
	return "peck peck peck";
};
```

If you have an instance `let duck = new Bird()`; and you call `duck.eat()`, this is how JavaScript looks for the method on the prototype chain of duck:

    1. duck=> Is eat() defined here? No.
    2. Bird => Is eat() defined here? => Yes. Execute it and stop searching.
    3. Animal => eat() is also defined, but JavaScript stopped searching before reaching this level.
    4. Object => JavaScript stopped searching before reaching this level.

44. Use a mixin to add common behavior between unrelated objects. As you have seen, behavior is shared through inheritance. However, there are cases when inheritance is not the best solution. Inheritance does not work well for unrelated objects like Bird and Airplane. They can both fly, but a Bird is not a type of Airplane and vice versa. For unrelated objects, it's better to use mixins. A mixin allows other objects to use a collection of functions.

```javascript
// The flyMixin takes any object and gives it the fly method.
let flyMixin = function (obj) {
	obj.fly = function () {
		console.log("Flying, wooosh!");
	};
};

let bird = {
	name: "Donald",
	numLegs: 2,
};

let plane = {
	model: "777",
	numPassengers: 524,
};

flyMixin(bird);
flyMixin(plane);
```

45. Use closure to protect properties within an object from being modified externally. n the previous challenge, bird had a public property name. It is considered public because it can be accessed and changed outside of bird's definition. `bird.name = "Duffy";` Therefore, any part of your code can easily change the name of bird to any value. Think about things like passwords and bank accounts being easily changeable by any part of your codebase. That could cause a lot of issues. The simplest way to make this public property private is by creating a variable within the constructor function. This changes the scope of that variable to be within the constructor function versus available globally. This way, the variable can only be accessed and changed by methods also within the constructor function.

```javascript
function Bird() {
	let hatchedEgg = 10;
	this.getHatchedEggCount = function () {
		return hatchedEgg;
	};
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

Here `getHatchedEggCount` is a privileged method, because it has access to the private variable `hatchedEgg`. This is possible because `hatchedEgg` is declared in the same context as `getHatchedEggCount`. In JavaScript, a function always has access to the context in which it was created. This is called _closure_.

46. Understand the immediately invoked function expression (IIFE). A common pattern in JavaScript is to execute a function as soon as it is declared:

```javascript
(function () {
	console.log("Chirp, chirp!");
})();
```

This is an anonymous function expression that executes right away, and outputs "Chirp, chirp!" immediately. Note that the function has no name and is not stored in a variable. The two parentheses `()` at the end of the function expression cause it to be immediately executed or invoked. This pattern is known as an immediately invoked function expression or IIFE.

47. Use an IIFE to create a module. An immediately invoked function expression (IIFE) is often used to group related functionality into a single object or module. For example, an earlier challenge defined two mixins:

```javascript
function glideMixin(obj) {
	obj.glide = function () {
		console.log("Gliding on the water");
	};
}
function flyMixin(obj) {
	obj.fly = function () {
		console.log("Flying, wooosh!");
	};
}
```

We can group these mixins into a module as follows:

```javascript
let motionModule = (function () {
	return {
		glideMixin: function (obj) {
			obj.glide = function () {
				console.log("Gliding on the water");
			};
		},
		flyMixin: function (obj) {
			obj.fly = function () {
				console.log("Flying, wooosh!");
			};
		},
	};
})();
```

Note that you have an immediately invoked function expression (IIFE) that returns an object motionModule. This returned object contains all of the mixin behaviors as properties of the object. The advantage of the module pattern is that all of the motion behaviors can be packaged into a single object that can then be used by other parts of your code. Here is an example using it:

```javascript
motionModule.glideMixin(duck);
duck.glide();
```

### Regular Expressions

1. Using the test method: JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex (using literal patterns `/literal/`), applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

```javascript
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
```

2. Using `|` in the regex: You can use `|` to match one of several possible strings. For example, `/cat|dog|bird/` will match either `cat`, `dog`, or `bird`.
3. Ignore case while matching: You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the `i` flag. You can use it by appending it to the regex. An example of using this flag is `/ignorecase/i`. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.
4. Extract matches: use the `match` method. The `match` method takes a regex and returns an array of matches. Note that the `.match` syntax is the "opposite" of the `.test` method. `'string'.match(/regex/); /regex/.test('string');`
5. Find more than the first search: To search or extract a pattern more than once, you can use the `g` flag.

```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```

6. Match anything with wildcard period: The wildcard character `.` will match any one character.
7. Match single character with multiple possibilities: Character classes allow you to define a group of characters you wish to match by placing them inside square (`[` and `]`) brackets.

```javascript
let quoteSample =
	"Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
```

8. Match letters of the alphabet: Inside a character set, you can define a range of characters to match using a hyphen character: `-`. For example, `[a-z]` will match any lowercase letter.
9. Match single characters not specified: To create a negated character set, you place a caret character (`^`) after the opening bracket and before the characters you do not want to match. For example, `/[^aeiou]/gi` matches all characters that are not a vowel
10. Match characters that occur one or more times: `/a+/g` will match any string that has at least one occurrence of the letter `a`.

```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
```

11. Match characters that occur zero or more times: `/a*/g` will match any string that has zero or more occurrences of the letter `a`.
12. Find characters with lazy matching: In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match (by default). The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern. Use the `?` character to change to lazy matching.

```javascript
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);
```

13. Match the beginning of a string: To match the beginning of a string, you can use the `^` character. The caret character (`^`) inside a character set to create a negated character set in the form [^thingsthatwillnotbematched]. Outside of a character set, the caret is used to search for patterns at the beginning of strings.
14. Match the end of a string: You can search the end of strings using the dollar sign character `$` at the end of the regex.
15. Match all letters and numbers: The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character (`_`).

```javascript
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[\w]/g;
// count how many alphanumeric characters are in the string
let result = quoteSample.match(alphabetRegexV2).length;
```

16. Match everything but letters and numbers: `\W` matches everything but letters and numbers, which is equivalent to `[^A-Za-z0-9_]`.
17. Match all numbers: `\d` is the shortcut for `[0-9]`.
18. Match all non-numbers: `\D` is the shortcut for `[^0-9]`.
19. Match whitespaces: `\s` matches any whitespace character, including space, tab, form feed, etc. It's similar to the character class `[ \r\t\f\n\v]`

```javascript
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);
```

20. Match non-whitespace characters: `\S` matches any non-whitespace character. Search for non-whitespace using `\S`, which is an uppercase s. This pattern will not match whitespace, carriage return, tab, form feed, and new line characters. You can think of it being similar to the character class `[^ \r\t\f\n\v]`.
21. Specify upper and lower number of matches: Quantity specifiers are used with curly brackets (`{` and `}`). The `{n}` notation specifies that the preceding character should occur exactly `n` times. The `{n,}` notation specifies that the preceding character should occur at least `n` times.

```javascript
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);
```

22. Check for all or none: You can specify the possible existence of an element with a question mark, `?`. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.
23. Positive and negative lookahead: Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along. This can be useful when you want to search for multiple patterns over the same string. A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as `(?=...)` where the `...` is the required part that is not matched. On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as `(?!...)` where the `...` is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

```javascript
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
```

24. Check for mixed grouping of characters: Sometimes we want to check for groups of characters using a Regular Expression and to achieve that we use parentheses `()`.

```javascript
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```

25. Reuse patterns using capture groups: Capture groups are constructed by enclosing the regex pattern to be captured in parentheses. The substring matched by the group is saved to a temporary "variable", which can be accessed within the same regex using a backslash and the number of the capture group (e.g. `\1`). Capture groups are automatically numbered by the position of their opening parentheses (left to right), starting at 1.

```javascript
// Use capture groups in reRegex to match a string that consists of only the same number repeated exactly three times separated by single spaces
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
// let reRegex = /(\d+) \1 \1/ would also match '42 42 42 42'
let result = reRegex.test(repeatNum);
```

26. Use capture groups to search and replace: You can use the replace method to replace all occurrences of a pattern in a string with a different string. The replace method takes two arguments: the pattern to match and the string to replace it with. You can also access capture groups in the replacement string with dollar signs (`$`).

```javascript
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");

let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
```

### Debugging

1. Use `console.log()` for debugging: JavaScript has a built-in debugging tool called `console.log()`. This is a debugging tool that prints out the value of a variable to the console.
2. Use `typeof` to check the type of a variable: The `typeof` operator returns the type of a variable. JavaScript recognizes six primitive (immutable) data types: `Boolean`, `Null`, `Undefined`, `Number`, `String`, and `Symbol` (new with ES6) and one type for mutable items: `Object`. Note that in JavaScript, arrays are technically a type of object.

### Basic Data Structure

1. Use an array to store a collection of data.
2. Remove items using `splice()`: `splice()` not only modifies the array it's being called on, but it also returns a new array containing the value of the removed elements.

```javascript
function htmlColorNames(arr) {
	let newAdded = ["DarkSalmon", "BlanchedAlmond"];
	arr.splice(0, 2, ...newAdded);
	return arr;
}
console.log(
	htmlColorNames([
		"DarkGoldenRod",
		"WhiteSmoke",
		"LavenderBlush",
		"PaleTurquoise",
		"FireBrick",
	])
);
```

3. Copy array items using `slice()`.
4. Check for the presence of an element with `indexOf()`.

```javascript
function quickCheck(arr, elem) {
	return arr.indexOf(elem) >= 0 ? true : false;
}
console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));
```

5. Check an element in an array using `.includes()`.

```javascript
function filteredArray(arr, elem) {
	let newArr = [];
	arr.forEach((ele) => {
		if (!ele.includes(elem)) {
			newArr.push(ele);
		}
	});
	return newArr;
}
console.log(
	filteredArray(
		[
			[3, 2, 3],
			[1, 6, 3],
			[3, 13, 26],
			[19, 3, 9],
		],
		3
	)
);
```

6. Use `in` or `hasOwnProperty()` to check if an object has a property/key.

```javascript
let rtn = 0;
for (let ele in usersObj) {
	if (userObj[ele]["online"] === true) {
		rtn += 1;
	}
}
```

7. Generate an array of all object keys with `Object.keys()`.

### Functional Programming

1. Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: INPUT -> PROCESS -> OUTPUT. Functional programming is about:

   - Isolated functions - there is no dependence on the state of the program, which includes global variables that are subject to change
   - Pure functions - the same input always gives the same output
   - Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled

2. **Callbacks** are the functions that are slipped or passed into another function to decide the invocation of that function. You may have seen them passed to other methods, for example in filter, the callback function tells JavaScript the criteria for how to filter an array.

   - Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions. In JavaScript, all functions are first class functions.
   - The functions that take a function as an argument, or return a function as a return value are called higher order functions.
     - Use higer order functions.

```javascript
const squareList = (arr) => {
	return arr
		.filter((element) => Number.isInteger(element) && element > 0)
		.map((element) => element * element);
};
const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
```

- When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

3. One of the core principles of functional programming is to not change things. Changes lead to bugs. It's easier to prevent bugs knowing that your functions don't change anything, including the function arguments or any global variable. Recall that in functional programming, changing or altering things is called mutation, and the outcome is called a side effect. A function, ideally, should be a pure function, meaning that it does not cause any side effects.
4. Another principle of functional programming is to always declare your dependencies explicitly. This means if a function depends on a variable or object being present, then pass that variable or object directly into the function as an argument. There are several good consequences from this principle. The function is easier to test, you know exactly what input it takes, and it won't depend on anything else in your program. This can give you more confidence when you alter, remove, or add new code. You would know what you can or cannot change and you can see where the potential traps are. Finally, the function would always produce the same output for the same set of inputs, no matter what part of the code executes it.
5. a. Don't alter a variable or object - create new variables and objects and return them if need be from a function. Hint: using something like `const newArr = arrVar`, where `arrVar` is an array will simply create a reference to the existing variable and not a copy. So changing a value in `newArr` would change the value in `arrVar`. Declare function parameters - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
6. Use the `map` method to extract data from an array. The `map` method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array. When the callback is used, it is passed three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the map method was called.

```javascript
const users = [
	{ name: "John", age: 34 },
	{ name: "Amy", age: 20 },
	{ name: "camperCat", age: 10 },
];
const names = users.map((user) => user.name);
console.log(names);
```

7. Implement map on a prototype: As you have seen from applying `Array.prototype.map()`, or simply `map()` earlier, the map method returns an array of the same length as the one it was called on. It also doesn't alter the original array, as long as its callback function doesn't. In other words, map is a pure function, and its output depends solely on its inputs. Plus, it takes another function as its argument.

```javascript
// The global variable
const s = [23, 65, 98, 5];
Array.prototype.myMap = function (callback) {
	const newArray = [];
	// use this to access the elements of the array
	this.forEach((e) => newArray.push(callback(e)));
	return newArray;
};
const new_s = s.myMap(function (item) {
	return item * 2;
});
```

8. Use the filter method to extract data form an array. `filter` calls a function on each element of an array and returns a new array containing only the elements for which that function returns true. In other words, it filters the array, based on the function passed to it. Like `map`, it does this without needing to modify the original array. The callback function accepts three arguments. The first argument is the current element being processed. The second is the index of that element and the third is the array upon which the filter method was called.

```javascript
const users = [
	{ name: "John", age: 34 },
	{ name: "Amy", age: 20 },
	{ name: "camperCat", age: 10 },
];
const usersUnder30 = users.filter((user) => user.age < 30);
console.log(usersUnder30);
```

9. Return part of an array using the `slice` method: The `slice` method returns a copy of certain elements of an array. It can take two arguments, the first gives the index of where to begin the slice, the second is the index for where to end the slice (and it's non-inclusive). If the arguments are not provided, the default is to start at the beginning of the array through the end, which is an easy way to make a copy of the entire array. The `slice` method does not mutate the original array, but returns a new one.
10. Remove elements from an array using `slice` instead of `splice`. A common pattern while working with arrays is when you want to remove items and keep the rest of the array. JavaScript offers the `splice` method for this, which takes arguments for the index of where to start removing items, then the number of items to remove. If the second argument is not provided, the default is to remove items through the end. However, the `splice` method mutates the original array it is called on. Using the `slice` method instead of `splice` helps to avoid any array-mutating side effects.
11. Combine two arrays using the `concat` method. Concatenation means to join items end to end. JavaScript offers the concat method for both strings and arrays that work in the same way. For arrays, the method is called on one, then another array is provided as the argument to concat, which is added to the end of the first array. It returns a new array and does not mutate either of the original arrays. `[1, 2, 3].concat([4, 5, 6])` will return `[1, 2, 3, 4, 5, 6]`.
12. Add elements to the end of the array using `concat` instead of `push`. The `push` method adds an item to the end of an array. The `concat` method adds an array to the end of an array. The `push` method mutates the original array it is called on. Using `concat` instead of `push` helps to avoid any array-mutating side effects.
13. Use the `reduce` method to analyze data. Array.prototype.reduce(), or simply reduce(), is the most general of all array operations in JavaScript. You can solve almost any array processing problem using the reduce method.

    - The reduce method allows for more general forms of array processing, and it's possible to show that both filter and map can be derived as special applications of reduce. The reduce method iterates over each item in an array and returns a single value (i.e. string, number, object, array). This is achieved via a callback function that is called on each iteration.
    - The callback function accepts four arguments. The first argument is known as the accumulator, which gets assigned the return value of the callback function from the previous iteration, the second is the current element being processed, the third is the index of that element and the fourth is the array upon which reduce is called.
    - In addition to the callback function, reduce has an additional parameter which takes an initial value for the accumulator. If this second parameter is not used, then the first iteration is skipped and the second iteration gets passed the first element of the array as the accumulator.

```javascript
const users = [
	{ name: "John", age: 34 },
	{ name: "Amy", age: 20 },
	{ name: "camperCat", age: 10 },
];
const usersObj = users.reduce((obj, user) => {
	obj[user.name] = user.age;
	return obj;
}, {});
console.log(usersObj);
```

14. Sort an arry alphabetacally using the `sort` method. The `sort` method sorts an array alphabetically. JavaScript's default sorting method is by _string Unicode point value_, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items. When such a callback function, normally called `compareFunction`, is supplied, the array elements are sorted according to the return value of the compareFunction: If `compareFunction(a,b)` returns a value less than 0 for two elements a and b, then a will come before b. If `compareFunction(a,b)` returns a value greater than 0 for two elements a and b, then b will come before a. If `compareFunction(a,b)` returns a value equal to 0 for two elements a and b, then a and b will remain unchanged. A side effect of the `sort` method is that it changes the order of the elements in the original array. In other words, it mutates the array in place. One way to avoid this is to first concatenate an empty array to the one being sorted (remember that `slice` and `concat` return a new array), then run the `sort` method.

```javascript
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
	const rtn = arr.slice();
	// convert string to number first
	return rtn.sort((a, b) => Number(a) - Number(b));
}
nonMutatingSort(globalArray);
```

15. Split a string into an array using the `split` method.

```javascript
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);

const yetAnotherString = "Hello, world! I-am code.";
cosnt byNotAlphanumeric = yetAnotherString.split(/\W/);
```

16. Combine an array into a string using the `join` method.

```javascript
// The input is a string with spaces and title-cased words;
// The output is a string with the spaces between words replaced by a hyphen (-);
// The output should be all lower-cased letters;
//The output should not have any spaces
function urlSlug(title) {
	return title
		.split(/\W/)
		.filter((element) => /\w/.test(element))
		.map((element) => element.toLowerCase())
		.join("-");
}
```

17. Use the `every` method to check that every element in the array meets a criteria. The `every` method works with arrays to check if every element passes a particular test. It returns a Boolean value - `true` if all values meet the criteria, `false` if not.
18. Use the `some` method to check that any elements in an array meet the criteria. The `some` method works with arrays to check if any element passes a particular test. It returns a Boolean value - `true` if any of the values meet the criteria, `false` if not.
19. Introduction to currying and partial application. The arity of a function is the number of arguments it requires. Currying a function means to convert a function of N arity into N functions of arity 1. In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

```javascript
function unCurried(x, y) {
	return x + y;
}

function curried(x) {
	return function (y) {
		return x + y;
	};
}

const curried = (x) => (y) => x + y;

curried(1)(2);
```

### Q & A

1. Difference between `var`, `let` and `const`?

   - So unlike `var`, when you use `let`, a variable with the same name can only be declared once.
   - `const` has all the awesome features that `let` has, with the added bonus that variables declared using `const` are read-only.

2. Difference between `==` and `===` (same applies to `!=` and `!==`)?

   - `==` is a loose comparison operator. It compares the value of two operands and returns `true` if they are equal.
   - `===` is a strict comparison operator. It compares the value and type of two operands and returns `true` if they are equal.
   - Unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

   ```javascript
   console.log(3 == "3"); // true
   console.log(3 === "3"); // false
   ```

3. Check if a username is valid:

```javascript
/*
    1. Usernames can only use alpha-numeric characters.
    2. The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
    3. Username letters can be lowercase and uppercase.
    4. Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.
*/
let username = "JackOfAllTrades";
let userCheck = /^[a-z]+[a-z]+\d*$|^[a-z]\d+\d+$/i;
// const userCheck = /^[a-z]([0-9]{2,}|[a-z]+\d*)$/i;
let result = userCheck.test(username);
```

4. Remove whitespaces from start and end

```javascript
// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.
let hello = "   Hello, World!  ";
let wsRegex = /^\s+(.*\S)\s+$/; // because regex is greedy, so if you use /^\s+(.*)\s+$/, then the trailing whitespace will be not be all removed.
let wsRegex2 = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "$1");
```

5. Is JavaScript a pass by value or pass by reference language?

```javascript
function changeStuff(a, b, c) {
	a = a * 10;
	b.item = "changed";
	c = { item: "changed" };
}

var num = 10;
var obj1 = { item: "unchanged" };
var obj2 = { item: "unchanged" };

changeStuff(num, obj1, obj2);

console.log(num); // 10
console.log(obj1.item); // changed
console.log(obj2.item); // unchanged
```

In practical terms, this means that if you change the parameter itself (as with num and obj2), that won't affect the item that was fed into the parameter. But if you change the internals of the parameter, that will propagate back up (as with obj1). See also: <https://stackoverflow.com/questions/518000/is-javascript-a-pass-by-reference-or-pass-by-value-language>

6. Reverse a string.
   <https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/>

```
function reverseString(str) {
    return str.split("").reverse().join("");
}
```

7. Spinal Tap Case

```javascript
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/spinal-tap-case
function spinalCase(str) {
	return (
		str
			// adding space between lowercase and uppercase letters
			.replace(/([a-z])([A-Z])/g, "$1 $2")
			.replace(/\s+|_+/g, "-")
			.toLowerCase()
	);
}
function spinalCase2(str) {
	return str
		.split(/\s|_|(?=[A-Z])/)
		.join("-")
		.toLowerCase();
}
```

8. Convert HTML Entities

```javascript
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/convert-html-entities
function convertHTML(str) {
	const htmlChars = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		'"': "&quot;",
		"'": "&apos;",
	};
	// replace returns a new string
	return str.replace(/([&<>"'])/g, (match) => htmlChars[match]);
}

console.log(convertHTML("Dolce & Gabbana"));
```

9. Sum all odd Fibonacci numbers

```javascript
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-odd-fibonacci-numbers
function sumFibs(num) {
	let rtn = 0;
	let [first, second] = [0, 1];
	while (second <= num) {
		if (second % 2 === 1) {
			rtn += second;
		}
		[first, second] = [second, first + second];
	}
	return rtn;
}

sumFibs(4);

console.log(convertHTML("Dolce & Gabbana"));
```

10. Sum all primes

```javascript
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes
function sumPrimes(num) {
function sumPrimes(num) {
  let sumPrimes;
  const primeArr = Array(num+1).fill(true);
  [primeArr[0], primeArr[1]] = [false, false];
  for (let i = 2; i < Math.sqrt(num) + 1; i++) {
    if (primeArr[i] === true) {
      for (let j = 2 * i; j <= num; j += i) {
        primeArr[j] = false;
      }
    }
  }
  sumPrimes = primeArr.reduce((sum, curPrime, curIndex) => {
    if (curPrime === true) {
      return curIndex + sum;
    } else {
      return sum;
    }
  }, 0);
  return sumPrimes;
}
```

11. Smallest common multiple

```javascript
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/smallest-common-multiple
function smallestCommons(arr) {
	// Setup
	const [min, max] = arr.sort((a, b) => a - b);
	const range = Array(max - min + 1)
		.fill(0)
		.map((_, i) => i + min);
	// GCD of two numbers
	// https://en.wikipedia.org/wiki/Greatest_common_divisor#Euclid's_algorithm
	const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
	// LCM of two numbers
	// https://en.wikipedia.org/wiki/Least_common_multiple#Using_the_greatest_common_divisor
	const lcm = (a, b) => (a * b) / gcd(a, b);
	// LCM of multiple numbers
	// https://en.wikipedia.org/wiki/Least_common_multiple#Other
	return range.reduce((multiple, curr) => lcm(multiple, curr));
}
```

12. Steamroller

```javascript
// Flatten a nested array. You must account for varying levels of nesting.
function steamrollArray(arr) {
	let rtn = [];
	arr.forEach((ele) => {
		// check if something is an array
		if (Object.prototype.toString.call(ele) === "[object Array]") {
			rtn = rtn.concat(steamrollArray(ele));
		} else {
			rtn.push(ele);
		}
	});
	return rtn;
}
steamrollArray([1, [2], [3, [[4]]]]);
```

13. Binary Agents

```javascript
function binaryAgent(str) {
	const binArr = str.split(" ");
	let rtn = "";
	// convert binary string to decimal
	binArr.forEach((b) => (rtn += String.fromCharCode(parseInt(b, 2))));
	return rtn;
}

binaryAgent(
	"01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);
```

14. Everything Be True

```javascript
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/everything-be-true
// function truthCheck(collection, pre) {
//     return collection.every((obj) => obj[pre]);
// }
function truthCheck(collection, pre) {
	return (
		collection.length ===
		collection.filter((ob) => Object.keys(ob).includes(pre) && Boolean(ob[pre]))
			.length
	);
}
```

15. Arguments optional

```javascript
// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/arguments-optional
function addTogether() {
	const [first, second] = arguments;
	if (typeof first !== "number") return undefined;
	if (second === undefined)
		return (nextNumber) => addTogether(first, nextNumber);
	if (typeof second !== "number") return undefined;
	return first + second;
}
```
