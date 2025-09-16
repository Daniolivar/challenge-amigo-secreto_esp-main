let amigos = []; // 1. Declaramos el array global para almacenar los nombres.

// 2. Función para agregar un amigo a la lista.
function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value; // Ahora captura el valor del campo de texto con el ID 'amigo'.
    
    // Validación: si el campo está vacío, muestra una alerta y sale de la función.
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    amigos.push(nombreAmigo); // Agrega el nombre al array `amigos`.
    
    // Llama a la función para actualizar la lista visualmente en la página.
    mostrarAmigos();
    
    // Limpia el campo de entrada.
    document.getElementById('amigo').value = '';
}

// 3. Función para mostrar la lista de amigos en la página.
function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos'); // Obtiene el elemento <ul> donde se mostrarán los nombres.
    
    // Limpia la lista actual para evitar duplicados.
    listaAmigos.innerHTML = '';
    
    // Recorre el array `amigos` y crea un elemento <li> para cada nombre.
    for (let i = 0; i < amigos.length; i++) {
        let nuevoLi = document.createElement('li');
        nuevoLi.textContent = amigos[i];
        listaAmigos.appendChild(nuevoLi); // Agrega el <li> a la lista <ul>.
    }
}

// 4. Función para sortear y mostrar un amigo aleatorio.
function sortearAmigo() {
    // Validación: si no hay amigos en la lista, muestra una alerta y sale.
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un amigo para realizar el sorteo.');
        return;
    }
    
    // Genera un índice aleatorio. Math.random() da un número entre 0 y 1, lo multiplicamos por el tamaño del array
    // y usamos Math.floor() para redondear al número entero más bajo.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtiene el nombre del amigo sorteado usando el índice aleatorio.
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Muestra el nombre sorteado en el elemento con id 'resultado'.
    document.getElementById('resultado').textContent = `El amigo secreto es: ${amigoSorteado}`;
}

// Función opcional para reiniciar la lista y el resultado.
function reiniciar() {
    amigos = []; // Vacía el array de amigos.
    mostrarAmigos(); // Limpia la lista visual en la página.
    document.getElementById('resultado').textContent = ''; // Limpia el resultado del sorteo.
    document.getElementById('amigo').value = ''; // Limpia el campo de entrada de texto
}
