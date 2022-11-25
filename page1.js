rotate = () =>{

    const img = document.getElementById('arrow');
    const form = document.getElementById('form');
    const mark = document.getElementById('data-Entry');
    const container = document.getElementById('container');
    const section = document.getElementById('section');
    const p = document.getElementById('p');
    
    img.classList.toggle("rotate-90");
    mark.classList.toggle("hide");
    container.classList.toggle("p-t");
    section.classList.toggle("s-h");
    p.classList.toggle("p-m");
    form.classList.toggle("op");

}


// const scriptURL = 'https://script.google.com/macros/s/AKfycbxzUlnN-xphXoFdGNVtQHaicTPyEgMuJv8lX9yvg4QbX06_RYeTv3NOhzQWGXIf2CBkmQ/exec'
// const form = document.forms['google-sheet']

// form.addEventListener('submit',e => {
//     e.preventDefault()
//     fetch(scriptURL, {method: 'POST' , body: new FormData(form)})
//     .then(Response => alert("You Information is Successfully Collected 👍"))
//     .catch(error => console.error('Error' , error.message))
// })



            const scriptURL = 'https://script.google.com/macros/s/AKfycbxE4gIJ5fdEeh7cWDw-acylS__XVkyGOAgKD8lgpDufGrzvcgt59XjdInCYBX8zJuSe/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                .catch(error => console.error('Error!', error.message))
            })
          