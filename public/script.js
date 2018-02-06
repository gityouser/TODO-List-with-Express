const input = document.querySelector('input');
const itemList = document.querySelector('.ul-list');
const form = document.querySelector('.form');
const clearList = document.querySelector('.clear-list');
const inputList = [];


function initiateListeners() {
  form.addEventListener('submit', pushToInputList);
  clearList.addEventListener('click', clearEntireList)
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
  const li = document.createElement('li');
  const img = document.createElement('img');
  inputList.forEach((item) => {
    itemList.appendChild(li);
    li.innerText = item.name;
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
    event.target.style.cssText = 'color:grey; text-decoration: line-through'
    event.target.completed = true;
  } else {
    event.target.completed = false;
  }

}

function deleteListItems(event) {
  event.target.parentElement.remove();
}
function clearEntireList() {
  while(itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
    // itemList.firstChild.remove();
  }
}
