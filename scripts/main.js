
const newTask = document.querySelector('.new-task');
const addTask = document.querySelector('.add-task');
const main = document.querySelector('main');
const ul = document.createElement('ul');

main.append(ul);

addTask.addEventListener('click', () => {
  let newElement = document.createElement('li');
  newElement.textContent = newTask.value;
  ul.append(newElement);
  newTask.value = '';
});