const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: 'no-img.svg',
    imageDescription: "nao tem imagem o produto",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "product_2.svg",
    imageDescription: "muitas pencas de bananas amarelas ",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "product_3.svg",
    imageDescription: "varios mamao papaia verde com amarelo",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "product_4.svg",
    imageDescription: "maca verde ainda nao colhida no pe",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: 'no-img.svg',
    imageDescription: "produto sem imagem",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "product_6.svg",
    imageDescription: "vinho tinto em uma mesa de caping com uma currasqueira de mesa",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: 'no-img.svg',
    imageDescription: "produto sem imagem",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "product_8.svg",
    imageDescription: "varios cocos verdes ",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: 'no-img.svg',
    imageDescription: "",
  },
];

let frutas = [];

let bebidas = [];

let higiene = [];

function definindoSetores(lista){
  for(let i = 0; i<lista.length; i++){
    let produtoAtual = lista[i]
    if(produtoAtual.category === "Frutas"){
      frutas.push(produtoAtual)
    }
    else if(produtoAtual.category === "Bebidas"){
      bebidas.push(produtoAtual)
    }
    else if(produtoAtual.category === "Higiene"){
      higiene.push(produtoAtual)
    }
  }
  return `separacao completa`
}

definindoSetores(products)

const setorDeFrutas = document.querySelector('.fruits-sector')
console.log(setorDeFrutas)
const setorDeBebidas = document.querySelector('.drinks-sector')
console.log(setorDeBebidas)
const setorDeHigiene = document.querySelector('.hygiene-sector')
console.log(setorDeHigiene)

function listingProducts(lista, local){
  for(let i = 0; i < lista.length; i++){
    let itemAtual = lista[i]

    let newTemplate = criarTemplate(itemAtual)
    console.log(newTemplate)

    local.append(newTemplate)
  }
}
listingProducts(frutas, setorDeFrutas)
listingProducts(bebidas, setorDeBebidas)
listingProducts(higiene, setorDeHigiene)

function criarTemplate(itemAtual){
  let nome     = itemAtual.title;
  let preco    = itemAtual.price
  let category = itemAtual.category
  let imagem   = itemAtual.image
  let desc     = itemAtual.imageDescription

  let tagLi    = document.createElement('li')
  let tagImg   = document.createElement('img')
  let tagMain  = document.createElement('main')
  let tagTitle = document.createElement('h1')
  let tagCat   = document.createElement('h5')
  let tagPrice = document.createElement('strong')

  tagLi.classList.add('product')
  tagImg.classList.add('product-img')
  tagMain.classList.add('product-main')
  tagTitle.classList.add('product-title')
  tagCat.classList.add('product-category')
  tagPrice.classList.add('product-price')

  tagImg.src = `./img/products/${imagem}`
  tagImg.alt = desc
  tagTitle.innerText = nome
  tagCat.innerText = category
  tagPrice.innerText = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

  tagMain.append(tagTitle, tagCat, tagPrice)

  tagLi.append(tagImg, tagMain)
  
  return tagLi
}

/*
{
  title: "Uva Crimson",
  price: 8.99,
  category: "Frutas",
  image: undefined,
  imageDescription: "",
},
<li class="product">
  <img
    src="./img/products/no-img.svg"
    alt=""
    title=""
    class="product-img"
  />
  <main class="product-main">
    <h1 class="product-title">Uva Crimson</h1>
    <h5 class="product-category">Frutas</h5>
    <strong class="product-price">R$ 8.99</strong>
  </main>
</li>

*/

