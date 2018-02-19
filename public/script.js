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
    // displayCompleted();
  } else {
    alert("Add data to the list.")
  }
}

function renderListItems() {
  console.log(inputList);
  for (let i = ul.children.length; i > 0; i--) {
    ul.removeChild(ul.children[i-1])
  }
  inputList.forEach(createLi);
}

function createLi(item, index) {
  console.log('Create: ', item, index);
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
}

function toggleCompleted(index) {
  // console.log(inputList[index].completed);
  console.log(event);
  inputList[index].completed = !inputList[index].completed;
  renderListItems();
}

function clearEntireList() {
  inputList = [];
  renderListItems();
};

//   ------------------ v02 ------------------------
// inputList.forEach((item, index) => {
//   if(e.target.parentElement.textContent === item.name) {
//     inputList.splice(index, 1);
//     console.log(item.name);
//     console.log(inputList);
//     return;
//   }
// })
// e.target.parentElement.remove();

//   ------------------ v01 ------------------------
//   console.log(index);
// // Grab the index of the node targeted by the event/click.
//   let nodeIndex = Array.from(ul.children).indexOf(ul.children[index]);
//   console.log(nodeIndex);
// //Check if the idex of the node element equals the coresponding index in inputList array.
//   if (Array.from(ul.children).indexOf(ul.children[index]) < index) {
//      ul.removeChild(ul.children[nodeIndex +1])
//   } else {
//     ul.removeChild(ul.children[index]);
//   }
//     inputList.splice(index -1, 1);
//     console.log(inputList);
