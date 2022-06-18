---
id: 2
title: 'CSS Syntax'
metaTitle: 'CSS Syntax'
metaDesc: 'CSS Syntax'
colorClass: "bg-red-500"
previousTitle: "CSS Introduction"
previous: "css/introduction"
nextTitle: "CSS Selectors"
next: "css/selectors"
tags:
  - css
  - beginnings
---
A CSS rule is a statement that describes how to display an HTML element. It must have a selector and a declaration block.

This is the selector:
```css
h1
```

And this is the declaration block:
```css
{
  color: red;
  font-size: 30px;
}
```

Together, these two parts make up a CSS rule which is written as:
```css
h1 {
  color: red;
  font-size: 30px;
}
```

Within the decalaration block, there are declarations that consists of properties with values. 

In the example above, the `color` is the property and `red` is its the value.

Together, these two parts make up a CSS declaration which is written as:
```css
color: red;
```

Multiple declarations can be written in the same declaration block, separated by semicolons `;` and the declaration block must be wrapped with curly braces `{}`.


## Example

In this example, all the `<p>` elements will be colored red and have a black background.

```css
p {
  color: red;
  background-color: black;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++p+{+,++++color%3A+red;+,++++background-color%3A+black;+,++}+,</style>+,</head>+,<body>+,++<p>This+will+be+styled</p>+,++<h2>This+will+not+be+styled</h2>+,++<p>This+will+be+styled</p>+,</body>+,</html>#special)

### Example explained

- `p` is the selector.
- `{` is the start of the declaration block.
- `color` and `background-color` are the properties.
- `red` and `black` are the values.
- `;` is the separator between declarations.
- `}` is the end of the declaration block.