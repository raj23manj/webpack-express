var html2jade = require('html2jade');
var HTML = require('html-parse-stringify');
var html = require("./dist/generate_scripts.html");
var ast = HTML.parse(html);

console.log(html);

//var html = "<script type='text/javascript' src='dist/manifest.e69ef4b978ba750bf25e.js'></script><script type='text/javascript' src='dist/vendor.8f5b3213335e5cbf7713.js'></script><script type='text/javascript' src='dist/bundle.aac6e2ac2e5cf5e6ab02.js'></script>";
// html2jade.convertHtml(html, {}, function (err, jade) {
//   console.log(jade);
// });

