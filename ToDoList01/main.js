const input_text = document.querySelector('.texts');  //input text
const button_click = document.querySelector('.click'); // plus icon
const button_delete =document.querySelector('.delete'); //delete icon
const box_content = document.querySelector('.contents');

// text 안에 들어간 내용은 지워져야 하고 커서는 texts안에 focus되어져야 한다
function onAdd(){
    const contents = input_text.value;
    if(contents===''){ 
    input_text.focus();
    return;
    }

    //새로 추가된 아이템 삽입
    const Additem =createitem(contents);
    box_content.appendChild(Additem);
    // 새로 추가된 아이템으로 스크롤링
    Additem.scrollIntoView({block:'center'});
    input_text.value ='';
    input_text.focus();

}

function createitem(contents){
    const contents__list = document.createElement('div');
    contents__list.setAttribute('class','contents__list');
    const lists = document.createElement('div');
    lists.setAttribute('class','lists');

    const lists__item =document.createElement('span');
    lists__item.setAttribute('class','lists__item');
    lists__item.innerText=contents;
    
    //컨텐츠 안의 삭제 버튼 누르면 전부 삭제
    const lists__delete =document.createElement('button');
    lists__delete.setAttribute('class','lists__delete');
    lists__delete.innerHTML='<i class="fas fa-trash-alt"></i>';
    lists__delete.addEventListener('click' , ()=>{
        contents__list.removeChild(lists);
        contents__list.removeChild(items__lines);
    });

    const items__lines = document.createElement('div');
    items__lines.setAttribute('class','items__lines');

    lists.appendChild(lists__item);
    lists.appendChild(lists__delete);
    contents__list.appendChild(lists);
    contents__list.appendChild(items__lines);
    return contents__list;
}

button_click.addEventListener('click',()=>{
    onAdd();
});
input_text.addEventListener('keypress',()=>{
    if(event.key=='Enter'){
        onAdd();
    }
})
