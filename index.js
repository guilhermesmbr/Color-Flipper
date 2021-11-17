const lista_cores = ["magenta", "red", "blue", "#FA1934", "green"]
const botao = document.querySelector("#botao_cor")
const input = document.querySelector("#input_cor")
const span = document.querySelector(".cor_select")

function numeroRandom() {
    return Math.floor(Math.random() * lista_cores.length)
}

function quandoClicar() {
    let cor;
    if (input.value) {
        cor = input.value
    } else {
        cor = lista_cores[numeroRandom()]
    }

    document.body.style.backgroundColor = cor
    span.textContent = cor
}

botao.addEventListener("click", quandoClicar)

