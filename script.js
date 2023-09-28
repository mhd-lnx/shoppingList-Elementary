"use stirct";

// type the item in input and add it by button

const itemForm = document.querySelector("#item-form");
const itemInput = document.querySelector("#item-input");
const itemList = document.querySelector("#item-list");
const submitBtn = document.querySelector(".btn");
const clearAllBtn = document.querySelector("#clear");
const filter = document.querySelector("#filter");

const addItemToSubmit = function (e) {
  e.preventDefault();
  if (itemInput.value === "") {
    itemInput.style.border = "solid 1px red";
    return;
  }
  //create item DOM element
  addItemToDom();
  //add item to local storage 
  addItemToStorage();
  checkUI();
};
const addItemToDom = function(){
  const newLi = document.createElement("li");
  itemList.append(newLi);
  const newTextNode = document.createTextNode(itemInput.value);
  newLi.append(newTextNode);
  newLi.append(createButton("remove-item btn-link text-red"));
}
const addItemToStorage = function(){
  let itemFromStorage ;             //represent the items from local storage 
  if(localStorage.getItem('items')=== null){
    itemFromStorage = [];
  }else{
    itemFromStorage = JSON.parse(localStorage.getItem('items'))
  }
  // add new item to array 
  itemFromStorage.push(itemInput.value);
  //convert to JSON string and set to local storage 
  localStorage.setItem('items',JSON.stringify(itemFromStorage)) ;

}
itemForm.addEventListener("submit", addItemToSubmit);

const onBlur = function (e) {
  itemInput.style.border = "solid 1px #ccc";
};
submitBtn.addEventListener("blur", onBlur);

// NEW BUTTON FUNCITON
const createButton = function (classes) {
  const newButton = document.createElement("button");
  newButton.setAttribute("class", classes);
  newButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  return newButton;
};
////////////////////////REMOVE AND CLEAR ITEMS/////////////////////////////////

const onRemove = function (e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("are you sure?")) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
};
const onClearAll = function (e) {
  itemList.innerHTML = "";
  checkUI();
};

clearAllBtn.addEventListener("click", onClearAll);
itemList.addEventListener("click", onRemove);

/////////////////////////////////clear UI state

const checkUI = function () {
  const items = document.querySelectorAll("li");
  if (items.length === 0) {
    clearAllBtn.style.display = "none";
    filter.style.display = "none";
  } else {
    clearAllBtn.style.display = "inline-block";
    filter.style.display = "inline-block";
  }
};
checkUI();
////////////////////////////////////////////Filter items

const filterItems = function(e){
  const text = e.target.value.toLowerCase();
  const items = document.querySelectorAll("li");
  items.forEach((item)=>{
    const itemName = item.firstChild.textContent.toLowerCase();
    if(itemName.indexOf(text) !== -1){
      item.style.display = 'flex'
    }else{
      item.style.display = 'none'
    }
    
  })

}
filter.addEventListener('input',filterItems)