---
id: 3
title: 'CSS Selectors'
metaTitle: 'CSS Selectors'
metaDesc: 'CSS Selectors'
colorClass: "bg-red-500"
previousTitle: "CSS Syntax"
previous: "css/syntax"
nextTitle: ""
next: ""
tags:
  - css
  - beginnings
  - selectors
---
A CSS selector selects the HTML element(s) that will be affected by a CSS rule.


## The CSS element selector
- This will select HTML elements based on the element name.

```css
p {
    text-align: center;
    color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>,<head>,<style>,++p+{,++++text-align%3A+center;,++++color%3A+orange;,++},</style>,</head>,<body>,++<p>This+will+be+styled</p>,++<h2>This+will+not+be+styled</h2>,++<p>This+will+be+styled</p>,</body>,</html>#special)


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
[Try it out](/editors/html_editor?code=<html>,<head>,<style>,++%23header+{,++++text-align%3A+center;,++++color%3A+orange;,++},</style>,</head>,<body>,++<h2+id='header'>This+is+a+styled+header</h2+id=>,++<p>This+is+a+non-styled+paragraph</p>,</body>,</html>#special)


## The CSS `class` selector
- This will select HTML elements based on the `class` attribute.
- The `class` of an element is not unique within a page, so the `class` selector can be used to select multiple elements.
- To select an element with a specific `class`, you can use the period character `.` followed by the `class` value.

```css
.red {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>,<head>,<style>,++%2Ered+{,++++color%3A+red;,++},</style>,</head>,<body>,++<h2+class='red'>This+is+Coleren</h2>,++<p+class='red'>Where+learning+is+a+continuos+process</p>,</body>,</html>#special)

&nbsp;

You can also make it so only specific HTML elements are affected by a class.
```css
p.red {
    color: red;
}
```
[Try it out](/editors/html_editor?code=<html>,<head>,<style>,++p%2Ered+{,++++color%3A+red;,++},</style>,</head>,<body>,++<h2+class='red'>This+will+not+be+affected+by+the+class</h2>,++<p+class='red'>This+will+though</p>,</body>,</html>#special)

&nbsp;

HTML elements can have multiple classes to refer to with the classes separated by spaces.
```css
<p class="center large">This paragraph refers to two classes.</p>
```
[Try it out](/editors/html_editor?code=<html>,<head>,<style>,++%2Ecenter+{,++++text-align%3A+center;,++},++%2Elarge+{,++++font-size%3A+20px;,++},</style>,</head>,<body>,++<p+class='large'>This+paragraph+refers+to+one+class</p>,++<p+class='large+center'>This+paragraph+refers+to+two+classes</p>,</body>,</html>#special)