function Product(name, amount, price, img) {
    this.name = name
    this.amount = amount
    this.price = price
    this.img = img
}

const ProductMethods = {
    toString() {
        return `Товар ${this.name}
                Производитель: ${Product.maker}
                Количество на складе: ${this.amount} шт.
                Суммарная стоимость: ${this.price} руб.
                ${this.img}
                Итоговая сумма: ${this.getsum()} руб.
                ${this.withNDS(this.price)}`
    },

    getSum() {
        return this.price * this.amount
    },

    withNDS(data, nalog) {
        return `Цена с учётом НДС будет составлять ${data + (data * nalog)} рублей.`
    },

    createPattern(product, info) {
        return `
        <div class="${product}">
            <h3>${this.name}</h3>
            <img src="${this.img}">
            <div class="${info}">
               <p>Производитель: ${Product.maker}</p>
               <p>Количество на складе: ${this.amount} шт.</p>
               <p>Суммарная стоимость: ${this.price} руб.</p>
               <p>Итоговая сумма: ${this.getSum()} руб.</p>
               <strong>${this.withNDS(this.price, 0.2)}</strong>
            </div>
        </div>`
    }
}

Object.assign(Product.prototype, ProductMethods)

Object.defineProperty(Product.prototype, "amount", {
    get() {
        return this._amount
    },
    set(value) {
        this._amount = value < 0 ? -value : value
    }
})

Product.maker = "Canada"

const NoteMethods = {
    getSum() {
        return NoteMethods.getSum.call(this) * 0.8
    },
    
    toString() {
        return `
        ${NoteMethods.toString.call(this)}
        Цвет: ${this.color}
        Количество страниц: ${this.pages}`
    }
}

function Note(name, amount, price, img, color, pages) {
    Product.call(this, name, amount, price, img)
    this.color = color
    this.pages = pages
}

Object.assign(Note.prototype, NoteMethods)

Object.setPrototypeOf(Note.prototype, Product.prototype)