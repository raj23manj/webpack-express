//const sum = require('./javascripts/sum');

import dog from './images/doggy.jpg'
import './stylesheets/style.less'

import sum from './javascripts/sum'
const total = sum(10,5);
console.log(total);
console.log('hurray');


window.onload = () => {
  const image = document.createElement('img');
  image.src = dog;
  document.body.appendChild(image);
}

