const newBox = document.querySelector('.new__box');
const newField = document.querySelector('.new__field');
const section = document.querySelector('#section');
const modalBg = document.querySelector('.modal__bg');
const fields = document.querySelector('.fields');
const toDoModal = document.querySelector('.modal');
const  btnSecondary = document.querySelector('.btn-secondary');
const btnPrimary = document.querySelector('.btn-primary');
const textarea = document.querySelector('#textarea');

// ---------------------------------필드 생성------------------


// function saveContent(){
//     const newContent = document.createElement('section');
//     newContent.setAttribute('class','newContent');
//     const newContentdiv = document.createElement('div');
//     newContentdiv.setAttribute('class','newContentdiv');
//     const newContentP = document.createElement('p');
//     newContentP.setAttribute('class','newdiv_p');
//     const icon = document.createElement('i');
//     icon.setAttribute('class','fas fa-times ');
//     newContentP.innerText= textarea.value;
//     newContentdiv.append(icon);
//     newContentdiv.append(newContentP);
//     newContent.append(newContentdiv);
//     return newContent
// }

// function addContent(){
//     const SaveItem = saveContent();
//     newField.appendChild(SaveItem);
// }

// modal add 버튼
// btnPrimary.addEventListener('click',()=>{
//     if(textarea.value==''){
//         return
//     }
//     else{
//         addContent();
//         modalBg.style.display='none';
//         textarea.value = '';
//     }
// });
// modal back 버튼
btnSecondary.addEventListener('click',()=>{
    modalBg.style.display='none';
    textarea.value = '';
});
let toDos =0
function field(){
    toDos = toDos+1
    const newToDoBox = document.createElement('section');
    newToDoBox.setAttribute('class','new_todo_box');
    newToDoBox.setAttribute('id',`${toDos}`);
    const toDoBox = document.createElement('section');
    toDoBox.setAttribute('class','todo__box');
    const toDoHeader = document.createElement('header');
    toDoHeader.setAttribute('class','todo__header');
    const toDoLogo = document.createElement('article');
    toDoLogo.setAttribute('class','todo__logo');
    const toDoIcon = document.createElement('i');
    toDoIcon.setAttribute('class','fas fa-plus click');
    const toDoContent = document.createElement('section');
    toDoContent.setAttribute('class','todo__content');
    toDoContent.setAttribute('id',`${toDos}`);
    const contentInput = document.createElement('article');
    contentInput.setAttribute('class','content__input');
    const toDoAdd = document.createElement('article');
    toDoAdd.setAttribute('class','todo__add ');
    toDoAdd.setAttribute('id',`${toDos}`);
    
    let li;
      // + 아이콘 누르면
      toDoAdd.addEventListener('click',(event)=>{
          const modalContent = Modal()
          newToDoBox.append(modalContent)
        const btn = event.target;
        // console.log(btn)
        li = btn.nextSibling;
        console.log(li)
        // console.log(li)
        // li.append(newContent);
        // const cleanToDos = toDoAdd.filter(function())

        // toDoModal.classList.remove('remove');
        // modalBg.style.display='block';
    });

    toDoLogo.innerText='ToDoList';

    toDoAdd.append(toDoIcon);
    toDoHeader.append(toDoLogo,toDoAdd);
    // contentSend.append(add,back);
    toDoContent.append(contentInput);
    newToDoBox.append(toDoHeader,toDoContent);
    newField.append(newToDoBox);
    return newField;
}
let word ;
    function Modal(){
            const todo__content = document.createElement('section');
            todo__content.setAttribute('class','todo__content');
            const content__input = document.createElement('article');
            content__input.setAttribute('class','content__input');
            const textarea = document.createElement('textarea');
            textarea.setAttribute('class','textarea');
            textarea.setAttribute('cols',35);
            textarea.setAttribute('rows',5);
            const content__send = document.createElement('article');
            content__send.setAttribute('class','content__send ');
            const add = document.createElement('button');
            add.setAttribute('class','add');
            const back = document.createElement('button');
            back.setAttribute('class','back ');
            add.innerText='ADD';
          
            add.addEventListener('click',()=>{
                if (textarea.value==''){
                    console.log('nope')
                    return;
                }else{
                    const newContent = document.createElement('ul');
                    newContent.setAttribute('class','newContent');
                    const newContentdiv = document.createElement('li');
                    newContentdiv.setAttribute('class','newContentdiv');
                    const newContentP = document.createElement('p');
                    newContentP.setAttribute('class','newdiv_p');
                    const icon = document.createElement('i');
                    icon.setAttribute('class','fas fa-times ');
                    newContentP.innerText= textarea.value;
                    word=textarea.value;
                    console.log(word)
                    // a.append(newContentP)
                    // word = textarea.value;
                    newContentdiv.append(icon);
                    newContentdiv.append(newContentP);
                    newContent.append(newContentdiv);
                    // li.append(newContent);
                    // console.log(li)
                    modalBg.style.display='none';
                    textarea.value = '';
                    // console.log(words)
                }
            })
            back.innerText='BACK';
            content__send.append(add,back);
            content__input.append(textarea);
            todo__content.append(content__input, content__send);
            return todo__content
    }

    // //modal 버튼 누르면
    // btnPrimary.addEventListener('click',()=>{
    //     // const btn = event.target;
    //     // const li = btn.parentNode;
    //     // console.log(li)
    //     if(textarea.value==''){
    //         return
    //     }
    //     else{
    //         const newContent = document.createElement('ul');
    //         newContent.setAttribute('class','newContent');
    //         const newContentdiv = document.createElement('li');
    //         newContentdiv.setAttribute('class','newContentdiv');
    //         const newContentP = document.createElement('p');
    //         newContentP.setAttribute('class','newdiv_p');
    //         const icon = document.createElement('i');
    //         icon.setAttribute('class','fas fa-times ');
    //         newContentP.innerText= textarea.value;
    //         newContentdiv.append(icon);
    //         newContentdiv.append(newContentP);
    //         newContent.append(newContentdiv);
    //         li.append(newContent);
    //         // console.log(li)
    //         modalBg.style.display='none';
    //         textarea.value = '';
    //     }
    // });

// ------------------------------------------------------------


newBox.addEventListener('click',()=>{
    field();
});

const Additem = field();
fields.appendChild(Additem);

