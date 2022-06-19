---
id: 8
title: 'CSS initial Keyword'
metaTitle: 'CSS initial Keyword'
metaDesc: 'CSS initial Keyword'
colorClass: "bg-blue-500"
previousTitle: "CSS Attribute Selectors"
previous: "css/attribute-selectors"
nextTitle: "CSS inherit Keyword"
next: "css/inherit-keyword"
tags:
  - css
  - keywords
---
- The `initial` keyword is used to set a CSS property to its default value.
- The `initial` keyword can be used for any CSS property, and on any HTML element.

In this example, all the elements in the `<div>` element will be colored **red** but the `<h1>` element will keep the initial color which is **black**

```css
div {
  color: red;
}

h1 {
  color: initial;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++,++div+{+,++++color%3A+red;+,++}+,++,++h1+{+,++++color%3A+initial;+,++}+,++,</style>+,</head>+,<body>+,++,++<div>+,++++<h1>Coleren</h1>+,++++Where+learning+is+fun+,++</div>+,</body>+,</html>#special)