var purify = require('purify-css');

var content = ['../js/*.js', '../views/*.html'];
var css = ['../**/css/*.css'];

var options = {
    // Will write purified CSS to this file.
    output: './dist/purified.css'
};

purify(content, css, options);
