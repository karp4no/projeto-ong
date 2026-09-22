import { iniciarNavegacao } from "./navegacao.js";
import { iniciarValidacao } from "./validacao.js";
import { iniciarStorage } from "./storage.js";

document.addEventListener("DOMContentLoaded", () => {
    iniciarNavegacao();
    iniciarValidacao();
    iniciarStorage();
});
