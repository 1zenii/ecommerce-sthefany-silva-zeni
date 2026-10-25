// Etapa 1: mensagem de frete com if/else
const totalCarrinho = 500;
const aviso = document.querySelector("#aviso-frete");

if (totalCarrinho >= 250) {
    aviso.textContent = "Frete grátis!";
} else {
    aviso.textContent = "Frete: R$ 20";
}

// Etapa 2: menu que abre e fecha
const btn = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");

btn.addEventListener("click", function () {
    menu.classList.toggle("aberto");
});

// Etapa 3: validação simples do formulário de contato
const form = document.querySelector("#contato-form");
const nomecompleto = document.querySelector("#nomecompleto");
const email = document.querySelector("#email");
const telefone = document.querySelector("#telefone");
const erro = document.querySelector("#erro");

form.addEventListener("submit", function (evento) {
    erro.textContent = ""; // Limpa o erro anterior

if (nomecompleto.value === "") {
        evento.preventDefault();
        erro.textContent = "Digite seu nome completo.";
    }
    else if (email.value === "") {
        evento.preventDefault();
        erro.textContent = "Digite seu e-mail.";
    }
    else if (telefone.value === "") {
        evento.preventDefault();
        erro.textContent = "Digite seu telefone.";
    }
});

console.log("app.js carregada com sucesso!");