const moeda1 = document.querySelector(".currency1")
const moeda2 = document.querySelector(".sele1")
const botao = document.querySelector(".but-convert")

function convert() {
    const input = document.querySelector(".inp-sect").value
    const value1 = document.querySelector(".value1")
    const result = document.querySelector(".result")

    const dolar = 5.7
    const euro = 6.21
    const libra = 7.33
    const real = 1

    const dolar1 = 1
    const euro1 = 0.91
    const libra1 = 0.77
    const real1 = 5.75

    if (moeda1.value == "R$ Real") {

        if (moeda2.value == "US$ Dolar") {
            result.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input / dolar)
        }

        if (moeda2.value == "€ Euro") {
            result.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input / euro)
        }

        if (moeda2.value == "£ Libra") {
            result.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(input / libra)
        }
        if (moeda2.value == "R$ Real") {
            result.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input / real)
        }

        if (moeda1.value == "R$ Real") {
            value1.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input)
        }
    }

    if (moeda1.value == "US$ Dolar") {

        if (moeda2.value == "US$ Dolar") {
            result.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input / dolar1)
        }

        if (moeda2.value == "€ Euro") {
            result.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(input * euro1)
        }

        if (moeda2.value == "£ Libra") {
            result.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(input * libra1)
        }
        if (moeda2.value == "R$ Real") {
            result.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(input * real1)
        }

        if (moeda1.value == "US$ Dolar") {
            value1.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(input)
        }


    }
}

function change() {
    const foto = document.querySelector(".foto")
    const nome = document.querySelector(".nome")

    if (moeda1.value == "R$ Real") {
        foto.src = "assets/brasil 2.png"
        nome.innerHTML = "R$ Real"
    }

    if (moeda1.value == "US$ Dolar") {
        foto.src = "./assets/estados-unidos (1) 1.png"
        nome.innerHTML = "US$ Dolar"
    }

    const img = document.querySelector(".currencyimg")
    const name = document.querySelector(".currencyName")

    if (moeda2.value == "R$ Real") {
        img.src = "assets/brasil 2.png"
        name.innerHTML = "R$ Real"
    }

    if (moeda2.value == "US$ Dolar") {
        img.src = "./assets/estados-unidos (1) 1.png"
        name.innerHTML = "US$ Dolar"
    }

    if (moeda2.value == "€ Euro") {
        img.src = "./assets/Design sem nome 3.png"
        name.innerHTML = "€ Euro"
    }

    if (moeda2.value == "£ Libra") {
        name.innerHTML = "£ Libra"
        img.src = "./assets/libra 1.png"
    }

    convert()
}


botao.addEventListener("click", convert)
moeda2.addEventListener("change", change)
moeda1.addEventListener("change", change)