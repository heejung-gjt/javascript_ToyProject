'use strict';
// import ToDoBox from './toDocnt.js';
const addBtn = document.querySelector('.todo__add .fas');
const toDoContent = document.querySelector('.todo__content');
const cntBackBtn = document.querySelector('.back');
const cntAddBtn = document.querySelector('.add');
const textarea = document.querySelector('.input');
const todo_box = document.querySelector('.todo__box');
const todo__content = document.querySelector('.todo__content');
const new__box = document.querySelector('.new__box');
const new__field = document.querySelector('.new__field');


let on = false;

function field(){
    const new_todo_box = document.createElement('section');
    new_todo_box.setAttribute('class','new_todo_box');
    const todo__box = document.createElement('section');
    todo__box.setAttribute('class','todo__box');
    const todo_header = document.createElement('header');
    todo_header.setAttribute('class','todo__header');
    const todo_logo = document.createElement('article');
    todo_logo.setAttribute('class','todo__logo');
    const todo_adds = document.createElement('article');
    todo_adds.setAttribute('class','todo__add');
    const todo_icon = document.createElement('i');
    todo_icon.setAttribute('class','fas fa-plus click');
    const todo_content = document.createElement('section');
    todo_content.setAttribute('class','todo__content remove');
    const content_input = document.createElement('article');
    content_input.setAttribute('class','content__input');
    const todo_add = document.createElement('article');
    todo_add.setAttribute('class','todo__add');
    const input = document.createElement('textarea');
    input.setAttribute('class','input');
    input.setAttribute('cols',5);
    input.setAttribute('rows',5);
    const content_send = document.createElement('article');
    content_send.setAttribute('class','content__send');
    const add = document.createElement('button');
    add.setAttribute('class','add');
    const back = document.createElement('button');
    back.setAttribute('class','back');
    add.innerText='ADD';
    back.innerText='BACK';
    todo_logo.innerText='ToDoList';

    todo_add.append(todo_icon);
    todo_header.append(todo_logo);
    todo_header.append(todo_add);
    content_input.append(input);
    content_send.append(add,back);
    todo_content.append(content_input);
    todo_content.append(content_send);
    new_todo_box.append(todo_header, todo_content);
    new__field.append(new_todo_box)

}



new__box.addEventListener('click',field);

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
    // new__field.append(newContent)

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

// addBtn.addEventListener('click',()=>{
//     console.log('haha')
    // addInfo();
// });

function addInfo(){
    console.log('huu')
    toDoContent.classList.remove('remove');
    // todo_content.classList.remove('remove');
    
}

// const toDoList_box = new ToDoBox();
// toDoList_box.createToDoBox();