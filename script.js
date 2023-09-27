'use stirct'

// type the item in input and add it by button 

const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const submitBtn = document.querySelector('.btn');

const addItem = function(e){
    e.preventDefault();
    if(itemInput.value === ''){
        itemInput.style.border = 'solid 1px red';
        return
    }
    const newLi = document.createElement('li');
    itemList.append(newLi);
    const newTextNode = document.createTextNode(itemInput.value);
    newLi.append(newTextNode);
    newLi.append(createButton('remove-item btn-link text-red'));
  
}
itemForm.addEventListener('submit',addItem)

const onBlur = function(e){
    itemInput.style.border = 'solid 1px #ccc';
}
submitBtn.addEventListener('blur',onBlur);

// NEW BUTTON FUNCITON
const createButton = function(classes){
    const newButton = document.createElement('button');
    newButton.setAttribute('class',classes);
    newButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    return newButton;   
}
