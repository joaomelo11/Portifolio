const anos = document.querySelectorAll(".ano-atual");

anos.forEach((elemento) => {
    elemento.textContent = new Date().getFullYear();
});

const botaoMenu = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

if (botaoMenu && menu) {

    botaoMenu.addEventListener("click", () => {

        const estaAberto = menu.classList.toggle("aberto");

        botaoMenu.setAttribute("aria-expanded", estaAberto);

        botaoMenu.textContent = estaAberto ? "✕" : "☰";

    });

}

const formulario = document.querySelector("#form-contato");

if (formulario) {

    formulario.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const assunto = document.querySelector("#assunto").value.trim();
        const mensagem = document.querySelector("#mensagem").value.trim();

        const status = document.querySelector("#mensagem-status");

        const corpo = `Nome: ${nome}\nE-mail: ${email}\n\n${mensagem}`;

        const destino = "seuemail@gmail.com";

        status.textContent = "Abrindo seu aplicativo de e-mail...";

        window.location.href =
            `mailto:${destino}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`;

    });
}