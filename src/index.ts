
function component() {
  const element = document.createElement('div');
  
  element.innerHTML = 'Hello Typescript with webpack';
  
  return element;
}

document.body.appendChild(component());

(<any> globalThis).dhp = {
  msg: 'hello dhp'
};
