
const listaDeTeclas = document.querySelectorAll('input[type=button]');

const inputTel = document.querySelector('input[type=tel]');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    
    const tecla = listaDeTeclas[contador];

    tecla.onclick = function (){
        inputTel.value = inputTel.value + tecla.value;
    };

}

// ''