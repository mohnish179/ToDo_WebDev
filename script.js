let todo = [];

window.onload = () => {
    window.addEventListener('click', outsideClick);
    localStorage.getItem('todo') ? todo = JSON.parse(localStorage.getItem('todo')) : todo = [];
    addtodos();
}

function addtodos(){
    let str = '';
    todo.forEach(obj => {
        str += card(obj);
    });
    document.querySelector('.card-container').innerHTML = str;
}

function card(obj){
    return `
    <div class="card">
            <div class="card-top">
                <h1 class="card-title">${obj.title}</h1>
                <button class="card-delete" onclick="deleteTodo('${obj.id}')">
                <img src="data:image/png;base64,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"/>
                </button>
            </div>
            <p class="card-desc">
            ${obj.desc}
            </p>
        </div>
    `;
}

function onadd(e){
    e.preventDefault();
    let modal = document.querySelector('.modal-container');
    modal.classList.toggle('form-active');
    modal.classList.toggle('form-inactive');
    return false;
}

function outsideClick(e){
    if(e.target!=document.querySelector('.modal-container')){  return; }
    e.preventDefault();
    e.stopPropagation();
    let modal = document.querySelector('.modal-container');
    modal.classList.toggle('form-active');
    modal.classList.toggle('form-inactive');
    return false;
}

function add(e){
    let title = document.querySelector('.form-title').value;
    let desc = document.querySelector('.form-desc').value;
    let id = Math.random().toString(36).substr(2, 9);
    let newelem = {
        title,desc,id
    };
    todo.push(newelem);
    localStorage.setItem('todo', JSON.stringify(todo));
    addtodos();
    document.querySelector('.form-title').value = '';
    document.querySelector('.form-desc').value = '';
    e.preventDefault();
    e.stopPropagation();
    let modal = document.querySelector('.modal-container');
    modal.classList.toggle('form-active');
    modal.classList.toggle('form-inactive');
    return false;
}

function deleteTodo(id){
    todo = todo.filter(e=>e.id!=id);
    localStorage.setItem('todo', JSON.stringify(todo));
    addtodos();
}