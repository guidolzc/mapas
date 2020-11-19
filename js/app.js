const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
})



const buscador = document.querySelector ('#buscar input');

buscador.addEventListener('input',() =>{
    
    //console.log(buscador.value.length); vemos lo escribe con value , y con length vemos cuantos letras hay
    if(buscador.value.length > 5){
    ui.obtenerSugerencias(buscador.value); // mostrara solo el buscado
    }else{
        ui.mostrarEstablecimientos(); // volvera a mostrar todos 
    }

})