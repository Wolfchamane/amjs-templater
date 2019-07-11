# @amjs/templater 0.1.2

![Statements](https://img.shields.io/badge/Statements-100%25-brightgreen.svg) ![Branches](https://img.shields.io/badge/Branches-100%25-brightgreen.svg) ![Functions](https://img.shields.io/badge/Functions-100%25-brightgreen.svg) ![Lines](https://img.shields.io/badge/Lines-100%25-brightgreen.svg)

> Running Handlebars, completes a template and returns its content in plain text

## Installation

```bash
$ npm i @amjs/templater
```
## Usage

#### With Handlebars file

```handlebars
{{!-- HandlebarsFile.hbs --}}
{{value}}
```

```javascript
// Using Handlebars file
const path = require('path');
const templater = require('@amjs/templater');
const hbsFile = path.resolve('HandlebarsFile.hbs');

console.log(templater(hbsFile, { value: 1000 }));
// <!-- HandlebarsFile.hbs -->
// 1000
```

#### With Handlebars plain text template

```javascript
// Using Handlebars file
const templater = require('@amjs/templater');
const template = '{{value}}';

console.log(templater(hbsFile, { value: 1000 }));
// 1000
```
