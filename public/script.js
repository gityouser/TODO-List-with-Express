const input = document.querySelector('input'),
      ul = document.querySelector('.ul-list'),
      form = document.querySelector('.form'),
      clearList = document.querySelector('.clear-list');
let inputList = [];
let inputValue = {
  name:input.value,
  completed:false
};

fetch('/todo', {  method: 'GET' })
.then(res => res.json())
.then(data => {
  console.log(data);
  inputList = data;

  renderListItems();
});

function initiateListeners() {
  form.addEventListener('submit', pushToInputList);
  clearList.addEventListener('click', clearEntireList);
}
initiateListeners();

function pushToInputList(e) {
  e.preventDefault();

  if(input.value.length > 0) {
    inputList.push({
      name:input.value,
      completed:false
    });
    fetch('/todo', {
      method: 'POST',
      headers: {
     'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:input.value,
        completed:false
      })
    })
    input.value = '';

    renderListItems();
    // displayCompleted();
  } else {
    alert("Add data to the list.")
  }
}

function renderListItems() {
  for (let i = ul.children.length; i > 0; i--) {
    ul.removeChild(ul.children[i-1])
  }
  inputList.forEach(createLi);
}

function createLi(item, index) {
  const li = document.createElement('li'),
        img = document.createElement('img');
  ul.appendChild(li);
  li.innerText = item.name;
  li.appendChild(img);
  li.classList.add('li');
  if(item.completed) {
    li.classList.add('completed');
  }
  img.src = "http://panchkula.nic.in/wp-content/uploads/2017/06/x-mark.png";
  img.classList.add('x-mark');
  li.addEventListener('click', () => toggleCompleted(index));
  img.addEventListener('click', (e) => deleteListItem(index, e));
}

function deleteListItem(index, e) {
  e.stopPropagation();
  inputList.splice(index, 1);
  renderListItems();
  // fetch DELETE
}

function toggleCompleted(index) {
  inputList[index].completed = !inputList[index].completed;
  renderListItems();
}

function clearEntireList() {
  inputList = [];
  renderListItems();
  // fetch DELETE ALL
};
