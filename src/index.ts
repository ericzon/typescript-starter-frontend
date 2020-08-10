/**
 * @remarks
 * component function as **basic** example
 * @returns div element with generated text
 */

function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Typescript with Webpack';

  return element;
}

document.body.appendChild(component());

export default component;
