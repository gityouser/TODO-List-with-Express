const
  input = document.querySelector('input'),
  itemList = document.querySelector('.ul-list'),
  form = document.querySelector('.form'),
  clearList = document.querySelector('.clear-list'),
  inputList = [];

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
    input.value = '';
    renderListItems();
  } else {
    alert("You must type something.")
  }
}

function renderListItems() {
  const
  li = document.createElement('li'),
  img = document.createElement('img');
  inputList.forEach((item, index) => {
    itemList.appendChild(li);
    li.innerText = item.name;
    li.dataset.index = index;
    li.appendChild(img);
    li.classList.add('li');
    img.src = "http://panchkula.nic.in/wp-content/uploads/2017/06/x-mark.png";
    img.classList.add('x-mark');
    li.addEventListener('click', markAsCompleted);
    img.addEventListener('click', deleteListItems);
  })
}

function markAsCompleted(event) {
  if(event.target.completed === false) {
    event.target.style.cssText = 'color:green; text-decoration: line-through'
    event.target.completed = true;
  } else {
    event.target.completed = false;
    event.target.style.cssText = 'color:black; text-decoration: none'
  }

}

function deleteListItems(event) {
  event.target.parentElement.remove();
  console.log(event.target.parentElement.dataset.index);
  inputList.splice(event.target.parentElement.dataset.index, 1);

}
function clearEntireList() {
  while(itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
    // itemList.firstChild.remove();
    inputList.length = 0;
  }
}
