//EVENTS
document.addEventListener('DOMContentLoaded', appendNumber(0));

//DOM
function appendNumber(number){
    //creo elemento h1
    let h1 = document.createElement('h1');
    h1.classList.add('mb-5');
    h1.setAttribute('id', 'number');
    //creo textnode
    let text = document.createTextNode(number);
    //appendo numero a h1
    h1.append(text);
    let card = document.querySelector('.card');
    card.append(h1);
}


