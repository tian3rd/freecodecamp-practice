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
