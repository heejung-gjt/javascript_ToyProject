'use strict';
export default class ToDoBox{

    createToDoBox(){
        console.log('why')
        // constructor(){
            const todo_box = document.createElement('section');
            todo_box.setAttribute('class','todo__box');
            const todo_header = document.createElement('header');
            todo_header.setAttribute('class','todo__header');
            const todo_headers = document.createElement('header');
            todo_headers.setAttribute('class','todo__header');
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
    
        todo_add.append(todo_icon);
        todo_header.append(todo_logo);
        todo_header.append(todo_add);
        content_input.append(input);
        content_send.append(add,back);
        todo_content.append(content_input, content_send);
        todo_box.append(todo_header, todo_content);
    }
}