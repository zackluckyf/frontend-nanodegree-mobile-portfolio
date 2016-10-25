var purify = require('purify-css');

var content = ['../views/js/main.js', '../views/pizza.html'];
var css = ['../css/pizzaStyle.css', '../css/bootstrap-grid.css'];

var options = {
    // Will write purified CSS to this file.
    output: './dist/purified.css'
};

purify(content, css, options);
