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
    alert("Add data to the list.")
  }
}

function renderListItems() {
//QQ
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
//Both of the below indexes will be mapped by forEach to each node element at the moment the function run and WILL NOT synchronize automatically with the inputList array indexes when nodes get removed!
    li.addEventListener('click', () => markAsCompleted(index));
    img.addEventListener('click', () => deleteListItems(index))
  });
}

function deleteListItems(index) {
  console.log(index);
// Grab the index of the node targeted by the event/click.
  let nodeIndex = Array.from(ul.children).indexOf(ul.children[index]);
  console.log(nodeIndex);
//Check if the idex of the node element equalsh the coresponding index in inputList array.
  if (Array.from(ul.children).indexOf(ul.children[index]) < index) {
     ul.removeChild(ul.children[nodeIndex +1])
  } else {
    ul.removeChild(ul.children[index]);
  }
    inputList.splice(index -1, 1);
    console.log(inputList);
};

function markAsCompleted(index) {

  if(inputList[index].completed === false) {
    console.log(event); //Why is event 'the event'?
    event.target.style.cssText = 'color:green; text-decoration: line-through'
    inputList[index].completed = true;
  } else {
    inputList[index].completed = false;
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
