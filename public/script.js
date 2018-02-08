const input = document.querySelector('input'),
      ul = document.querySelector('.ul-list'),
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
  for (let i = ul.children.length; i > 0; i--) {
    ul.removeChild(ul.children[i-1])
  }
  inputList.forEach((item, index) => {
    const li = document.createElement('li'),
          img = document.createElement('img');
    ul.appendChild(li);
    li.innerText = item.name;
    li.appendChild(img);
    li.classList.add('li');
    img.src = "http://panchkula.nic.in/wp-content/uploads/2017/06/x-mark.png";
    img.classList.add('x-mark');
    li.addEventListener('click', markAsCompleted);
    img.addEventListener('click', () => deleteListItems(index))
  });
}

function deleteListItems(index) {
    if(index = 1) {
      ul.removeChild(ul.children[0]);
    } else {
      ul.removeChild(ul.children[index]);
    }
    inputList.splice(index, 1);
    console.log(inputList);
};

function markAsCompleted(event) {
  if(event.target.completed === false) {
    event.target.style.cssText = 'color:green; text-decoration: line-through'
    event.target.completed = true;
  } else {
    event.target.completed = false;
    event.target.style.cssText = 'color:black; text-decoration: none'
  }
}

function clearEntireList() {
  while(ul.firstChild) {
    ul.removeChild(ul.firstChild);
    // ul.firstChild.remove();
    inputList.length = 0;
  }
};
