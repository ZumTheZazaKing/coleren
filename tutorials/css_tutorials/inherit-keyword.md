---
id: 9
title: 'CSS inherit Keyword'
metaTitle: 'CSS inherit Keyword'
metaDesc: 'CSS inherit Keyword'
colorClass: "bg-blue-500"
previousTitle: "CSS initial Selectors"
previous: "css/initial-keyword"
nextTitle: "CSS opacity"
next: "css/opacity"
tags:
  - css
  - keywords
---
The `inherit` keyword specifies that a property should inherit its value from its parent element.

The `inherit` keyword can be used for any CSS property, and on any HTML element.

In this example, all the `<span>` elements will be colored blue except for those inside elements with the class `green`. `<span>` elements inside elements with the class `green` will inherit the parent element's color.

```css
span {
  color: blue;
}

.green span {
  color: inherit;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++,++span+{+,++++color%3A+blue;+,++}+,++,++.green+span+{+,++++color%3A+inherit;+,++}+,++,</style>+,</head>+,<body>+,++,++<div>+,++++Here+is+<span>a+span+element</span>.+,++</div>+,++<div+class=dbq;greendbq;+style=dbq;color%3A+greendbq;>+,++++Here+is+<span>a+span+element</span>.+,++</div>+,</body>+,</html>#special)