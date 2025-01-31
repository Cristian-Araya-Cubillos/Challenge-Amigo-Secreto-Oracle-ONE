// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo(){
    let amigo_Agregado = document.getElementById("amigo").value;
    if(amigo_Agregado == "" || /\d/.test(amigo_Agregado)){ ///\d/.test Se encarga de verificar si se ingreso algun numero en la cadena de texto
        alert('Por favor, inserte un nombre (sin números).')
    }else{
        amigos.push(amigo_Agregado);
        console.log(amigos);
        limpiarCaja();
        actualizarLista();
    }

}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
    return;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}