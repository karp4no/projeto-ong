import { salvarCadastro } from "./storage.js";

export function iniciarValidacao() {
    configurarFormularios();
    configurarMascaras();
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
            if (!campo.checkValidity()) {
                campo.classList.add("campo-erro");
                formularioValido = false;
            } else {
                campo.classList.remove("campo-erro");
            }
        });

        if (!formularioValido) {
            mostrarMensagem(
                formulario,
                "Verifique os campos obrigatórios e os formatos informados."
            );
            return;
        }

        salvarCadastro(formulario);

        mostrarMensagem(
            formulario,
            "Cadastro preenchido corretamente!"
        );

        formulario.reset();
    });

    document.addEventListener("input", (evento) => {
        const campo = evento.target;

        if (!campo.matches("input, select, textarea")) return;

        if (campo.checkValidity()) {
            campo.classList.remove("campo-erro");
        }
    });
}

function configurarMascaras() {
    const cpf = document.getElementById("cpf");
    const telefone = document.getElementById("telefone");
    const cep = document.getElementById("cep");

    if (cpf) {
        cpf.addEventListener("input", () => {
            let valor = cpf.value.replace(/\D/g, "");

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            if (valor.length > 9) {
                valor =
                    valor.slice(0, 3) + "." +
                    valor.slice(3, 6) + "." +
                    valor.slice(6, 9) + "-" +
                    valor.slice(9);
            } else if (valor.length > 6) {
                valor =
                    valor.slice(0, 3) + "." +
                    valor.slice(3, 6) + "." +
                    valor.slice(6);
            } else if (valor.length > 3) {
                valor =
                    valor.slice(0, 3) + "." +
                    valor.slice(3);
            }

            cpf.value = valor;
        });
    }

    if (telefone) {
        telefone.addEventListener("input", () => {
            let valor = telefone.value.replace(/\D/g, "");

            if (valor.length > 11) {
                valor = valor.slice(0, 11);
            }

            if (valor.length > 2) {
                valor = "(" + valor.slice(0, 2) + ") " + valor.slice(2);
            }

            if (valor.length > 10) {
                valor = valor.slice(0, 10) + "-" + valor.slice(10);
            }

            telefone.value = valor;
        });
    }

    if (cep) {
        cep.addEventListener("input", () => {
            let valor = cep.value.replace(/\D/g, "");

            if (valor.length > 8) {
                valor = valor.slice(0, 8);
            }

            if (valor.length > 5) {
                valor = valor.slice(0, 5) + "-" + valor.slice(5);
            }

            cep.value = valor;
        });
    }
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
