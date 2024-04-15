class Products {
    constructor(price, name, imageUrl){
        this.price = price,
        this.name = name,
        this.imageUrl = imageUrl
    }

    createHtml(){
        return`
            <div class="product-card">
            <div class="Products">
                <div class="product-image">
                    <a href="../html/buy.html"><img src="${this.imageUrl}" alt=""/></a>
                </div>
                <div class="details-merch">
                <div class="number">
                    <span><b>${this.price}</b></span>
                </div>
                    <p class="text">
                        ${this.name}
                    </p>
                    <h5>Most Popular in Jerseys</h5>
                    <h5>American Express Jersey Assurance</h5>
                </div>
                </div>
            </div>
        `
    }
}