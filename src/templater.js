const fs            = require('fs');
const Handlebars    = require('handlebars');

/**
 * Running Handlebars, completes a template and returns its content in plain text.
 * @module  @amjs/template
 * @param   {String}    source      Handlebars file (.hbs) or plain text template
 * @param   {Object}    context     Context to apply into template
 * @returns {String|null|undefined} `String` with template output, `null` or `undefined` in case of error.
 */
module.exports = (source = '', context = {}) =>
{
    let error;
    let template;

    if (source.endsWith('.hbs'))
    {
        const exists = fs.existsSync(source);
        if (exists)
        {
            const stats = fs.statSync(source);
            if (stats.isFile())
            {
                source = fs.readFileSync(source).toString();
            }
            else
            {
                error = `"${source}" is an existing path but not a valid readable file`;
            }
        }
    }

    try
    {
        template = Handlebars.compile(source);
        template = template(context);
    }
    catch (e)
    {
        error = e.message;
    }

    if (error)
    {
        template = null;
        throw new Error(`[@amjs/templater] ${error}`);
    }

    return template;
};
