# @amjs/templater 0.1.6

![version](https://img.shields.io/npm/v/@amjs/templater?style=flat-square)

> Running Handlebars, completes a template and returns its content in plain text

## Installation

```bash
$ npm i @amjs/templater
```
## Usage

#### With Handlebars file

```handlebars
{{!-- HandlebarsFile.hbs --}}
Value is: {{value}}
```

```javascript
// Using Handlebars file
const path = require('path');
const templater = require('@amjs/templater');
const hbsFile = path.resolve('HandlebarsFile.hbs');

console.log(templater(hbsFile, { value: 1000 }));
// Value is: 1000
```

#### With Handlebars-like plain text template

```javascript
// Using Handlebars file
const templater = require('@amjs/templater');
const template = 'Value is: {value}}';

console.log(templater(template, { value: 1000 }));
// Value is: 1000
```
