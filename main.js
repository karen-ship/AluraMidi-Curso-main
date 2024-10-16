function playSonidoPom(){
    document.querySelector('#sonido_tecla_pom').play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = playSonidoPom;

// document.querySelector('.tecla_pom').onclick = playSonidoPom;