import { cube } from './math.js';

function component() {
  // var element = document.createElement("div");
  var element = document.createElement('pre');
  // element.innerHTML = _.join(["Hello", "webpack"], " ");
  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  return element;
}

document.body.appendChild(component());
