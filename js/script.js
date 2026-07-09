const formLogin = document.getElementById("formLogin");
const email = document.getElementById("email");
const senha = document.getElementById("senha");
const mensagemLogin = document.getElementById("mensagemLogin");
const areaRestrita = document.getElementById("areaRestrita");
const linkLogin = document.getElementById("linkLogin");
const btnSair = document.getElementById("btnSair");

const usuarioTeste = {
    email: "admin@email.com",
    senha: "123456",
};

function atualizarTelaLogado(logado) {
    areaRestrita.classList.toggle("oculto", !logado);
    btnSair.classList.toggle("oculto", !logado);
    linkLogin.classList.toggle("oculto", logado);
}

function mostrarMensagem(texto, tipo) {
    mensagemLogin.textContent = texto;
    mensagemLogin.className = tipo;
}

formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const emailDigitado = email.value.trim();
    const senhaDigitada = senha.value.trim();

    if (emailDigitado === usuarioTeste.email && senhaDigitada === usuarioTeste.senha) {
        atualizarTelaLogado(true);
        mostrarMensagem("Login realizado com sucesso!", "sucesso");
        formLogin.reset();
        areaRestrita.scrollIntoView({ behavior: "smooth" });
        return;
    }

    atualizarTelaLogado(false);
    mostrarMensagem("E-mail ou senha incorretos.", "erro");
});

btnSair.addEventListener("click", function () {
    atualizarTelaLogado(false);
    mostrarMensagem("Você saiu da área restrita.", "sucesso");
    document.getElementById("login").scrollIntoView({ behavior: "smooth" });
});

atualizarTelaLogado(false);
