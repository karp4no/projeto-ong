export function iniciarValidacao() {
    configurarFormularios();

    const observador = new MutationObserver(() => {
        configurarFormularios();
    });

    observador.observe(document.body, {
        childList: true,
        subtree: true
    });

    document.addEventListener("submit", (evento) => {
        const formulario = evento.target;

        if (!formulario.matches("form")) return;

        evento.preventDefault();

        const campos = formulario.querySelectorAll(
            "input, select, textarea"
        );

        let formularioValido = true;

        campos.forEach((campo) => {
            if (campo.value.trim() === "") {
                campo.classList.add("campo-erro");
                formularioValido = false;
            } else {
                campo.classList.remove("campo-erro");
            }
        });

        if (!formularioValido) {
            mostrarMensagem(
                formulario,
                "Verifique os campos obrigatórios."
            );
            return;
        }

        mostrarMensagem(
            formulario,
            "Cadastro preenchido corretamente!"
        );
    });

    document.addEventListener("input", (evento) => {
        const campo = evento.target;

        if (!campo.matches("input, select, textarea")) return;

        if (campo.value.trim() !== "") {
            campo.classList.remove("campo-erro");
        }
    });
}

function configurarFormularios() {
    const formularios = document.querySelectorAll("form");

    formularios.forEach((formulario) => {
        formulario.noValidate = true;
    });
}

function mostrarMensagem(formulario, texto) {
    let mensagem = formulario.querySelector(
        ".mensagem-validacao"
    );

    if (!mensagem) {
        mensagem = document.createElement("p");
        mensagem.className = "mensagem-validacao";
        formulario.prepend(mensagem);
    }

    mensagem.textContent = texto;
}
