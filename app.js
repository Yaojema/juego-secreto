// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Juego del número secreto';

// let subtitulo = document.querySelector('.texto__parrafo');
// subtitulo.innerHTML = 'Indica un número del 1 al 10';


// let numeroSecreto = generarNumeroAleatorio();
let numeroSecreto = 0;
console.log(numeroSecreto);

let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

// almacenar numeros aleatorios


function asignarTextoElemento(elememento, texto){
    let subtitulo = document.querySelector(elememento);
    subtitulo.innerHTML = texto;
}

function verificarIntento(){
    // let numeroUsuario = document.querySelector('input');
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(numeroUsuario);

    console.log("intentos", intentos);

    if (numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `Acertaste! el número despues de ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        // console.log("Acertarse");

        document.querySelector('#reiniciar').removeAttribute('disabled');

    } else {
        if (numeroUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else if (numeroUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El numero es mayor');
        } else {
            asignarTextoElemento('p', 'Sigue intentando :(');
        }
        intentos++;

        limpiarCaja();

        // console.log('Sigue intentando');
    }
// tipos de probar segun
    console.log(numeroSecreto);
    console.log(numeroUsuario);
    console.log(numeroUsuario === numeroSecreto);

    // console.log(typeof(numeroUsuario));
}

// limpiador
function limpiarCaja(){


    document.querySelector('#valorUsuario').value = '';
    
    // let valorCaja = document.querySelector('#valorUsuario');
    // valorCaja.value = '';
}

function generarNumeroAleatorio(){
    // let numeroSecreto = Math.floor(Math.random()*10)+1;
    // return numeroSecreto;
    // return Math.floor(Math.random()*10)+1;

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    // si el numero esta en la lista 

    console.log(`num generado: ${numeroGenerado}`);
    // console.log(`num sorteados: ${numerosSorteados}`);
    console.log(numerosSorteados);

    // si ya sorteo todo mostrar msj
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los posibles números');
    } else {
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('.texto__parrafo', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar caja
    limpiarCaja();

    // mensaje inicial de guia
    // asignarTextoElemento('h1', 'Juego del número secreto!');
    condicionesIniciales();

    // generar numero aleatoria
    // numeroSecreto = generarNumeroAleatorio();

    // inicializar intentos
    // intentos = 1;

    // deshabilitar boton
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}
condicionesIniciales();