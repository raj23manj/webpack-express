
import dog from '../images/doggy.jpg'
import '../stylesheets/users.less'

import sum from './sum'

export default() => {
  const total = sum(5,5);
  const image = document.createElement('img');
  
  console.log(total);
  console.log('hurray users index');
  
  image.src = dog;
  document.body.appendChild(image);
}
  


