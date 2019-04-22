import _ from 'lodash';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ') + "<br>hey i am second line";

  return element;
}

document.body.appendChild(component());