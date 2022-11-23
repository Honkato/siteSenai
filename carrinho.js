

// 0vzjsef4881l8
listaProdutos = []
produtosId = [
    {id:0, url:"./prods/produtoAM.html", nome: "Artorias, the AbyssWalker (Minimalist)", preco: 24.99},
    {id:1, url:"./prods/produtoP.html", nome: "The prisoner", preco: 24.99},
    {id:2, url:"./prods/produtoAT.html", nome: "Artorias, the AbyssWalker ", preco: 24.99},
    {id:3, url:"./prods/produtoJO.html", nome: "Jack-O Valentine", preco: 24.99},
    {id:4, url:"./prods/produtoA.html", nome: "Alice", preco: 24.99},
    {id:5, url:"./prods/produtoM.html", nome: "Maxyne, the Golden Fire Fist", preco: 24.99},
    {id:6, url:"./prods/produtoB.html", nome: "Baiken", preco: 24.99},
    {id:7, url:"./prods/produtoL.html", nome: "Lubella, The witch of decay", preco: 24.99}
]

const produto = document.getElementById("produto")
const preco = document.getElementById("preco")
const todos = document.getElementById("todos")

function adicionar(id){
    var prod = produtosId.find(x => x.id == id)
    produtoUrl = prod.url
    produtoNome = prod.nome
    produtoPreco = prod.preco
    addCarrinho(produtoNome, produtoPreco, produtoUrl)
    alert("PRODUTO ADICIONADO AO CARRINHO COM SUCESSO")
    
}

function addCarrinho(produtos, precos, url){
    var novoProduto = {nome: produtos, valor: precos, url: url}
    listaProdutos.push(novoProduto)
    console.log(listaProdutos)
    exibirProdutos()
}

function exibirProdutos(){
    var codHTML = '<h2>PRODUTOS</h2>';
    var i = 0;
    listaProdutos.forEach((prod) => {
        i += 1;
        console.log(i)
        if (todos != null){
        codHTML += `<div class="divisao" id="${i}"><a href="${prod.url}"><h1>${prod.nome}</h1></a><div class="flex">R$ ${(prod.valor)}<a href="javascript:void(0)" onclick="excluir(${i})"><div id="x"><div></div><div></div></div></a></div></div>`
        todos.innerHTML = codHTML
        }
    });
    salvarCarrinho()
}

function salvarCarrinho(){
    localStorage.setItem('loja', JSON.stringify(listaProdutos))
}

function obterCarrinho(){
    if (localStorage.getItem('loja') != null){
    listaProdutos = JSON.parse(localStorage.getItem('loja'))
    exibirProdutos()
    }
}
function excluir(i){
    /*
    todos.innerHTML = ""
    listaProdutos = []
    */
   ex = document.getElementById(i)
   ex.innerHTML = ''
   listaProdutos.splice(i-1,1)
   salvarCarrinho()
   obterCarrinho()
}

if (document.getElementById('mostrar') != null){
    document.getElementById('mostrar').addEventListener('click', esconder)
}


function esconder(){
    todos.classList.toggle('esc')
    
}
obterCarrinho();