---
id: 1
title: 'CSS Introduction'
metaTitle: 'CSS Introduction'
metaDesc: 'CSS Introduction'
colorClass: "bg-red-500"
nextTitle: "CSS Syntax"
next: "css/syntax"
tags:
  - css
  - beginnings
---

CSS is the programming language used to style web pages.

## What is CSS?

- CSS stands for Cascasding Style Sheets.
- CSS describes how HTML elements should be displayed on all sorts of media such as on screen and paper.
- CSS can manipulate the layout of multiple web pages at once which saves a lot of time and effort.

External CSS are stored in seperate CSS files while internal CSS are stored in the HTML file wihtin the `<style>` tag. The `<style>` tag can be used in either the `<head>` or `<body>` tags.

### Internal CSS Example

```css
body {
  background-color: burlywood;
  text-align: center;
}
h1 {
  color: lightblue;
}
p {
  font-family: Arial;
  font-size: 20px;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++body+{+,++++background-color%3A+burlywood;+,++++text-align%3A+center;+,++}+,++h1+{+,++++color%3A+lightblue;+,++}+,++p+{+,++++font-family%3A+Arial;+,++++font-size%3A+20px;+,++}+,</style>+,</head>+,<body>+,++<h1>Coleren</h1>+,++<p>Learn+Coding</p>+,</body>+,</html>#special)