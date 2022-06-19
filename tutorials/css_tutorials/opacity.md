---
id: 10
title: 'CSS Opacity'
metaTitle: 'CSS Opacity'
metaDesc: 'CSS Opacity'
colorClass: "bg-red-500"
previousTitle: "CSS inherit Keyword"
previous: "css/inherit-keyword"
nextTitle: ""
next: ""
tags:
  - css
  - element-style
---
The CSS `opacity` property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden.

```css
div {
  opacity: 0.5;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++div+{+,++++opacity%3A+0.5;+,++}+,</style>+,</head>+,<body>+,++,++<div>This+content+has+o.5+opacity!</div>+,++,</body>+,</html>#special)

&nbsp;

### Possible Values

| **Value** | **Meaning** |
|---|---|
| 0 | The element is completely **transparent** (invisible) |
| Any number strictly between 0 and 1 | The element is **translucent** (content  behind the element can be seen). |
| 1 | The element is completely **opaque** (visible) |
| initial | Sets this property to its default value |
| inherit | Inherits this property from its parent element |