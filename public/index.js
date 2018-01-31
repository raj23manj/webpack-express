// //const sum = require('./javascripts/sum');
// 
// import dog from './images/doggy.jpg'
import './stylesheets/style.less'
// import './stylesheets/index.less'
// import './stylesheets/users.less'
// 
// import sum from './javascripts/sum'
// const total = sum(10,5);
// console.log(total);
// console.log('hurray');
// 
// 
// window.onload = () => {
//   const image = document.createElement('img');
//   image.src = dog;
//   document.body.appendChild(image);
// }
//
import $ from "jquery";
import _ from "lodash";
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';  

const pathname = window.location.pathname;

// window.onload = () => {
//   
// }

$(function() {
    console.log('On Fire');
    console.log( "ready!" );
    console.log(_.partition([1, 2, 3, 4], n => n % 2));
    if (pathname == '/' ){
      System.import('./javascripts/index').then(module => {
        module.default();
      });
    }else if(pathname == '/users/' ){
      System.import('./javascripts/users').then(module => {
        module.default();
      });
    }
});