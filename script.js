'use stirct'

// type the item in input and add it by button 

const itemInput = document.querySelector('#item-input');
const itemForm = document.querySelector('#item-form')
const submitBtn = document.querySelector('.btn');
const itemList = document.querySelector('#item-list')
const onClick = function(e){
   
    e.preventDefault();
    if(itemInput.value ===''){
        itemInput.style.border = '1px red solid';
    }else{
        const newLi = document.createElement('li');
        itemList.append(newLi);
        const textNode = document.createTextNode(itemInput.value);
        newLi.append(textNode);
        const newButton = document.createElement('button');
        newButton.setAttribute('class','remove-item btn-link text-red');
        newButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        newLi.append(newButton);
    }
}

submitBtn.addEventListener('click',onClick)
// onblur section for item input 

const onBlur = function(e){
    itemInput.style.border = '1px solid #ccc';
}
submitBtn.addEventListener('blur',onBlur)
