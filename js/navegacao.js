import {
    templateInicio,
    templateProjetos,
    templateCadastro
} from "./templates.js";

export function iniciarNavegacao() {
    const conteudo = document.querySelector("main");

    if (!conteudo) {
        console.error("Elemento <main> não encontrado.");
        return;
    }

    const rotas = {
        "/": templateInicio,
        "/index.html": templateInicio,
        "/projetos.html": templateProjetos,
        "/cadastro.html": templateCadastro
    };

    function renderizar(rota) {
        const template = rotas[rota] || templateInicio;
        conteudo.innerHTML = template();
    }

    function tratarNavegacao(evento) {
        const link = evento.target.closest("a");

        if (!link) return;

        const url = new URL(link.href);

        if (url.origin !== window.location.origin) return;

        evento.preventDefault();

        history.pushState({}, "", url.pathname);
        renderizar(url.pathname);
    }

    document.addEventListener("click", tratarNavegacao);

    window.addEventListener("popstate", () => {
        renderizar(window.location.pathname);
    });

    renderizar(window.location.pathname);
}
