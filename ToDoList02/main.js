'use strict';
import ToDoBox from './toDocnt.js';
const addBtn = document.querySelector('.todo__add .fas');
const toDoContent = document.querySelector('.todo__content');
const cntBackBtn = document.querySelector('.back');
const cntAddBtn = document.querySelector('.add');
const textarea = document.querySelector('.input');
const todo_box = document.querySelector('.todo__box');
const todo__content = document.querySelector('.todo__content');
let on = false;






cntAddBtn.addEventListener('click', addContent);

function addContent(){
    const newContent = document.createElement('section');
    newContent.setAttribute('class','newContent');
    const newContentdiv = document.createElement('div');
    newContentdiv.setAttribute('class','newContentdiv');
    const newContentP = document.createElement('p');
    newContentP.setAttribute('class','newdiv_p');
    const icon = document.createElement('i');
    icon.setAttribute('class','fas fa-times ');
    
    newContentP.innerText= textarea.value;
    if(textarea.value ==''){
       return;
    }
   
    newContentdiv.append(icon);
    newContentdiv.append(newContentP);
    newContent.append(newContentdiv);
    todo_box.append(newContent);

    if(!on){
        todo__content.classList.add('remove');
    }

    textarea.value='';

}


cntBackBtn.addEventListener('click',backInfo);

function backInfo(){
    toDoContent.classList.add('remove');
    textarea.value='';
}


addBtn.addEventListener('click',()=>{
    addInfo();
});

function addInfo(){
    toDoContent.classList.remove('remove');
    
}

const toDoList_box = new ToDoBox();
toDoList_box.createToDoBox();