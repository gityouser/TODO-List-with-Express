const input = document.querySelector('input');
const itemList = document.querySelector('.ul-list');
const form = document.querySelector('.form');
const inputList = [];


function initiateListeners() {
  form.addEventListener('submit', pushToInputList);

}
initiateListeners();

function renderListItems() {
  const li = document.createElement('li');
  const img = document.createElement('img');
  inputList.forEach((item) => {
    itemList.appendChild(li);
    li.innerText = item.name;
    li.appendChild(img);
    li.style.cssText = ''
    img.src = "https://cdn.pixabay.com/photo/2012/04/02/16/12/x-24850_960_720.png";
    img.classList.add('x-mark');
  })
    img.addEventListener('click', () => console.log("XXXXXXxxMark!!!"));
}

function pushToInputList(e) {
  e.preventDefault();
  inputList.push({
    name:input.value,
    completed:false
  });
  input.value = '';
  renderListItems();
}
