
//DOM
    const card = document.querySelector('.card'); //parente di h1 e del div che conterrà i btns
    //creo elemento h1
    let h1 = document.createElement('h1');
    h1.classList.add('mb-5');
    h1.setAttribute('id', 'number');
    //creo textnode
    let text = document.createTextNode('0');
    //appendo numero a h1
    h1.append(text);
    card.append(h1);
    
    //creo div
    let divBtns = document.createElement('div');
    divBtns.classList.add('d-flex', 'flex-row', 'justify-content-between');

    //creo buttons
    let btnDecrem = document.createElement('button');
    btnDecrem.classList.add('btn', 'btn-dark', 'rounded', 'decremento');
    btnDecrem.innerHTML = '<i class="fas fa-minus-circle"></i>';

    let btnCanc = document.createElement('button');
    btnCanc.classList.add('btn', 'btn-dark', 'rounded', 'cancella');
    btnCanc.innerHTML = 'CLEAR';

    let btnIncrem = document.createElement('button');
    btnIncrem.classList.add('btn', 'btn-dark', 'rounded', 'incremento');
    btnIncrem.innerHTML = '<i class="fas fa-plus-circle"></i>';
    

    divBtns.append(btnDecrem);
    divBtns.append(btnCanc);
    divBtns.append(btnIncrem);
    
    card.append(divBtns);

//VARIABLES
const buttons = document.querySelectorAll('.btn');
let number = document.querySelector('#number');

//EVENTS
buttons.forEach(function(button){
    button.addEventListener('click', counterUpdate);
})

let counter = 0
function counterUpdate(e){
    if (e.target.classList.contains('decremento')){
        counter--;
    }
    else if (e.target.classList.contains('incremento')){
        counter++;
    }
    else {
        counter = 0;
    };
    numberUpdate();
}
function numberUpdate(){
    number.innerHTML = `${counter}`;
}


















