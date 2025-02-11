// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function addfriend(){
    let input= document.querySelectorById("amigo")
    let amigo = input.value.trim();

    // Validar la entrada
    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    amigos.push(amigo);

    // Limpiar el campo de entrada
    input.value= "";

}

function updateList(){
    
}
