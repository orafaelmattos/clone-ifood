const cartModal = document.getElementById("cart-modal")
const cartBtn = document.getElementById("cart-btn")
const cartClose = document.getElementById("cart-close")
const cartModalLocal = document.getElementById("cart-modal-local");
const cartModalLocalClose = document.getElementById("close-modal-local");
const buscarLocal = document.getElementById("input-endereco");
const buttonRestaurante = document.getElementById("procurar-restaurante");
const buttonMercado = document.getElementById("procurar-mercado");
const entryError = document.getElementById("entry-error");
const loginModal = document.getElementById("cart-modal-login")
const loginModalContent = document.getElementById("cart-modal-login-content");
const loginEmail = document.getElementById("login-email");
const loginSenha = document.getElementById("login-password");
const mostrarLogin = document.getElementById("mostrarLogin");

//Abrir o Modal
cartBtn.addEventListener("click", function(){
    cartModal.classList.remove("hidden")
})

//Fechar o modal
cartClose.addEventListener("click", function(){
    cartModal.classList.add("hidden")
}) 

function openModalLocal() {

    cartModalLocal.classList.remove("hidden");

}

cartModalLocalClose.addEventListener("click", function(){
    cartModalLocal.classList.add("hidden")
}) 

function openSearch() {

    buscarLocal.addEventListener("keypress", function(event){
        if (event.key === "Enter" & buscarLocal.value !== "") {
        
        var searchTerm = document.getElementById("input-endereco").value;
    
        var searchUrl = "https://www.google.com/maps/search/" + searchTerm;

        window.open(searchUrl, "_blank");
      }else {

        entryError.classList.remove("hidden")

      }

      removeInformation()

      removeInformationClick() 

    })
}

function removeInformation() {

    buscarLocal.addEventListener("input", function(){
        entryError.classList.add("hidden")
    })
}

function removeInformationClick() {
    buscarLocal.addEventListener("click", function(){
        entryError.classList.add("hidden")
    })
}


function openModalLogin(){

    loginModal.style.display = "flex";
    

    closeModalLogin()
    closeModalClick()
}

function closeModalLogin(){
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape"){
            loginModal.style.display = "none";
        } 

        
    })
}
function closeModalClick(){
    loginModal.addEventListener("click", function(event){
        if(event.target === loginModal){
            loginModal.style.display = "none"
            
        }
    })
}

let tentativaLogin = 0;
const emails = ["teste@gmail.com"];
const passwords = ["teste123"];

function loginCheck() {
    const emailDigitado = loginEmail.value;
    const senhaDigitada = loginSenha.value;

   
    const indexEmail = emails.indexOf(emailDigitado);
    if (indexEmail !== -1 && passwords[indexEmail] === senhaDigitada) {
        alert("Login bem-sucedido!");
        
    } else {
        tentativaLogin++;

        if (tentativaLogin >= 3) {
            mostrarLogin.style.display = "flex";
        }
    }
    
}

buttonRestaurante.addEventListener("click", function(){
    let searchRestaurante = "https://www.google.com/maps/search/Restaurante"

    window.open(searchRestaurante, "_blank")
})

buttonMercado.addEventListener("click", function(){
    let searchRestaurante = "https://www.google.com/maps/search/Supermercado"

    window.open(searchRestaurante, "_blank")
})

var radio = document.querySelector(".manual-btn");
var cont = 1;
var intervalID;

document.getElementById("radio1").checked = true;

function iniciarIntervalo() {
    intervalID = setInterval(() => {
        proximaImg();
    }, 5000);
}

function pararIntervalo() {
    clearInterval(intervalID);
}

function verificarTamanhoTela() {
    if (window.matchMedia("(min-width: 768px)").matches) {
    
        pararIntervalo();
    } else {
        
        iniciarIntervalo();
    }
}


verificarTamanhoTela();
window.addEventListener('resize', verificarTamanhoTela);

function proximaImg() {
    cont++;
    if (cont > 3) {
        cont = 1;
    }
    document.getElementById("radio" + cont).checked = true;
}
