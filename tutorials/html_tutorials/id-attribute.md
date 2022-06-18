---
id: 5
title: 'HTML id Attribute'
metaTitle: 'HTML id Attribute'
metaDesc: 'HTML id Attribute'
previousTitle: "HTML Universal Attributes"
previous: "html/universal-attributes"
nextTitle: "HTML class Attribute"
next: "html/class-attribute"
colorClass: "bg-red-500"
tags:
  - html
  - universal-attributes
---
The `id` attribute is one of many HTML universal attributes. 

- It gives an element a unique id and that id can't be shared with other elements in the HTML document.

- An id must contain at least one letter and it can't have any spaces

```html
<div id="id">
```


## Example 1

The `id` attribute can be used for multiple use cases such as manipulating text with **Javascript**.

```html
<h1 id='text'>Hello World!</h1>
<button onclick='changeText()'>Change text</button>

<script>
function changeText() {
  document.getElementById('text').innerHTML = 'Welcome To Coleren!';
}
</script>
```
[Try it out](/editors/html_editor?code=<html>+,<body>+,++<h1+id='text'>Hello+World!</h1>+,++<button+onclick='changeText()'>Change+text</button>+,++,++<script>+,++++function+changeText(){+,++++++document.getElementById('text').innerHTML+=+'Welcome+To+Coleren!';+,++++}+,++</script>+,</body>+,</html>#special)


## Example 2

The `id` attribute can also be used to style text with **CSS**. However, it is not recommeneded because it avoids reusability.

```html
<head>
<style>
    #text {
        color: red;
        text-align: center;
    }
</style>
</head>
<body>
    <h1 id='text'>Coleren is Awesome!</h1>
</body>
```
[Try it out](/editors/html_editor?code=<head>+,<style>+,++%23text+{+,++++color%3A+red;+,++++text-align:+center;+,++}+,</style>+,</head>+,<body>+,++<h1+id='text'>Coleren+is+Awesome!</h1>+,</body>#special)


## Example 3

The `id` attribute can also be used to link to an element with a specified id within a page.

```html
<h2 id='top'>A Heading</h2>

<div>Content...</div>

<a href='#top'>Back to Top</a>
```
[Try it out](/editors/html_editor?code=<html>+,<body>+,++<h2+id='top'>Scroll+to+the+bottom</h2>+,++<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>+,++<p>Hello</p>+,++<a+href='%23top'>Back+to+Top</a>+,</body>+,</html>#special)