---
id: 6
title: 'HTML class Attribute'
metaTitle: 'HTML class Attribute'
metaDesc: 'HTML class Attribute'
previousTitle: "HTML id Attribute"
previous: "html/id-attribute"
nextTitle: "HTML title Attribute"
next: "html/title-attribute"
colorClass: "bg-red-500"
tags:
  - html
  - universal-attributes
---
The `class` attribute is one of many HTML universal attributes.

- The `class` attribute specifies one or more class names for an element. This means that unlike the `id` attribute, the same class name can be used for multiple elements.

- The class names are separated by spaces.

- Class names must begin with a letter A-Z or a-z. It can then be followed by any number of letters, digits, hyphens or underscores.
 

```html
<div class='class'></div>
<div class='two class'></div>
```

## Example

By adding multiple classes to an element, you can style it with CSS like this:

```html
<style>
    .header{
        background-color: red;
    }
    .text{
        color: white;
        text-align: center;
    }
</style>
<body>
    <h1 class='header text'>Coleren is Awesome!</h1>
</body>
```
[Try it out](/editors/html_editor?code=<head>,<style>,++%2Eheader{,++++background-color%3A+red;,++},++%2Etext{,++++color%3A+white;,++++text-align%3A+center;,++},</style>,<body>,++<h1+class='header+text'>Coleren+is+Awesome!</h1>,<body>#special)