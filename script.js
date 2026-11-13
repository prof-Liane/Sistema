let botaoTema = document.getElementById("btnTema");
let tema = localStorage.getItem("tema");

if(tema == "escuro"){
    document.body.classList.add("tema-escuro");
    botaoTema.innerText = "Alterar para tema claro";
}
else{
    document.body.classList.remove("tema-escuro");
    botaoTema.innerText = "Alterar para tema escuro";
}
 
botaoTema.addEventListener("click", alterarTema);
 
function alterarTema() {

    if(document.body.classList.contains("tema-escuro")){                
        document.body.classList.remove("tema-escuro");
        botaoTema.innerText = "Alterar para tema escuro";
        localStorage.setItem("tema", "claro");
    }
    else{
        document.body.classList.add("tema-escuro");
        botaoTema.innerText = "Alterar para tema claro";
        localStorage.setItem("tema", "escuro");        
    }
    
}

let formulario = document.getElementById("formCadastro");
formulario.addEventListener("submit", cadastrar);

let usuarios = JSON.parse(localStorage.getItem("users")) || [];

function cadastrar(event){
    event.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let idade = document.getElementById("idade").value;

    //objeto
    let usuario = {
        nome_user: nome,
        email_user: email,
        idade_user: idade
    };
    // array
    usuarios.push(usuario);

    localStorage.setItem("users", JSON.stringify(usuarios));

    listarUsuarios();

}

let botaoListar = document.getElementById("btnListar");
botaoListar.addEventListener('click', listarUsuarios);

function listarUsuarios(){

    let usuarios = JSON.parse(localStorage.getItem("users"));
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    for(let i=0;i<usuarios.length; i++){
        lista.innerHTML +=  "<p>Nome: " + usuarios[i].nome_user + 
                            " | E-mail: " + usuarios[i].email_user + 
                            " | Idade: " + usuarios[i].idade_user + "</p>";
    }

}