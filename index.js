const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const listElem = document.querySelector('.list');

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

let newClick = document.querySelector('.create-task-btn');
function addTask() {
  let inputElem = document.querySelector('.task-input').value;
  if (inputElem == '') {
    return null;
  } else {
    let temp = {};
    temp.text = inputElem;
    temp.done = false;
    tasks.forEach((n, i) => (n.id = i + 1));
    tasks.push(temp);
    listElem.innerHTML = null;
    renderTasks(tasks);
    inputElem = '';
  }
}
newClick.addEventListener('click', addTask);
