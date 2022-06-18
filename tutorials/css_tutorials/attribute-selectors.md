---
id: 7
title: 'CSS Attribute Selectors'
metaTitle: 'CSS Attribute Selectors'
metaDesc: 'CSS Attribute Selectors'
colorClass: "bg-blue-500"
previousTitle: "CSS Pseudo-element"
previous: "css/pseudo-element"
nextTitle: ""
next: ""
tags:
  - css
  - selectors
---
It's possible to style HTML elements that have a sepcific attribute or attribute value.


## The `[attribute]` Selector

The `[attribute]` selector is used to style elements that have a specific **attribute**.

In this example, all the `<a>` elements with a target attribute will be styled according to the styles given.

```css
a[target] {
  background-color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++abrkt;target;brkt+{+,++++background-color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++<h2>CSS+brkt;attribute;brkt+Selector</h2>+,++<p>The+links+with+a+target+attribute+gets+an+orange+background%3A</p>+,++,++<a+href='https://google.com'>google.com</a>+,++<a+href='http://github.com'+target='_blank'>github.com</a>+,++<a+href='http://stackoverflow.org'+target='_blank'>stackoverflow.com</a>+,</body>+,</html>#special)


## The `[attribute=value]` Selector

The `[attribute=value]` selector is used to style elements that have a specific **attribute value**.

In this example, all the `<a>` elements with a target attribute value of `_blank` will be styled according to the styles given.

```css
a[target="_blank"] {
  background-color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++abrkt;target=dbq;_blankdbq;;brkt+{+,++++background-color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++<h2>CSS+brkt;attribute=value;brkt+Selector</h2>+,++<p>The+links+with+a+target+attribute+value+of+_blank+gets+an+orange+background%3A</p>+,++,++<a+href='https://google.com'>google.com</a>+,++<a+href='http://github.com'+target='_blank'>github.com</a>+,++<a+href='http://stackoverflow.org'+target='_top'>stackoverflow.com</a>+,</body>+,</html>#special)


## The `[attribute~=value]` Selector

The `[attribute~="value"]` selector is used to select elements with an attribute value containing a specified word.

In this example, the selector will match all any elements with a `title` attribute value that contains the word `hello`.

```css
[title~="hello"] {
  background-color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++brkt;title~=dbq;hellodbq;;brkt+{+,++++background-color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++,++<h1+title=dbq;hellodbq;>Welcome+To+Coleren</h1>+,++<p+title=dbq;hello+theredbq;>Where+learning+is+great</p>+,++<p+title=dbq;hello-theredbq;>Some+text</p>+,++,</body>+,</html>#special)

> The example will match elements with title="hello", and title="hello there" but not title="hello-there".


## The `[attribute|=value]` Selector

The `[attribute|="value"]` selector is used to select elements with the specified attribute, whose value can be exactly the specified value, or the specified value followed by a hyphen (-).

> The value has to be one whole word with no spaces, either it be alone or followed by a hyphen `-`.

In this example, the selector will match all any elements with a `title` attribute value that contains the word `hello` and **no other titles**.

```css
[title|="hello"] {
  background-color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++brkt;title|=dbq;hellodbq;;brkt+{+,++++background-color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++,++<h1+title=dbq;hellodbq;>Welcome+To+Coleren</h1>+,++<p+title=dbq;hello+theredbq;>Where+learning+is+great</p>+,++<p+title=dbq;hello-theredbq;>Some+text</p>+,++,</body>+,</html>#special)


## The `[attribute^=value]` Selector

The [attribute^="value"] selector is used to select elements with the specified attribute, whose value **starts** with the specified value.

> Reminder: The value doesn't have to be one whole word!

In this example, the selector will match all any elements with a `title` attribute value that **starts** with the word `hello`.

```css
[title^="hello"] {
  background-color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++brkt;title^=dbq;hellodbq;;brkt+{+,++++background-color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++,++<h1+title=dbq;hellodbq;>Welcome+To+Coleren</h1>+,++<p+title=dbq;hello+theredbq;>Where+learning+is+great</p>+,++<p+title=dbq;hello-theredbq;>Some+text</p>+,++<p+title=dbq;welcome+hellodbq;>Some+more+text</p>+,++,</body>+,</html>#special)



## The `[attribute$=value]` Selector

The [attribute$="value"] selector is used to select elements with the specified attribute, whose value **ends** with the specified value.

> Reminder: The value doesn't have to be one whole word!

In this example, the selector will match all any elements with a `title` attribute value that **ends** with the word `hello`.
```css
[title$="hello"] {
  background-color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++brkt;title$=dbq;hellodbq;;brkt+{+,++++background-color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++,++<h1+title=dbq;hellodbq;>Welcome+To+Coleren</h1>+,++<p+title=dbq;hello+theredbq;>Where+learning+is+great</p>+,++<p+title=dbq;hello-theredbq;>Some+text</p>+,++<p+title=dbq;welcome+hellodbq;>Some+more+text</p>+,++,</body>+,</html>#special)



## The `[attribute*=value]` Selector

The `[attribute*="value"]` selector is used to select elements whose attribute value contains a specified value.

>  Reminder: The value doesn't have to be one whole word!

In this example, the selector will match all any elements with a `title` attribute value that contains `he`.

```css
[title*="lo"] {
  background-color: orange;
}
```
[Try it out](/editors/html_editor?code=<html>+,<head>+,<style>+,++brkt;title*=dbq;lodbq;;brkt+{+,++++background-color%3A+orange;+,++}+,</style>+,</head>+,<body>+,++,++<h1+title=dbq;headerdbq;>Welcome+To+Coleren</h1>+,++<p+title=dbq;hello+theredbq;>Where+learning+is+great</p>+,++<p+title=dbq;hello-theredbq;>Some+text</p>+,++<p+title=dbq;welcome+hello_theredbq;>Some+more+text</p>+,++,</body>+,</html>#special)