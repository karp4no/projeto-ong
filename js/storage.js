const CHAVE_CADASTROS = "ong_cadastros";

export function iniciarStorage() {
    console.log("Storage carregado");
}

export function salvarCadastro(formulario) {
    const dados = Object.fromEntries(new FormData(formulario).entries());

    const cadastros = JSON.parse(
        localStorage.getItem(CHAVE_CADASTROS) || "[]"
    );

    cadastros.push({
        ...dados,
        dataCadastro: new Date().toISOString()
    });

    localStorage.setItem(
        CHAVE_CADASTROS,
        JSON.stringify(cadastros)
    );
}

export function obterCadastros() {
    return JSON.parse(
        localStorage.getItem(CHAVE_CADASTROS) || "[]"
    );
}
