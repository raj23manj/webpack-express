
import walle from '../images/walle.jpeg'
// import '../stylesheets/index.less' => not working

import sum from './sum'

export default() => {
  const total = sum(10,5);
  const image = document.createElement('img');
  
  console.log(total);
  console.log('hurray walle index');
  
  image.src = walle;
  document.body.appendChild(image);
}
  


