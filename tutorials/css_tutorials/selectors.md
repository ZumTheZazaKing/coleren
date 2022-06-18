---
id: 3
title: 'CSS Selectors'
metaTitle: 'CSS Selectors'
metaDesc: 'CSS Selectors'
colorClass: "bg-red-500"
previousTitle: "CSS Syntax"
previous: "css/syntax"
nextTitle: "CSS Combinators"
next: "css/combinators"
tags:
  - css
  - beginnings
  - selectors
---
A CSS selector selects the HTML element(s) that will be affected by a CSS rule.

> CSS selectors can be used in the `querySelector()` JavaScript method!


## The CSS element selector
- This will select HTML elements based on the element name.

```css
p {
    text-align: center;
    color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p+{+,++++text-align%3A+center;+,++++color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++<p>This+will+be+styled</p>+,++<h2>This+will+not+be+styled</h2>+,++<p>This+will+be+styled</p>+,</body>+,</html>#special)


## The CSS `id` selector
- This will select HTML elements based on the `id` attribute.
- The `id` of an element is unique within a page, so the `id` selector can only be used to select a single element.
- To select an element with a specific `id`, you can use the hash character `#` followed by the `id` value.

```css
#header {
    text-align: center;
    color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++%23header+{+,++++text-align%3A+center;+,++++color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++<h2+id='header'>This+is+a+styled+header</h2+id=>+,++<p>This+is+a+non-styled+paragraph</p>+,</body>+,</html>#special)


## The CSS `class` selector
- This will select HTML elements based on the `class` attribute.
- The `class` of an element is not unique within a page, so the `class` selector can be used to select multiple elements.
- To select an element with a specific `class`, you can use the period character `.` followed by the `class` value.

```css
.red {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++%2Ered+{+,++++color%3A+red;+,++}+,</style>+,</head>+,<body>+,++<h2+class='red'>This+is+Coleren</h2>+,++<p+class='red'>Where+learning+is+a+continuos+process</p>+,</body>+,</html>#special)

&nbsp;

You can also make it so only specific HTML elements are affected by a class.
```css
p.red {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p%2Ered+{+,++++color%3A+red;+,++}+,</style>+,</head>+,<body>+,++<h2+class='red'>This+will+not+be+affected+by+the+class</h2>+,++<p+class='red'>This+will+though</p>+,</body>+,</html>#special)

&nbsp;

HTML elements can have multiple classes to refer to with the classes separated by spaces.
```css
<p class="center large">This paragraph refers to two classes.</p>
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++%2Ecenter+{+,++++text-align%3A+center;+,++}+,++%2Elarge+{+,++++font-size%3A+20px;+,++}+,</style>+,</head>+,<body>+,++<p+class='large'>This+paragraph+refers+to+one+class</p>+,++<p+class='large+center'>This+paragraph+refers+to+two+classes</p>+,</body>+,</html>#special)

> Remember: Class names can't start with numbers!


## The CSS Universal Selector

This will select all HTML elements on the page.
```css
* {
    color: red;
    text-align: center;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++*+{+,++++color%3A+red;+,++++text-align%3A+center+,++}+,</style>+,</head>+,<body>+,++<h2>This+is+Coleren</h2>+,++<p>Where+learning+is+a+continuos+process</p>+,</body>+,</html>#special)


## The CSS Grouping Selector
- The grouping selector is used to select multiple elements and give them the same style definitions. 
- To group selectors, you can use the comma character `,` to separate the selectors.

So, this:
```css
h1 {
    color: blue;
    text-align: center;
}
h2 {
    color: blue;
    text-align: center;
}
p {
    color: blue;
    text-align: center;
}
```

can be written as:

```css
h1, h2, p {
    color: blue;
    text-align: center;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++h1%2C+h2%2C+p+{+,++++color%3A+blue;+,++++text-align%3A+center+,++}+,</style>+,</head>+,<body>+,++<h1>Heading1</h1>+,++<h2>Heading+2</h2>+,++<p>Paragraph</p>+,</body>+,</html>#special)

&nbsp;

These are just the simple and basic CSS selectors.

CSS selectors can be divided into five categories:

- **Simple selectors** _(the one we learn on this page)_
- [Combinator selectors](combinators)
- [Pseudo-class selectors](pseudo-class)
- [Pseudo-element selectors](pseudo-element)
- [Attribute selectors](attribute-selectors)

Find out more about them on their dedicated pages.