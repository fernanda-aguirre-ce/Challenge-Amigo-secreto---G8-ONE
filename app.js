// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Varibale para ingrso de nombres y Array para almacenar nombres

let nombreAmigo = [];

//Función para agregar nombres en el campo principal
function agregarAmigo() {
    let ingresoNombre = document.getElementById('amigo').value;

// Validar ingreso de nombres, actualizar array con push
// Limpiar campo de entrada
 // Validar si el nombre ya existe en el array
 if (nombreAmigo.includes(ingresoNombre)) {
    // Mostrar alerta o mensaje si el nombre ya existe
    alert("El nombre ya fue ingresado. Por favor, ingresa un nombre diferente.");
    return;  // Detener la ejecución si el nombre ya existe
}
   // Si el nombre no existe, agregarlo al array
if (ingresoNombre) {
    nombreAmigo.push(ingresoNombre);
    //para limpiar campo luego de agregar nombre
    document.getElementById('amigo').value = "";
    console.log(nombreAmigo);
    mostrarAmigos();
} else {
    alert("Por favor, ingresa un nombre.");
}
}

// función para actualizar lista HTML con nombres
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";
    
    for (let i = 0; i < nombreAmigo.length; i++) {
    // Crear un nuevo <li>
        let nuevoAmigo = document.createElement('li');  
    // Asignar el nombre del amigo
        nuevoAmigo.textContent = nombreAmigo[i];    
    // Agregar el <li> a la lista    
        lista.appendChild(nuevoAmigo);                  
    }


}

// sorteo de amigos

function sortearAmigo(){
        // Validar si el array de amigos no está vacío
        if (nombreAmigo.length === 0) {
            alert("No hay amigos disponibles para sortear.");
            return;
        }

 // Generar un índice aleatorio entre 0 y el largo del array - 1
 let indiceAleatorio = Math.floor(Math.random() * nombreAmigo.length);

 // Obtener el nombre sorteado usando el índice aleatorio
 let amigoSorteado = nombreAmigo[indiceAleatorio];

// Mostrar el resultado en el elemento HTML con id 'resultado'
    document.getElementById('resultado').innerHTML = "El amigo sorteado es: " + amigoSorteado;
}
