import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ') + "<br>hey i am second line";
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);
  element.innerHTML += `<i class="icofont-box"></i>
<i class="icofont-close-line" ></i>
<i class="icofont-like"></i>
<i class="icofont-plus"></i>
<i class="icofont-home"></i>`;

  return element;
}

document.body.appendChild(component());