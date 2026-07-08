const formLogin = document.getElementById("formLogin");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const mensagemLogin = document.getElementById("mensagemLogin");
const areaRestrita = document.getElementById("areaRestrita");
const btnSair = document.getElementById("btnSair");
const linkLogin = document.getElementById("linkLogin");

function verificarLogin() {
    const usuarioLogado = localStorage.getItem("usuarioLogado");

    if (usuarioLogado === "true") {
        areaRestrita.classList.remove("oculto");
        btnSair.classList.remove("oculto");
        linkLogin.classList.add("oculto");
    } else {
        areaRestrita.classList.add("oculto");
        btnSair.classList.add("oculto");
        linkLogin.classList.remove("oculto");
    }
}

formLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (email === "admin@email.com" && senha === "123456") {
        localStorage.setItem("usuarioLogado", "true");

        mensagemLogin.textContent = "Login realizado com sucesso!";
        mensagemLogin.className = "mensagem-sucesso";

        verificarLogin();

        setTimeout(function() {
            window.location.href = "#areaRestrita";
        }, 500);
    } else {
        mensagemLogin.textContent = "E-mail ou senha incorretos.";
        mensagemLogin.className = "mensagem-erro";
    }
});

btnSair.addEventListener("click", function() {
    localStorage.removeItem("usuarioLogado");
    verificarLogin();

    mensagemLogin.textContent = "Você saiu da conta.";
    mensagemLogin.className = "mensagem-erro";

    window.location.href = "#login";
});

verificarLogin();
