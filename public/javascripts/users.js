
import dog from '../images/doggy.jpg';
import '../stylesheets/users.less';

import sum from './sum'

export default() => {
  const total = sum(5,5);
  const image = document.createElement('img');
  
  console.log('On Fire users 023');
  console.log(total);
  console.log('hurray users index');
  
  image.src = dog;
  document.body.appendChild(image);
}
  


