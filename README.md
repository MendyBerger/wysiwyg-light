# WYSIWYG Light
WYSIWYG Light is a lightweight yet powerful WYSIWYG api that deals with functionality ONLY and lets you as the developer take care of 
display and design, which makes WYSIWYG Light very easy to incorporate into your existing projects without breaking your existing 
design pattern.

## Installation
### [NPM](https://www.npmjs.com/package/wysiwyg-light)
```npm i wysiwyg-light```

## Usage
Using the WYSIWYG is fairly simple, just drop in a ```<wysiwyg-light>``` element, and add a few ```<wysiwyg-light-tool>``` elements and 
you've got a basic WYSIWYG working. 
### Example
```html
  <wysiwyg-light-tool tool="bold"><button style="font-weight: bold;">B</button></wysiwyg-light-tool>
  <wysiwyg-light-tool tool="italic"><button style="font-style: italic">I</button></wysiwyg-light-tool>
  <wysiwyg-light-tool tool="underline"><button style="text-decoration: underline">U</button></wysiwyg-light-tool>
  <wysiwyg-light></wysiwyg-light>
```
[Full Demo (with bootstrap)](https://stackblitz.com/edit/wysiwyg-light-demo-bootsrap?embed=1&file=index.html&view=preview)

### Getting the WYSIWYG Value
Getting the value is simple as well just get it with the ```.value``` method of the ```wysiwyg-light``` element, Like this:
```js
  let value = document.querySelector("wysiwyg-light").value;
```

### Tool Options (with no values)
You can use any tool thats supported by ```document.execCommand``` Like:
* bold
* indent
* insertHorizontalRule
* insertOrderedList
* insertUnorderedList
* italic
* justifyCenter
* justifyFull
* justifyLeft
* justifyRight
* redo
* removeFormat
* selectAll
* strikethrough
* subscript
* superscript
* underline
* undo
* unindent
* unlink

A complete list can be found on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand)


### Tools that Require Values
For commands that require a value, there are two options.
1. Add a value attribute to the tool element like:
```html
  <wysiwyg-light-tool tool="foreColor" value="red">
```
This is great when you know ahead of time what the value will be.

2. Use the ```.use``` method of the ```wysiwyg-light``` element, Like this:
```js
  let editor = document.querySelector("wysiwyg-light");
  editor.use('foreColor', 'red');
```
This is great when you don't know ahead of time what the value will be.


## License
MIT License

Copyright (c) 2018 Mendy Berger

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
