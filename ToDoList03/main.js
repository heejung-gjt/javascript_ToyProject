const new__box = document.querySelector('.new__box');
const new__field = document.querySelector('.new__field');
const section = document.querySelector('#section');
const modal__bg = document.querySelector('.modal__bg');
const fields = document.querySelector('.fields');
const toDoContent = document.querySelector('.modal');
const  btnSecondary = document.querySelector('.btn-secondary');

// ---------------------------------필드 생성------------------

// modal close 버튼
btnSecondary.addEventListener('click',()=>{
    modal__bg.style.display='none';
});

function field(){
    const new_todo_box = document.createElement('section');
    new_todo_box.setAttribute('class','new_todo_box');
    const todo__box = document.createElement('section');
    todo__box.setAttribute('class','todo__box');
    const todo_header = document.createElement('header');
    todo_header.setAttribute('class','todo__header');
    const todo_logo = document.createElement('article');
    todo_logo.setAttribute('class','todo__logo');
    const todo_icon = document.createElement('i');
    todo_icon.setAttribute('class','fas fa-plus click');
    const todo_content = document.createElement('section');
    todo_content.setAttribute('class','todo__content remove');
    const content_input = document.createElement('article');
    content_input.setAttribute('class','content__input');
    const todo_add = document.createElement('article');
    todo_add.setAttribute('class','todo__add ');
    todo_add.addEventListener('click',()=>{
        toDoContent.classList.remove('remove');
        modal__bg.style.display='block';
    });

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
    new__field.append(new_todo_box);
    return new__field;
}
// ------------------------------------------------------------


new__box.addEventListener('click',()=>{
    field();
});

const Additem = field();
fields.appendChild(Additem);

