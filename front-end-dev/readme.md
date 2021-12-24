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
