// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaNombres = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombreDelAmigo = input.value.trim(); 

    if (nombreDelAmigo === '') {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    listaNombres.push(nombreDelAmigo);
    actualizarLista();

    input.value = ''; 
}

function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    listaNombres.forEach((nombre) => {
        const nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = nombre;
        listaAmigos.appendChild(nuevoElemento);
    });
}

function sortearAmigo() {
    if (listaNombres.length === 0) {
        alert("La lista está vacía. Agrega al menos un nombre antes de sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaNombres.length);
    const nombreSorteado = listaNombres[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>🎉 ¡El amigo secreto es: <strong>${nombreSorteado}</strong>! 🎉</p>`;
}
