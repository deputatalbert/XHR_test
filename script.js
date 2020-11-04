const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

xhr.responseType = 'json';
xhr.onload = () => {
    if (xhr.status >= 400) {
        console.error(xhr.response)
    } 
    else {
        console.log(xhr.response);
    };

    let data = xhr.response;

    renderText(data);
 
};

xhr.send();

    
const renderText = (json) => {
    const name = json.map((item) => `<li><div>${item.id + ')'} ${item.name}</div><div><p class="paragraf"> Email: ${item.email}</p></div></li> `);

    const result = document.querySelector('.list');

    result.innerHTML = name.join('');
    
}

let classname = '.container_none';
let container = document.querySelector(classname);
let btn_open = document.querySelector('.open');
let btn_close = document.querySelector('.close');

btn_open.addEventListener('click', () => {
    if(container.classList.value == 'container_none') {
        container.classList.value = 'container';
    } else {
        container.classList.value == 'container_none';
    }
    
    
});

btn_close.addEventListener('click', () => {
    container.classList.value == 'container' ? container.classList.value = 'container_none' : container.classList.value = 'container'; }
);
    