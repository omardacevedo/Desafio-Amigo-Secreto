// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmi = [];


function agregarAmigo(){
    let input= document.getElementById("amigo")
    let amigo = input.value.trim();

    // Validar la entrada
    if(amigo === ""){
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    listaAmi.push(amigo);

    // Limpiar el campo de entrada
    input.value= "";

    //Actualizar la lista en el Html
    updateList()
}

function updateList(){
    let list = document.getElementById("listaAmigos");
    list.innerHTML= "";
    listaAmigos.forEach(friend =>{
        let li = document.createElement("li");
        li.textContent=friend;
        list.appendChild(li);
    });
}

function sortearAmigo(){

    //Validar que la lista de amigos no esté vacía
    if(listaAmi.length===0){
        alert("No hay amigos en la lista para sortear");
        return;
    }
    //Generar indice aleatorio
    let randomIndex=Math.floor(Math.random()* listaAmi.length);

    //Obterner el nombre sorteado
    let selectedFriend = listaAmi[randomIndex];

    // Mostrar el resultado
    document.getElementById("resultado").innerHTML = "Amigo seleccionado: " + selectedFriend;

}