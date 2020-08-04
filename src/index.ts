function component() {
  const element = document.createElement('div');

  element.innerHTML = 'Hello Typescript with Webpack';

  return element;
}

document.body.appendChild(component());
