// vanilla JavaScript
 //recuperar el boton

 const buttons = document.querySelectorAll('button');

 //ejecutar funcion al clickear en el boton
buttons.forEach(button => {

    button.addEventListener('click', function() {
        //recuperar la id del atributo html
        const id = this.getAttribute('data-id');
        if(this.classList.contains("liked")){
            this.classList.remove("liked");
            this.innerText = "Me gusta"
        }else{
            this.innerText = "Quitar me gusta"
            this.classList.add("liked");
        }
     });
});

