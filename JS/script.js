const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let warnings = ""

    if (nombre.value.length < 3){
       alert("El Nombre es muy corto") 
    }

    
    if (apellido.value.length < 3){
        alert("El Apellido es muy corto") 
    }

    const email = document.querySelector('#email');
    const expresion = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

    if (!email.value.match(expresion)){
        const span = document.querySelector('#error-email');
        span.textContent = 'No es un email'
    } else {
        form.submit()
    }
       

})