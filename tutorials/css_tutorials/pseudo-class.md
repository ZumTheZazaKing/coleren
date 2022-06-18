---
id: 5
title: 'CSS Pseudo-class'
metaTitle: 'CSS Pseudo-class'
metaDesc: 'CSS Pseudo-class'
colorClass: "bg-blue-500"
previousTitle: "CSS Combinators"
previous: "css/combinators"
nextTitle: "CSS Pseudo-element"
next: "css/pseudo-element"
tags:
  - css
  - selectors
  - pseudo-classes
---
Pseudo-classes can be used to define a special state of an element.

It can be used to:

- Style an element when the cursor hovers over it.
- Style visited and unvisited links differently.
- Style an element when it gets focused.

```css
selector:pseudo-class:{
    property: value;
}
```


## Anchor Pseudo-classes

Links can be displayed in different ways depending on the state of the link.
```css
/*unvisited link*/
a:link {
    color: red;
}

/*visited link*/
a:visited {
    color: blue;
}

/*mouse hover on link*/
a:hover {
    color: green;
}

/*selected link*/
a:active {
    color: yellow;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++,++/*unvisited+link*/+,++a%3Alink+{+,++++color%3A+red;+,++}+,++,++/*visited+link*/+,++a%3Avisited+{+,++++color%3A+blue;+,++}+,++,++/*mouse+hover+on+link*/+,++a%3Ahover+{+,++++color%3A+green;+,++}+,++,++/*selected+link*/+,++a%3Aactive+{+,++++color%3A+yellow;+,++}+,</style>+,</head>+,<body>+,++<h2>Styling+a+link+based+on+state</h2>+,++<a+href='https://google.com'+target='_blank'>This+is+a+link</a>+,</body>+,</html>#special)

> Remember: 
>
> a:hover MUST come after a:link and a:visited in the CSS definition in order to actually work! 
>
> a:active MUST come after a:hover in the CSS definition in order to actually work! 
>
> Pseudo-class names are not case-sensitive.


## Pseudo-classes and HTML Classes

Pseudo-classes can be used together with HTML classes.

In this example, all `<p>` tag with the class `highlight` will change style when hovered over.

```css
p.highlight:hover {
    background-color: yellow;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p.highlight%3Ahover+{+,++++background-color%3A+yellow;+,++}+,</style>+,</head>+,<body>+,++<p+class='highlight'>Hover+over+me!</p>+,++<p>I'm+not+interesting</p>+,</body>+,</html>#special)



## A Very Simple Tooltip

In this example, when the `<div>` is hovered over, the `<p>` element will show _(like a tooltip)_:

```css
div:hover p {
    display: block;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p+{+,++++display%3A+none;+,++++background-color%3A+burlywood;+,++++padding%3A+20px;+,++}+,++div%3Ahover+p+{+,++++display%3A+block;+,++}+,</style>+,</head>+,<body>+,++<div>Hover+over+me!+,++++<p>Hello!</p>+,++</div>+,</body>+,</html>#special)


## The `:first-child` Pseudo-class

The `:first-child` pseudo-class selects a specified element that is the first child of another element.

In this example, the selector will select any `<p>` element that is the first child of any element.

```css
p:first-child {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p%3Afirst-child+{+,++++color%3A+red;+,++}+,</style>+,</head>+,<body>+,++<p>This+is+a+paragraph.</p>+,++<p>This+is+a+paragraph.</p>+,++<div>+,++<p>This+is+a+paragraph+in+a+div.</p>+,++<p>This+is+a+paragraph+in+a+div.</p>+,++</div></body>+,</html>#special)


In this example, the selector will select the first `<i>` element in the `<p>` element.

```css
p i:first-child {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p+i%3Afirst-child+{+,++++color%3A+red;+,++}+,</style>+,</head>+,<body>+,++<p>I+am+a+<i>smart</i>+person.+I+am+a+<i>clever</i>+person.</p>+,</body>+,</html>#special)


in this example, the selector will select all `<i>` elements in `<p>` elemments that are the first child of another element.

```css
p:first-child i {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p%3Afirst-child+i+{+,++++color%3A+red;+,++}+,</style>+,</head>+,<body>+,++<p>I+am+a+<i>smart</i>+person.+I+am+a+<i>clever</i>+person.</p>+,++<p>I+am+a+<i>smart</i>+person.+I+am+a+<i>clever</i>+person.</p>+,++<div>+,++++<p>I+am+a+<i>clever</i>+person.+I+am+a+<i>smart</i>+person.</p>+,++++<p>I+am+a+<i>clever</i>+person.+I+am+a+<i>smart</i>+person.</p>+,</div>+,</body>+,</html>#special)

&nbsp;

These are the basics of pseudo-classes in CSS.

There are more pseudo-classes out there. Their dedicated pages are still unavailable but they will be added soon.