let listOfProducts = [
    
]

function createAllCardsProducts(){
    const results = shopData.results
    for(let i = 0; i < results.length; i++){
        const obj = results[i]
        const price = `$ ${obj.price}`
        const name = obj.title
        const imageUrl = obj.images
        const product = new Products(price, name, imageUrl)
        listOfProducts.push(product)
    }
}

function fillScreenWithProducts(){
    const container = document.getElementById("cards");
    for(let i = 0; i < listOfProducts.length; i++){
        const product = listOfProducts[i]
        container.innerHTML += product.createHtml()
    }
}

createAllCardsProducts()
fillScreenWithProducts()