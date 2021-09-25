const { equal, throws } = require('assert');
const fs                = require('fs');
const Handlebars        = require('handlebars');
const path              = require('path');
const templater         = require('../../src/templater');

const context = { value : 1000 };
const TOTAL = 6;
let tested = 0;

(function()
{
    const dirPath = path.resolve(__dirname, '.hbs');
    throws(() => templater(dirPath, context), Error,
        '@amjs/templater > Throws an error if source is not a valid Handlerbars file');
    tested++;

}());

(function()
{
    const filePath = path.resolve(__dirname, 'tpl.hbs');
    let mock = Handlebars.compile(fs.readFileSync(filePath).toString());
    mock = mock(context);
    const expected = templater(filePath, context);
    equal(mock === expected, true,
        '@amjs/templater > .hbs file is compiled as expected');
    tested++;

}());

(function()
{
    const mockStr = '{{value}}';
    let mock = Handlebars.compile(mockStr);
    mock = mock(context);
    const expected = templater(mockStr, context);
    equal(mock === expected, true,
        '@amjs/templater > Handlebars plain text is compiled as expected');
    tested++;
}());

(function()
{
    const mockStr = '{{value}}.hbs';
    let mock = Handlebars.compile(mockStr);
    mock = mock(context);
    const expected = templater(mockStr, context);
    equal(mock === expected, true,
        '@amjs/templater > Handlebars plain text is compiled as expected event ending in ".hbs"');
    tested++;
}());

(function()
{
    const expected = templater();
    equal('' === expected, true,
        '@amjs/templater > By default, returns empty string');
    tested++;
}());

(function()
{
    throws(() => templater('{{foo{{#each', {}), Error,
        '@amjs/templater > Invalid Handlebars template throws an error');
    tested++;
}());


equal(TOTAL === tested, true);
console.log(`Has been tested ${tested}/${TOTAL} tests`);
