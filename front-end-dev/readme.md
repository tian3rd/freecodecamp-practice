## Bootstrap

0. Add the following to the top of HTML:

```html
<!-- version 3 (outdated) -->
<link
	rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
	integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
	crossorigin="anonymous"
/>
<!-- from https://getbootstrap.com/  -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
	crossorigin="anonymous"
/>
```

1. Use spans to create inline elements. By using the inline `span` element, you can put several elements on the same line, and even style different parts of the same line differently.
2. Add font awesome icons to buttons. Font Awesome is a convenient library of icons. These icons can be webfonts or vector graphics. These icons are treated just like fonts. You can specify their size using pixels, and they will assume the font size of their parent HTML elements.

```html
<!-- adding the following code to the top of your HTML: -->
<link
	rel="stylesheet"
	href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
	integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
	crossorigin="anonymous"
/>
<!-- newest version on: https://www.bootstrapcdn.com/fontawesome/ -->
<link
	rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css"
	integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7"
	crossorigin="anonymous"
/>
```

The `i` element was originally used to make other elements italic, but is now commonly used for icons. You can add the Font Awesome classes to the i element to turn it into an icon, for example: `<i class="fas fa-home"></i>`. Note that the `span` element is also acceptable for use with icons.

3. Style text inputs as form controls. All textual `<input>`, `<textarea>`, and `<select>` elements with the class `.form-control` have a width of 100%.

## jQuery

1. All jQuery functions start with a $, usually referred to as a dollar sign operator, or as bling.
2. `$("selector").action()`: e.g., `$("button").addClass("btn-primary")`, `$(".btn").removeClass("btn-primary")`, `$("#my-button").click(function() { alert("Hello!") })`, `$("#target1").html("<p>Hello!</p>")`, `$("#target1).css("color", "red")`, etc.
3. jQuery has a function called `.prop()` that allows you to adjust the properties of elements. E.g., `$("button").prop("disabled", true);`
4. jQuery has a function called `.html()` that lets you add HTML tags and text within an element. Any content previously _within_ the element will be completely replaced with the content you provide using this function. jQuery also has a similar function called `.text`() that only alters text without adding tags. In other words, this function will not evaluate any HTML tags passed to it, but will instead treat it as the text you want to replace the existing content with.
5. jQuery has a function called `.remove()` that will remove an HTML element entirely
6. jQuery has a function called `appendTo()` that allows you to select HTML elements and append them to another element.
7. jQuery has a function called `clone()` that makes a copy of an element. `$("#target2").clone().appendTo("#right-well");`
8. Every HTML element has a parent element from which it inherits properties. jQuery has a function called `parent()` that allows you to access the parent of whichever element you've selected. `$("#left-well").parent().css("background-color", "blue")`. jQuery has a function called `children()` that allows you to access the children of whichever element you've selected. `$("#left-well").children().css("color", "blue")`
9. jQuery uses CSS Selectors to target elements. The `target:nth-child(n)` CSS selector allows you to select all the nth elements with the target class or element type. `$(".target:nth-child(2)").addClass("animated bounce");`
10. jQuery can target the `body` element as well.

## SASS

1. One feature of Sass that's different than CSS is it uses variables. They are declared and set to store data, similar to JavaScript. In JavaScript, variables are defined using the `let` and `const` keywords. In Sass, variables start with a `$` followed by the variable name.

```html
<style type="text/scss">
	/*  */
</style>
```

```css
$main-fonts: Arial, sans-serif;
$headings-color: green;
h1 {
	font-family: $main-fonts;
	color: $headings-color;
}
```

2. Sass allows nesting of CSS rules, which is a useful way of organizing a style sheet.

```css
/* For a large project, the CSS file will have many lines and rules. This is where nesting can help organize your code by placing child style rules within the respective parent elements: */
nav {
	background-color: red;
	ul {
		list-style: none;
		li {
			display: inline-block;
		}
	}
}
```

3. Create reusable CSS with mixins. Mixins are like functions for CSS.

```css
@mixin box-shadow($x, $y, $blur, $c) {
	-webkit-box-shadow: $x $y $blur $c;
	-moz-box-shadow: $x $y $blur $c;
	-ms-box-shadow: $x $y $blur $c;
	box-shadow: $x $y $blur $c;
}
```

The definition starts with @mixin followed by a custom name. The parameters (the $x, $y, $blur, and $c in the example above) are optional. Now any time a box-shadow rule is needed, only a single line calling the mixin replaces having to type all the vendor prefixes. A mixin is called with the @include directive:

```css
div {
	@include box-shadow(0px, 0px, 4px, #fff);
}
```

Another example:

```html
<style type="text/scss">
	@mixin border-radius($radius) {
		-webkit-border-radius: $radius;
		-moz-border-radius: $radius;
		-ms-border-radius: $radius;
		border-radius: $radius;
	}
	#awesome {
		width: 150px;
		height: 150px;
		background-color: green;
		@include border-radius(15px);
	}
</style>

<div id="awesome"></div>
```

4. Use @if and @else to add logic to styles.

```css
@mixin text-effect($val) {
	@if $val == danger {
		color: red;
	} @else if $val == alert {
		color: yellow;
	} @else if $val == success {
		color: green;
	} @else {
		color: black;
	}
}
```

5. Use @for to create a SASS loop. The @for directive adds styles in a loop, very similar to a for loop in JavaScript. @for is used in two ways: "start through end" or "start to end". The main difference is that the "start to end" excludes the end number as part of the count, and "start through end" includes the end number as part of the count.

```css
@for $i from 1 through 12 {
	/* #{$i} part is the syntax to combine a variable (i) with text to make a string.  */
	.col-#{$i} {
		width: 100%/12 * $i;
	}
}
/* equivalent to the followings: */
.col-1 {
	width: 8.33333%;
}
.col-2 {
	width: 16.66667%;
}
.col-12 {
	width: 100%;
}
```

6. Sass also offers the @each directive which loops over each item in a list or map. On each iteration, the variable gets assigned to the current value from the list or map.

```css
@each $color in blue, red, green {
	.#{$color}-text {
		color: $color;
	}
}
/* or using a map */
$colors: (
	color1: blue,
	color2: red,
	color3: green,
);
@each $key, $color in $colors {
	.#{$color}-text {
		color: $color;
	}
}
```

7. Apply a style until a condition is met with @while. The @while directive is an option with similar functionality to the JavaScript while loop. It creates CSS rules until a condition is met.

```css
$x: 1;
@while $x < 13 {
	.col-#{$x} {
		width: 100%/12 * $x;
	}
	$x: $x + 1;
}
```

8. Split your styles into smaller chunks wiht partials. Partials in Sass are separate files that hold segments of CSS code. These are imported and used in other Sass files. Names for partials start with the underscore (`_`) character, which tells Sass it is a small segment of CSS and not to convert it into a CSS file. Also, Sass files end with the `.scss` file extension. To bring the code in the partial into another Sass file, use the `@import` directive.

```css
/*if all mixins are saved in a partial named "_mixins.scss", and they are needed in the "main.scss" file */
@import "mixins";
```

Note that the underscore and file extension are not needed in the import statement - Sass understands it is a partial. Once a partial is imported into a file, all variables, mixins, and other code are available to use.

9. Extend one set of CSS styles to another element. Sass has a feature called extend that makes it easy to borrow the CSS rules from one element and build upon them in another.

```css
.panel {
	background-color: red;
	height: 70px;
	border: 2px solid green;
}
.big-panel {
	@extend .panel;
	width: 150px;
	font-size: 2em;
}
```

## React

1. React is an Open Source view library created and maintained by Facebook. It's a great tool to render the User Interface (UI) of modern web applications. React uses a syntax extension of JavaScript called JSX that allows you to write HTML directly within JavaScript.
2. Because JSX is a syntactic extension of JavaScript, you can actually write JavaScript directly within JSX. To do this, you simply include the code you want to be treated as JavaScript within curly braces: `{ 'this is treated as JavaScript code' }`. However, because JSX is not valid JavaScript, JSX code must be compiled into JavaScript. The transpiler Babel is a popular tool for this process.
3. It's worth noting that under the hood the challenges are calling `ReactDOM.render(JSX, document.getElementById('root'))`. This function call is what places your JSX into React's own lightweight representation of the DOM. React then uses snapshots of its own DOM to optimize updating only specific parts of the actual DOM.
4. One important thing to know about nested JSX is that it must return a single element. To put comments inside JSX, you use the syntax `{/* */}` to wrap around the comment text.
5. With React, we can render this JSX directly to the HTML DOM using React's rendering API known as ReactDOM. ReactDOM offers a simple method to render React elements to the DOM which looks like this: `ReactDOM.render(componentToRender, targetNode)`, where the first argument is the React element or component that you want to render, and the second argument is the DOM node that you want to render the component to. As you would expect, `ReactDOM.render()` must be called after the JSX element declarations, just like how you must declare variables before using them.

```jsx
const JSX = (
	<div className="myDiv">
		<h1>Hello World</h1>
		<p>Lets render this to the DOM</p>
	</div>
);
ReactDOM.render(JSX, document.getElementById("challenge-node"));
```

6. Define an HTML class in JSX. One key difference in JSX is that you can no longer use the word `class` to define HTML classes. This is because `class` is a reserved word in JavaScript. Instead, JSX uses `className`. In fact, the naming convention for all HTML attributes and event references in JSX become camelCase. For example, a click event in JSX is `onClick`, instead of `onclick`. Likewise, `onchange` becomes `onChange`.
7. Another important way in which JSX differs from HTML is in the idea of the self-closing tag. Any JSX element can be written with a self-closing tag, and every element must be closed. The line-break tag, for example, must always be written as `<br />` in order to be valid JSX that can be transpiled. A `<div>`, on the other hand, can be written as `<div />` or `<div></div>`. The difference is that in the first syntax version there is no way to include anything in the `<div />`.
8. To create a component with a function, you simply write a JavaScript function that returns either JSX or null. One important thing to note is that React requires your function name to begin with a capital letter. Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. This is one of the key advantages of the component architecture React provides. It allows you to compose your UI from many separate, isolated components. This makes it easier to build and maintain complex user interfaces.

```jsx
const MyComponent = () => {
	return (
		<div className="myDiv">
			<h1>Hello World</h1>
			<p>Lets render this to the DOM</p>
		</div>
	);
};
```

9. The other way to define a React component is with the ES6 `class` syntax.

```jsx
class Kitten extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <h1>Hi</h1>;
	}
}
```

`Kitten` class has a constructor defined within it that calls `super()`. It uses `super()` to call the constructor of the parent class, in this case `React.Component`. The constructor is a special method used during the initialization of objects that are created with the class keyword. It is best practice to call a component's constructor with `super`, and pass `props` to both. This makes sure the component is initialized properly.

10. To render a component as a child in a React component, you include the component name written as a custom HTML tag in the JSX.

```jsx
return (
	<App>
		<Navbar />
		<Dashboard />
		<Footer />
	</App>
);
```

When React encounters a custom HTML tag that references another component (a component name wrapped in `< />` like in this example), it renders the markup for that component in the location of the tag. This should illustrate the parent/child relationship between the `App` component and the `Navbar`, `Dashboard`, and `Footer`.

11. Render a class component to the DOM. React components are passed into `ReactDOM.render()` a little differently than JSX elements. For JSX elements, you pass in the name of the element that you want to render. However, for React components, you need to use the same syntax as if you were rendering a nested component, for example `ReactDOM.render(<ComponentToRender />, targetNode)`. You use this syntax for both ES6 class components and functional components.

```jsx
class TypesOfFood extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Types of Food:</h1>
				<Fruits />
				<Vegetables />
			</div>
		);
	}
}
ReactDOM.render(<TypesOfFood />, document.getElementById("challenge-node"));
```

Remember, a typical React component is an ES6 class which extends React.Component. It has a render method that returns HTML (from JSX) or null. This is the basic form of a React component.

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>My First React Component!</h1>
			</div>
		);
	}
}
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node"));
```

12. Pass props to a stateless functional component. You use custom HTML attributes created by you and supported by React to be passed to the component. It is standard to call this value props and when dealing with stateless functional components, you basically consider it as an argument to a function which returns JSX. You can access the value of the argument in the function body. With class components, you will see this is a little different.

```jsx
<App>
  <Welcome user='Mark'>
</App>

const Welcome = (props) => {
  return (
    <div>
      <h1>Hello {props.user}!</h1>
    </div>
  );
}
```

```jsx
const CurrentDate = (props) => {
	return (
		<div>
			<p>The current date is: {props.date}</p>
		</div>
	);
};
class Calendar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>What date is it?</h3>
				{/* don't use new? */}
				<CurrentDate date={Date()} />
			</div>
		);
	}
}
```

13. Pass an arry as props. To pass an array to a JSX element, it must be treated as JavaScript and wrapped in curly braces.

```jsx
const List = (props) => {
	return <p>{props.tasks.join(", ")}</p>;
};

class ToDo extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>To Do Lists</h1>
				<h2>Today</h2>
				<List tasks={["walk dog", "workout"]} />
				<h2>Tomorrow</h2>
				<List tasks={["uber delivery", "email"]} />
			</div>
		);
	}
}
```

14. Use default props. React also has an option to set default props. You can assign default props to a component as a property on the component itself and React assigns the default prop if necessary. This allows you to specify what a prop value should be if no value is explicitly provided. For example, if you declare `MyComponent.defaultProps = { location: 'San Francisco' }`, you have defined a location prop that's set to the string San Francisco, unless you specify otherwise. React assigns default props if props are undefined, but if you pass `null` as the value for a prop, it will remain `null`.

```jsx
const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};
Items.defaultProps = {
	quantity: 0,
};

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		{
			/* wrap integer in curly braces to tell jsx to interpret the value within braces directly as JavaScript*/
		}
		return <Items quantity={10} />;
	}
}
```

15. Use proptypes to define the props you expect. React provides useful type-checking features to verify that components receive props of the correct type. For example, your application makes an API call to retrieve data that you expect to be in an array, which is then passed to a component as a prop. You can set `propTypes` on your component to require the data to be of type `array`. This will throw a useful warning when the data is of any other type.

`MyComponent.propTypes = { handleClick: PropTypes.func.isRequired }`

In the example above, the PropTypes.func part checks that handleClick is a function. Adding isRequired tells React that handleClick is a required property for that component. You will see a warning if that prop isn't provided. Also notice that func represents function. Among the seven JavaScript primitive types, function and boolean (written as bool) are the only two that use unusual spelling. In addition to the primitive types, there are other types available. For example, you can check that a prop is a React element. Refer to the [documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes) for all of the options. Note: As of React v15.5.0, `PropTypes` is imported independently from React, like this: `import PropTypes from 'prop-types';`

```jsx
const Items = (props) => {
	return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>;
};

Items.propTypes = { quantity: PropTypes.number.isRequired };
Items.defaultProps = { quantity: 0 };

class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <Items />;
	}
}
```

16. Access props using `this.props`. Anytime you refer to a class component within itself, you use the `this` keyword. To access props within a class component, you preface the code that you use to access it with `this`. For example, if an ES6 class component has a prop called data, you write `{this.props.data}` in JSX.

```jsx
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Welcome name="Phi" />
			</div>
		);
	}
}

class Welcome extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<p>
					Hello, <strong>{this.props.name}</strong>!
				</p>
			</div>
		);
	}
}
```

17. A _stateless functional component_ is any function you write which accepts props and returns JSX. A _stateless component_, on the other hand, is a class that extends `React.Component`, but does not use internal state. Finally, a _stateful component_ is a class component that does maintain its own internal state. You may see stateful components referred to simply as components or React components. A common pattern is to try to minimize statefulness and to create stateless functional components wherever possible. This helps contain your state management to a specific area of your application. In turn, this improves development and maintenance of your app by making it easier to follow how changes to state affect its behavior.

```jsx
class CampSite extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Camper />
			</div>
		);
	}
}
const Camper = (props) => {
	return <p>{props.name}</p>;
};

Camper.defaultProps = {
	name: "CamperBot",
};
Camper.propTypes = {
	name: PropTypes.string.isRequired,
};
```

18. Create a stateful component. You create state in a React component by declaring a state property on the component class in its constructor. This initializes the component with state when it is created. The state property must be set to a JavaScript object. `this.state = {};` You have access to the state object throughout the life of your component. You can update it, render it in your UI, and pass it as props to child components. The state object can be as complex or as simple as you need it to be. Note that you must create a class component by extending React.Component in order to create state like this.

```jsx
class StatefulComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Phi",
		};
	}
	render() {
		return (
			<div>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}
```

19. Render state in the UI. If a component is stateful, it will always have access to the data in state in its `render()` method. You can access the data with `this.state`. If you want to access a state value within the return of the render method, you have to enclose the value in curly braces. For example, if you want to access the value of `this.state.name`, you would write `{this.state.name}`. state is one of the most powerful features of components in React. It allows you to track important data in your app and render a UI in response to changes in this data. If your data changes, your UI will change. React uses what is called a virtual DOM, to keep track of changes behind the scenes. When state data updates, it triggers a re-render of the components using that data - including child components that received the data as a prop. React updates the actual DOM, but only where necessary. This means you don't have to worry about changing the DOM. You simply declare what the UI should look like. Note that if you make a component stateful, no other components are aware of its state. Its state is completely encapsulated, or local to that component, unless you pass state data to a child component as props. This notion of encapsulated state is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code.

20. There is another way to access state in a component. In the `render()` method, before the `return` statement, you can write JavaScript directly. For example, you could declare functions, access data from state or props, perform computations on this data, and so on. Then, you can assign any data to variables, which you have access to in the return statement.

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "freeCodeCamp",
		};
	}
	render() {
		const name = this.state.name;
		return (
			<div>
				<h1>{name}</h1>
			</div>
		);
	}
}
```

21. Set state with `this.setState`. React provides a method for updating component state called setState. You call the setState method within your component class like so: `this.setState()`, passing in an object with key-value pairs. The keys are your state properties and the values are the updated state data. For example, `this.setState({username: 'Lewis'});` React expects you to never modify state directly, instead always use this.setState() when state changes occur. Also, you should note that React may batch multiple state updates in order to improve performance. What this means is that state updates through the setState method can be asynchronous.

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "Initial State",
		};
		// bind: if `this` is not binded, the next handleClick() method doesn't know what `this` is, therefore can't use setState() etc.
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ name: "React Rocks!" });
	}
	render() {
		return (
			<div>
				<button onClick={this.handleClick}>Click Me</button>
				<h1>{this.state.name}</h1>
			</div>
		);
	}
}
```

22. Bind `this` to a class method. A class method typically needs to use the `this` keyword so it can access properties on the class (such as state and props) inside the scope of the method. One common way is to explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized.

23. Use state to toggle an element. Using a function with setState guarantees you are working with the most current values of state and props.

```jsx
this.setState((state, props) => ({
	counter: state.counter + props.increment,
}));
// Note that you have to wrap the object literal in parentheses, otherwise JavaScript thinks it's a block of code.
this.setState((state) => ({
	counter: state.counter + 1,
}));
```

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		// this.state is a reserved property: this.props is set up by React itself and this.state has a special meaning
		this.state = {
			visibility: false,
		};
		this.toggleVisibility = this.toggleVisibility.bind(this);
	}
	toggleVisibility() {
		// wrong: state updates may be asynchronous - this means React may batch multiple setState() calls into a single update. This means you can't rely on the previous value of this.state or this.props when calculating the next value.
		// this.setState({ visibility: !this.state.visibility });
		this.setState((state) => ({ visibility: !state.visibility }));
	}
	render() {
		if (this.state.visibility) {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
					<h1>Now you see me!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleVisibility}>Click Me</button>
				</div>
			);
		}
	}
}
```

```jsx
// another example
class Counter extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			btnName: "Current Count: ",
		};
		this.increment = this.increment.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}
	increment() {
		this.setState((state) => ({
			count: state.count + 1,
			btnName: "Current Count(I): ",
		}));
	}
	decrement() {
		this.setState((state) => ({
			count: state.count - 1,
			btnName: "Current Count(D): ",
		}));
	}
	reset() {
		this.setState((state) => ({ count: 0, btnName: "Current Count(R): " }));
	}
	render() {
		return (
			<div>
				<button className="inc" onClick={this.increment}>
					Increment!
				</button>
				<button className="dec" onClick={this.decrement}>
					Decrement!
				</button>
				<button className="reset" onClick={this.reset}>
					Reset
				</button>
				<h1>
					{this.state.btnName} {this.state.count}
				</h1>
			</div>
		);
	}
}
```

24. Create a controlled input. Your application may have more complex interactions between state and the rendered UI. For example, form control elements for text input, such as input and textarea, maintain their own state in the DOM as the user types. With React, you can move this mutable state into a React component's state. The user's input becomes part of the application state, so React controls the value of that input field. Typically, if you have React components with input fields the user can type into, it will be a controlled input form.

```jsx
class ControlledInput extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		const userInput = event.target.value;
		this.setState((state) => ({
			input: userInput,
		}));
		/* 2nd way to avoid event.target.value is null problem, refer to https://stackoverflow.com/questions/58059004/input-field-target-is-null-while-accessing-in-onchange-field-in-reactjs 
        event.persist();
        this.setState((state) => ({
          input: event.target.value,
        }))
        */
	}
	// Change code above this line
	render() {
		return (
			<div>
				{/* Change code below this line */}
				<input
					value={this.state.input}
					onChange={(e) => this.handleChange(e)}
				/>
				{/* Change code above this line */}
				<h4>Controlled Input:</h4>
				<p>{this.state.input}</p>
			</div>
		);
	}
}
```

```jsx
// another example
class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			submit: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		this.setState({
			input: event.target.value,
		});
	}
	handleSubmit(event) {
		event.preventDefault();
		this.setState((state) => ({
			submit: state.input,
		}));
	}
	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input value={this.state.input} onChange={this.handleChange} />
					<button type="submit">Submit!</button>
				</form>
				<h1>{this.state.submit}</h1>
			</div>
		);
	}
}
```

25. Pass state as props to child components. You can also pass handler functions or any method that's defined on a React component to a child component. This is how you allow child components to interact with their parent components. You pass methods to a child just like a regular prop. It's assigned a name and you have access to that method name under `this.props` in the child component.
    - The first important paradigm in React is unidirectional data flow. State flows in one direction down the tree of your application's components, from the stateful parent component to child components. The child components only receive the state data they need.
    - The second is that complex stateful apps can be broken down into just a few, or maybe a single, stateful component. The rest of your components simply receive state from the parent as props, and render a UI from that state. It begins to create a separation where state management is handled in one part of code and UI rendering in another. This principle of separating state logic from UI logic is one of React's key principles.

```jsx
class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "CamperBot",
		};
	}
	render() {
		return (
			<div>
				<Navbar name={this.state.name} />
			</div>
		);
	}
}

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h1>Hello, my name is: {this.props.name}</h1>
			</div>
		);
	}
}
```

```jsx
class MyApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inputValue: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({
			inputValue: event.target.value,
		});
	}
	render() {
		return (
			<div>
				<GetInput
					input={this.state.inputValue}
					handleChange={this.handleChange}
				/>
				<RenderInput input={this.state.inputValue} />
			</div>
		);
	}
}

class GetInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Get Input:</h3>
				<input value={this.props.input} onChange={this.props.handleChange} />
			</div>
		);
	}
}

class RenderInput extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Input Render:</h3>
				<p>{this.props.input}</p>
			</div>
		);
	}
}
```

Observe how the data flows between the components and how the single source of truth remains the state of the parent component.

26. Use the lifecycle methods. React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods: `componentWillMount()` `componentDidMount()` `shouldComponentUpdate()` `componentDidUpdate()` `componentWillUnmount()`

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	// The componentWillMount() method is called before the render() method when a component is being mounted to the DOM.
	componentWillMount() {
		console.log("Before rendering");
	}
	render() {
		return <div />;
	}
}
```

27. Use `componentDidMount()`. The best practice with React is to place API calls or any calls to your server in the lifecycle method `componentDidMount()`. This method is called after a component is mounted to the DOM. Any calls to `setState()` here will trigger a _re-rendering_ of your component. When you call an API in this method, and set your state with the data that the API returns, it will automatically trigger an update once you receive the data.

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeUsers: null,
		};
	}
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				activeUsers: 1273,
			});
		}, 2500);
	}
	render() {
		return (
			<div>
				<h1>Active Users: {this.state.activeUsers}</h1>
			</div>
		);
	}
}
```

28. Add event listener. The `componentDidMount()` method is also the best place to attach any event listeners you need to add for specific functionality. React provides a synthetic event system which wraps the native event system present in browsers. This means that the synthetic event system behaves exactly the same regardless of the user's browser - even if the native events may behave differently between different browsers. React's synthetic event system is great to use for most interactions you'll manage on DOM elements. However, if you want to attach an event handler to the document or window objects, you have to do this directly.

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			message: "",
		};
		this.handleEnter = this.handleEnter.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	componentDidMount() {
		// use this keyword to refer to the component
		document.addEventListener("keydown", this.handleKeyPress);
	}
	componentWillUnmount() {
		document.removeEventListener("keydown", this.handleKeyPress);
	}
	handleEnter() {
		this.setState((state) => ({
			message: state.message + "You pressed the enter key! ",
		}));
	}
	handleKeyPress(event) {
		if (event.keyCode === 13) {
			this.handleEnter();
		}
	}
	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
			</div>
		);
	}
}
```

29. Optimize re-renders with `shouldComponentUpdate`. The default behavior is that your component re-renders when it receives new props, even if the props haven't changed. You can use `shouldComponentUpdate()` to prevent this by comparing the props. The method must return a boolean value that tells React whether or not to update the component. You can compare the current props (`this.props`) to the next props (`nextProps`) to determine if you need to update or not, and return true or false accordingly.

```jsx
class OnlyEvens extends React.Component {
	constructor(props) {
		super(props);
	}
	shouldComponentUpdate(nextProps, nextState) {
		console.log("Should I update?");
		// only re-render when it's even
		return nextProps.value % 2 === 0;
	}
	componentDidUpdate() {
		console.log("Component re-rendered.");
	}
	render() {
		return <h1>{this.props.value}</h1>;
	}
}

class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0,
		};
		this.addValue = this.addValue.bind(this);
	}
	addValue() {
		this.setState((state) => ({
			value: state.value + 1,
		}));
	}
	render() {
		return (
			<div>
				<button onClick={this.addValue}>Add</button>
				<OnlyEvens value={this.state.value} />
			</div>
		);
	}
}
```

30. Inline styles.

```jsx
<div style="color: yellow; font-size: 16px">Mellow Yellow</div>
// React will not accept kebab-case keys in the style object
<div style={{color: "yellow", fontSize: 16}}>Mellow Yellow</div>

const styles = {
  color: "purple",
  fontSize: 40,
  border: "2px solid purple"
}
// Change code above this line
class Colorful extends React.Component {
  render() {
    // Change code below this line
    return (
      <div style={styles}>Style Me!</div>
    );
    // Change code above this line
  }
};
```

Note all property value length units (like height, width, and fontSize) are assumed to be in px unless otherwise specified. If you have a large set of styles, you can assign a style object to a constant to keep your code organized.

31. Use advanced JavaScript in React render method.

```jsx
const inputStyle = {
	width: 235,
	margin: 5,
};

class MagicEightBall extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: "",
			randomIndex: "",
		};
		this.ask = this.ask.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	ask() {
		if (this.state.userInput) {
			this.setState({
				randomIndex: Math.floor(Math.random() * 20),
				userInput: "",
			});
		}
	}
	handleChange(event) {
		this.setState({
			userInput: event.target.value,
		});
	}
	render() {
		const possibleAnswers = [
			"It is certain",
			"It is decidedly so",
			"Without a doubt",
			"Yes, definitely",
			"You may rely on it",
			"As I see it, yes",
			"Outlook good",
			"Yes",
			"Signs point to yes",
			"Reply hazy try again",
			"Ask again later",
			"Better not tell you now",
			"Cannot predict now",
			"Concentrate and ask again",
			"Don't count on it",
			"My reply is no",
			"My sources say no",
			"Most likely",
			"Outlook not so good",
			"Very doubtful",
		];
		const answer = possibleAnswers[this.state.randomIndex];
		return (
			<div>
				<input
					type="text"
					value={this.state.userInput}
					onChange={this.handleChange}
					style={inputStyle}
				/>
				<br />
				<button onClick={this.ask}>Ask the Magic Eight Ball!</button>
				<br />
				<h3>Answer:</h3>
				<p>{answer}</p>
			</div>
		);
	}
}
```

32. Render with an `if-else` statement or using `&&` for a more concise conditional or a ternary operator.

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true,
		};
		this.toggleDisplay = this.toggleDisplay.bind(this);
	}
	toggleDisplay() {
		this.setState((state) => ({
			display: !state.display,
		}));
	}
	render() {
		if (this.state.display) {
			return (
				<div>
					<button onClick={this.toggleDisplay}>Toggle Display</button>
					<h1>Displayed!</h1>
				</div>
			);
		} else {
			return (
				<div>
					<button onClick={this.toggleDisplay}>Toggle Display</button>
				</div>
			);
		}
	}
}
```

```jsx
class MyComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: true,
		};
		this.toggleDisplay = this.toggleDisplay.bind(this);
	}
	toggleDisplay() {
		this.setState((state) => ({
			display: !state.display,
		}));
	}
	render() {
		return (
			<div>
				<button onClick={this.toggleDisplay}>Toggle Display</button>
				{this.state.display && <h1>Displayed!</h1>}
			</div>
		);
	}
}
```

```jsx
const inputStyle = {
	width: 235,
	margin: 5,
};

class CheckUserAge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			userAge: "",
		};
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(e) {
		this.setState({
			input: e.target.value,
			userAge: "",
		});
	}
	submit() {
		this.setState((state) => ({
			userAge: state.input,
		}));
	}
	render() {
		const buttonOne = <button onClick={this.submit}>Submit</button>;
		const buttonTwo = <button>You May Enter</button>;
		const buttonThree = <button>You Shall Not Pass</button>;
		return (
			<div>
				<h3>Enter Your Age to Continue</h3>
				<input
					style={inputStyle}
					type="number"
					value={this.state.input}
					onChange={this.handleChange}
				/>
				<br />
				{this.state.userAge === ""
					? buttonOne
					: this.state.input < 18
					? buttonThree
					: buttonTwo}
			</div>
		);
	}
}
```

33. Render conditionally from props.

```jsx
class Results extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <h1>{this.props.fiftyFifty >= 0.5 ? "You Win!" : "You Lose!"}</h1>;
	}
}

class GameOfChance extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			counter: 1,
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState((prevState) => {
			return {
				counter: prevState.counter + 1,
			};
		});
	}
	render() {
		const expression = Math.random();
		return (
			<div>
				<button onClick={this.handleClick}>Play Again</button>
				{/* Change code below this line */}
				<Results fiftyFifty={expression} />
				{/* Change code above this line */}
				<p>{"Turn: " + this.state.counter}</p>
			</div>
		);
	}
}
```

34. Change inline CSS conditionally based on component state.

```jsx
class GateKeeper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
		};
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ input: event.target.value });
	}
	render() {
		let inputStyle = {
			border: "1px solid black",
		};
		if (this.state.input.length > 15) {
			inputStyle.border = "3px solid red";
		}
		return (
			<div>
				<h3>Don't Type Too Much:</h3>
				<input
					type="text"
					style={inputStyle}
					value={this.state.input}
					onChange={this.handleChange}
				/>
			</div>
		);
	}
}
```

35. Use `Array.map() to dynamically render elements.

```jsx
const textAreaStyles = {
	width: 235,
	margin: 5,
};

class MyToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: "",
			toDoList: [],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}
	handleSubmit() {
		const itemsArray = this.state.userInput.split(",");
		this.setState({
			toDoList: itemsArray,
		});
	}
	handleChange(e) {
		this.setState({
			userInput: e.target.value,
		});
	}
	render() {
		const items = this.state.toDoList.map((item, index) => {
			return <li key={index}>{item}</li>;
		});
		return (
			<div>
				<textarea
					onChange={this.handleChange}
					value={this.state.userInput}
					style={textAreaStyles}
					placeholder="Separate Items With Commas"
				/>
				<br />
				<button onClick={this.handleSubmit}>Create List</button>
				<h1>My "To Do" List:</h1>
				<ul>{items}</ul>
			</div>
		);
	}
}
```

36. Use `Array.filter()` to dynamically filter an array.
37. Render React on the server with `renderToString()`. The `renderToString()` method is provided on `ReactDOMServer`, which is available as a global object. The method takes one argument which is a React element.
    - There are two key reasons why rendering on the server may be used in a real world app. First, without doing this, your React apps would consist of a relatively empty HTML file and a large bundle of JavaScript when it's initially loaded to the browser. This may not be ideal for search engines that are trying to index the content of your pages so people can find you. If you render the initial HTML markup on the server and send this to the client, the initial page load contains all of the page's markup which can be crawled by search engines.
    - Second, this creates a faster initial page load experience because the rendered HTML is smaller than the JavaScript code of the entire app. React will still be able to recognize your app and manage it after the initial load.

```jsx
class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return <div />;
	}
}
ReactDOMServer.renderToString(<App />);
```

## Redux

1. What is Redux?
   - Redux is a state management framework that can be used with a number of different web technologies, including React.
   - In Redux, there is a single state object that's responsible for the entire state of your application. This means if you had a React app with ten components, and each component had its own local state, the entire state of your app would be defined by a single state object housed in the Redux `store`. This is the first important principle to understand when learning Redux: the Redux store is the single source of truth when it comes to application state.
   - This also means that any time any piece of your app wants to update state, it must do so through the Redux store. The unidirectional data flow makes it easier to track state management in your app.
   - The Redux store is an object which holds and manages application state. There is a method called `createStore()` on the Redux object, which you use to create the Redux store. This method takes a reducer function as a required argument. It simply takes state as an argument and returns state.

```javascript
const reducer = (state = 5) => state;
const store = Redux.createStore(reducer);
```

2. Get state from the redux store using `getState()`.
3. Define a redux action. `const action = { type: 'ACTION_TYPE' }`

   - Since Redux is a state management framework, updating state is one of its core tasks. In Redux, all state updates are triggered by dispatching actions. An action is simply a JavaScript object that contains information about an action event that has occurred. The Redux store receives these action objects, then updates its state accordingly. Sometimes a Redux action also carries some data. For example, the action carries a username after a user logs in. While the data is optional, actions must carry a `type` property that specifies the 'type' of action that occurred.
   - Think of Redux actions as messengers that deliver information about events happening in your app to the Redux store. The store then conducts the business of updating state based on the action that occurred.

4. Define an action creator.
   - After creating an action, the next step is sending the action to the Redux store so it can update its state. In Redux, you define action creators to accomplish this. An action creator is simply a JavaScript function that returns an action. In other words, action creators create objects that represent action events.

```javascript
const actionCreator = () => {
	return {
		type: "ACTION_TYPE",
	};
};
```

5. Dispatch an action event.
   - `dispatch` method is what you use to dispatch actions to the Redux store. Calling `store.dispatch()` and passing the value returned from an action creator sends an action back to the store.
   - Action creators return an object with a type property that specifies the action that has occurred. Then the method dispatches an action object to the Redux store.

```javascript
const store = Redux.createStore((state = { login: false }) => state);
const loginAction = () => {
	return {
		type: "LOGIN",
	};
};
store.dispatch(loginAction());
```

6. Handle an action in the store.
   - After an action is created and dispatched, the Redux store needs to know how to respond to that action. This is the job of a `reducer` function. Reducers in Redux are responsible for the state modifications that take place in response to actions. A reducer takes `state` and `action` as arguments, and it always returns a new state. It is important to see that this is the only role of the reducer. It has no side effects — it never calls an API endpoint and it never has any hidden surprises. The reducer is simply a pure function that takes state and action, then returns new state.
   - Another key principle in Redux is that `state` is read-only. In other words, the reducer function must always return a new copy of state and never modify state directly. Redux does not enforce state immutability, however, you are responsible for enforcing it in the code of your reducer functions.

```javascript
const defaultState = {
	login: false,
};
const reducer = (state = defaultState, action) => {
	if (action.type === "LOGIN") return { login: true };
	else return state;
};
const store = Redux.createStore(reducer);
const loginAction = () => {
	return {
		type: "LOGIN",
	};
};
```

```javascript
// another example
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";
const defaultState = {
	authenticated: false,
};
const authReducer = (state = defaultState, action) => {
	switch (action.type) {
		case LOGIN:
			return { authenticated: true };
		case LOGOUT:
			return { authenticated: false };
		default:
			return state;
	}
};
const store = Redux.createStore(authReducer);
const loginUser = () => {
	return { type: LOGIN };
};
const logoutUser = () => {
	return { type: LOGOUT };
};
```

7. Register a store listener using `store.subscribe()`.
   - This allows you to subscribe listener functions to the store, which are called whenever an action is dispatched against the store. One simple use for this method is to subscribe a function to your store that simply logs a message every time an action is received and the store is updated.

```javascript
// increment the global variable count every time the store receives an action
const ADD = "ADD";
const reducer = (state = 0, action) => {
	switch (action.type) {
		case ADD:
			return state + 1;
		default:
			return state;
	}
};
store.subscribe(() => {
	count += 1;
});
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
```

8. Combine multiple reducers.
   - When the state of your app begins to grow more complex, it may be tempting to divide state into multiple pieces. Instead, remember the first principle of Redux: all app state is held in a single state object in the store. Therefore, Redux provides reducer composition as a solution for a complex state model. You define multiple reducers to handle different pieces of your application's state, then compose these reducers together into one root reducer. The root reducer is then passed into the Redux `createStore()` method.
   - In order to let us combine multiple reducers together, Redux provides the combineReducers() method. This method accepts an object as an argument in which you define properties which associate keys to specific reducer functions. The name you give to the keys will be used by Redux as the name for the associated piece of state.
   - Typically, it is a good practice to create a reducer for each piece of application state when they are distinct or unique in some way. For example, in a note-taking app with user authentication, one reducer could handle authentication while another handles the text and notes that the user is submitting.

```javascript
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const counterReducer = (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			return state + 1;
		case DECREMENT:
			return state - 1;
		default:
			return state;
	}
};

const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

const authReducer = (state = { authenticated: false }, action) => {
	switch (action.type) {
		case LOGIN:
			return {
				authenticated: true,
			};
		case LOGOUT:
			return {
				authenticated: false,
			};
		default:
			return state;
	}
};

const rootReducer = Redux.combineReducers({
	count: counterReducer,
	auth: authReducer,
});

const store = Redux.createStore(rootReducer);
```

9. Send action data to the store.

```javascript
const ADD_NOTE = "ADD_NOTE";

const notesReducer = (state = "Initial State", action) => {
	switch (action.type) {
		case ADD_NOTE:
			return action.text;
		default:
			return state;
	}
};

const addNoteText = (note) => {
	return {
		type: ADD_NOTE,
		text: note,
	};
};
const store = Redux.createStore(notesReducer);
console.log(store.getState());
store.dispatch(addNoteText("Hello!"));
console.log(store.getState());
```

10. Use middleware to handle asynchronous actions.
    - To include Redux Thunk middleware, you pass it as an argument to `Redux.applyMiddleware()`. This statement is then provided as a second optional parameter to the `createStore()` function. Then, to create an asynchronous action, you return a function in the action creator that takes dispatch as an argument. Within this function, you can dispatch actions and perform asynchronous requests.
    - In the following example, an asynchronous request is simulated with a `setTimeout()` call. It's common to dispatch an action before initiating any asynchronous behavior so that your application state knows that some data is being requested (this state could display a loading icon, for instance). Then, once you receive the data, you dispatch another action which carries the data as a payload along with information that the action is completed.
    - You're passing dispatch as a parameter to this special action creator. This is what you'll use to dispatch your actions, you simply pass the action directly to dispatch and the middleware takes care of the rest.

```javascript
const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
	return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
	return { type: RECEIVED_DATA, users: data.users };
};

// where is this handleAsync used??
const handleAsync = () => {
	return function (dispatch) {
		// Dispatch request action here
		dispatch(requestingData());
		setTimeout(function () {
			let data = {
				users: ["Jeff", "William", "Alice"],
			};
			// Dispatch received data action here
			dispatch(receivedData(data));
		}, 2500);
	};
};

const defaultState = {
	fetching: false,
	users: [],
};

const asyncDataReducer = (state = defaultState, action) => {
	switch (action.type) {
		case REQUESTING_DATA:
			return {
				fetching: true,
				users: [],
			};
		case RECEIVED_DATA:
			return {
				fetching: false,
				users: action.users,
			};
		default:
			return state;
	}
};

const store = Redux.createStore(
	asyncDataReducer,
	Redux.applyMiddleware(ReduxThunk.default)
);
```

11. A review snippet.

```javascript
const INCREMENT = "INCREMENT"; // Define a constant for increment action types
const DECREMENT = "DECREMENT"; // Define a constant for decrement action types

const counterReducer = (state = 0, action) => {
	// don't forget to initialize state here
	if (action.type === INCREMENT) state += 1;
	if (action.type === DECREMENT) state -= 1;
	return state;
}; // Define the counter reducer which will increment or decrement the state based on the action it receives

const incAction = () => ({ type: INCREMENT }); // Define an action creator for incrementing

const decAction = () => ({ type: DECREMENT }); // Define an action creator for decrementing

const store = Redux.createStore(counterReducer); // Define the Redux store here, passing in your reducers
```
