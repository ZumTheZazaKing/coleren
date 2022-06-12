---
id: 1
title: 'HTML Basics'
metaTitle: 'HTML Basics'
metaDesc: 'HTML Basics'
previous: ""
previousTitle: ""
nextTitle: 'HTML Tag Concept'
next: 'html/tag-concept'

tags:
  - html
code:
  - '<!DOCTYPE html>'
  - '<html>'
  - '<head>'
  - '<title>HTML Basics</title>'
  - '</head>'
  - '<body>'
  - '<h1>HTML Basics</h1>'
  - '<p>This is a paragraph.</p>'
  - '</body>'
  - '</html>'
---

## What is HTML?

HTML stands for HyperText Markup Language and it is a standard markup language for creating Web pages


## A Simple HTML Document

```html
<!DOCTYPE html>
<html>
<head>
<title>HTML Basics</title>
</head>
<body>
<h1>HTML Basics</h1>
<p>This is a paragraph.</p>
</body>
</html>
```

The example above will be explained with the following...


## The `<!DOCTYPE>` declaration

- The `<!DOCTYPE>` declaration represents the document type, and helps browsers correctly display web pages.

- It must and can only appear once at the top of the page before any HTML tags and it doesn't have a closing tag.

- The `<!DOCTYPE>` declaration is not case sensitive, so it can also be written as `<!doctype>` _(looks weird tho)_.

- The `<!DOCTYPE>` declaration for HTML5 is: `<!DOCTYPE html>`


## The `<html>` tag

- The HTML document must begin with `<html>` and end with `</html>`
- Everything inside the `<html>` tags is considered HTML


## The `<head>` tag

- This tag is used to contain the title of the page, and other meta data
- Basically, the `<head>` contains the non-visible part of a web page such as the`<title>` tag


## The `<title>` tag

- This tag is used to display the title of the page
- The title of the page is displayed in the browser tab


## The `<body>` tag

- The `<body>` tag is used to contain the visible part of the page


## HTML Headings

- They are represented by the `<h1>` to `<h6>` tags.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
```


## HTML Paragraphs

- HTML are defined with the `<p>` tag.

```html
<p>This is a paragraph.</p>
<p>This is also a paragraph</p>
```


Those are the basics of HTML, but there are many more tags and _attributes_ that can be used to create a more complex web page.

You'll learn more about them later in this tutorial


## HTML Editors

You can use **Sublime Text** or **Visual Studio** Code to work with HTML but you can also use Coleren's HTML Editor to work with HTML.

