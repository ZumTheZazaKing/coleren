---
id: 6
title: 'CSS Pseudo-element'
metaTitle: 'CSS Pseudo-element'
metaDesc: 'CSS Pseudo-element'
colorClass: "bg-blue-500"
previousTitle: "CSS Psedo-class"
previous: "css/pseudo-class"
nextTitle: "CSS Attribute Selectors"
next: "css/attribute-selectors"
tags:
  - css
  - selectors
  - pseudo-elements
---
A CSS pseudo-element is used to style certain parts of an element.

It can be used to:

- Style the first letter or line of an element.
- Insert content before or after the content of an element.

```css
selector::pseudo-element {
  property: value;
}
```
> Single colons `:` are for pseudo-classes
>
> Double colons `::` are for pseudo-elements


## The `::first-line` Pseudo-element

The `::first-line` pseudo-element can be used to style the first line of a text _(obviously)_.

In this example, the first line of the `<p>` element will be formatted according to the styles given. 

```css
p::first-line {
  color: blue;
  font-variant: small-caps;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p%3A%3Afirst-line+{+,++++color%3A+blue;+,++++font-variant%3A+small-caps;+,++}+,</style>+,</head>+,<body>+,++<p>Lorem+ipsum+dolor+sit+amet,+consectetur+adipiscing+elit.+Nulla+lobortis+quam+turpis,+fringilla+rutrum+elit+bibendum+non.+Fusce+lacinia,+lacus+at+interdum+suscipit,+diam+ligula+mattis+urna,+et+sollicitudin+leo+eros+quis+ligula.+Phasellus+venenatis+pulvinar+orci+eget+consequat.+In+dictum+at+diam+nec+vestibulum.+Maecenas+dignissim+dictum+elit+non+interdum.+Donec+finibus+tortor+ultrices+dui+imperdiet,+quis+malesuada+enim+elementum.+In+ornare+enim+non+lorem+iaculis,+ac+molestie+nisl+vulputate.+Etiam+hendrerit+volutpat+lorem+sit+amet+bibendum.</p>+,</body>+,</html>#special)

> The ::first-line pseudo-element can only be applied to block-level elements such as `<p>`, `<h1>` and `<div>`.


## The `::first-letter` Pseudo-element

The `::first-letter` pseudo-element can be used to style the first letter of a text _(obviously)_.

In this example, the first letter of the `<p>` element will be formatted according to the styles given. 

```css
p::first-letter {
  color: blue;
  font-size: xx-large;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p%3A%3Afirst-letter+{+,++++color%3A+blue;+,++++font-size%3A+xx-large;+,++}+,</style>+,</head>+,<body>+,++<p>Lorem+ipsum+dolor+sit+amet,+consectetur+adipiscing+elit.+Nulla+lobortis+quam+turpis,+fringilla+rutrum+elit+bibendum+non.+Fusce+lacinia,+lacus+at+interdum+suscipit,+diam+ligula+mattis+urna,+et+sollicitudin+leo+eros+quis+ligula.</p>+,</body>+,</html>#special)

> The ::first-letter pseudo-element can only be applied to block-level elements such as `<p>`, `<h1>` and `<div>`.


## Pseudo-elements and HTML Classes

Pseudo-elements can be used together with HTML classes.

In this example, the first letter of the `<p>` element with the class name `intro` will be formatted by the styles given. 

```css
p.intro::first-letter {
  color: blue;
  font-size: xx-large;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p.intro%3A%3Afirst-letter+{+,++++color%3A+blue;+,++++font-size%3A+xx-large;+,++}+,</style>+,</head>+,<body>+,++<p+class='intro'>This+is+the+intro</p>+,++<p>This+is+just+some+text</p>+,</body>+,</html>#special)


## The `::before` Pseudo-element

The `::before` pseudo-element can be used to insert content before the content of an element _(hence its name)_.

In this example, the `|` character will be inserted before the content of each `<h1>` element. 

```css
h1::before {
    content: '|';
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++h1%3A%3Abefore+{+,++++content%3A++'|';+,++}+,</style>+,</head>+,<body>+,++<h1>This+is+a+heading</h1>+,++<p>This+is+a+paragraph</p>+,++<h1>This+is+another+heading</h1>+,</body>+,</html>#special)


## The `::after` Pseudo-element

The `::after` pseudo-element can be used to insert content after the content of an element _(hence its name)_.

In this example, the `|` character will be inserted after the content of each `<h1>` element. 

```css
h1::after {
    content: '|';
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++h1%3A%3Aafter+{+,++++content%3A++'|';+,++}+,</style>+,</head>+,<body>+,++<h1>This+is+a+heading</h1>+,++<p>This+is+a+paragraph</p>+,++<h1>This+is+another+heading</h1>+,</body>+,</html>#special)

&nbsp;

These are the basics of pseudo-classes in CSS.

There are more pseudo-classes out there. Their dedicated pages are still unavailable but they will be added soon.