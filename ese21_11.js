
let listaProdotti = [
    {
        id: 1,
        nome: "Iphone",
        prezzo: 1000,
    },
    {
        id: 2,
        nome: "Mac",
        prezzo: 3000,
    },

    {
        id: 3,
        nome: "Scrivania",
        prezzo: 200,
    },
    {
        id: 4,
        nome: "Lampadari",
        prezzo: 600,
    },
]

let listaOrdinata = listaProdotti.sort((a, b) => (a.nome - b.nome))

listaOrdinata.forEach(function StampaElemento(elemento) {
    console.log(elemento.nome);
});

let listaOrdinata2 = listaProdotti.sort((a, b) => (a.prezzo - b.prezzo))

listaOrdinata.forEach(function StampaElemento(elemento) {
    console.log(elemento.prezzo);
});

function filtraNellaLista(listaProdotti) {

    let listaFiltrata = []

    for (let i = 0; i < listaProdotti.length; i++) {

        if (listaProdotti[i].prezzo>250) {
            listaFiltrata.push(listaProdotti[i])
        }
    }
    return console.log(listaFiltrata)
}


filtraNellaLista(listaProdotti)


let listaFiltrata3 = listaProdotti.filter(prodotti => prodotti.prezzo > 250)

console.log(listaFiltrata3);


 let url = "https://sitodiecommerce.com/paginaDelProdotto?idProdotto=12312312312&userId=314123&time=8999"

 let urlSplit = url.split("?")

 let parametri = urlSplit[1].split("&")

 console.log(parametri)










