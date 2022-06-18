---
id: 4
title: 'CSS Combinators'
metaTitle: 'CSS Combinators'
metaDesc: 'CSS Combinators'
colorClass: "bg-blue-500"
previousTitle: "CSS Selectors"
previous: "css/selectors"
nextTitle: "CSS Pseudo-class"
next: "css/pseudo-class"
tags:
  - css
  - selectors
---
> A combinator is soemthing that describes the relationship between selectors.

CSS selectors can contain more than one simple selector. Between the simple selectors, there can be a combinator.

There are four different combinators in CSS:

- **descendant selector** (space)
- **child selector** (`>`)
- **adjacent sibling selector** (`+`)
- **general sibling selector** (`~`)


## Descendant Selector

The descendant selector is used to select all elements that are descendants of a specified element.

In this example, all the `<p>` elements inside the `<div>` element are selected.

```css
div p {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++div+p+{+,++++color%3A+red;+,++}+,</style>+,</head>+,<body>+,++<div>+,++++<p>This+element+will+be+selected</p>+,++</div>+,++<p>This+element+will+not+be+selected</p>+,</body>+,</html>#special)



## Child Selector (`>`)

The child selects all HTML elements that are children to a specified element.

In this example, all the `<p>` elements that are children of the `<div>` element are selected.

```css
div > p {
    background-color: yellow;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++div+>+p+{+,++++background-color%3A+yellow;+,++}+,</style>+,</head>+,<body>+,++<div>+,++++<p>This+is+a+child+of+a+div</p>+,++++<main><p>This+is+a+descendant+of+a+div+but+not+a+child+of+it</p></main>+,++</div>+,++<p>This+is+not+a+child+of+a+div</p>+,</body>+,</html>#special)



## Adjacent Sibling Selector (`+`)

The adjacent sibling selector is used to select an element that is directly after a specified element.

> Sibling elements must have the same parent element and 'adjacent' means 'next to'.

In this example, the first `<p>` element after the `<div>` element is selected.

```css
div + p {
    background-color: yellow;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++div+%2B+p+{+,++++background-color%3A+yellow;+,++}+,</style>+,</head>+,<body>+,++<h1>Adjacent+Sibling+Selector</h1>+,++<div>+,++++<p>This+element+will+not+be+selected</p>+,++</div>+,++<p>This+element+will+be+selected</p>+,</body>+,</html>#special)



## General Sibling Selector (`~`)

The general sibling selector is used to select all elements that are **next siblings** to a specified element.

In this example, all the `<p>` elements that are next siblings to the `<div>` element are selected.

```css
div ~ p {
    background-color: yellow;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++div+~+p+{+,++++background-color%3A+yellow;+,++}+,</style>+,</head>+,<body>+,++<h1>General+Sibling+Selector</h1>+,++<p>Paragraph+1+,++<div>+,++++<p>Paragraph+2</p>+,++</div>+,++<p>Paragraph+3</p>+,++<span>This+is+a+span+</span>+,++<p>Paragraph+4</p>+,</body>+,</html>#special)

> Essentially, the Adjacent Sibling Selector and the General Sibling Selctor are the same. 
>
>The difference is that the Adjacent Sibling Selector selects only one sibling after while the General Sibling Selector selects all siblings after.