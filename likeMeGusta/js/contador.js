window.addEventListener('keydown', (e)=>{
    if (e.key=="+"){  // se verifica si la tecla presionada es el signo "+".
        incremento()
        // se llama a la función incremento si la tecla es el signo "+".
    }
    else if(e.key=="-"){
        decremento()
        // se llama a la función decremento si la tecla es el signo "-".
    }
})

// se crea una variable llamada contador con un valor de 0
let contador=0;
const valor=document.getElementById("valor")

// se crea una funcion llamada incremento
function incremento(){
    //alert("incremento")
    contador+=1
    //localStorage.settItem("contador", contador)
    valor.innerHTML=contador;
}
// se crea una funcion decremento
function decremento(){
    //alert("decremento")
    if(contador>0){
        contador-=1;
        // Actualiza el contenido del elemento con el ID "valor" con el nuevo valor de "contador".
        valor.innerHTML=contador;
    }else{
        // Si el valor de "contador" es 0 o menos, establece "contador" en 0 y actualiza el contenido de "valor".
        contador=0;
        valor.innerHTML=contador;
    }
  }

// se realiza una funcion llamada resetear.
function resetear() {
    // Establece el valor de "contador" en 0.
    contador = 0;
    // Actualiza el contenido del elemento con el ID "valor" con el nuevo valor de "contador".
    valor.innerHTML = contador;
}
