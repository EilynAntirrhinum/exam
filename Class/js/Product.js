class Product {

    static maker = "Canada"

    constructor(name, amount, price, img) {
        this.name = name
        this.amount = amount
        this.price = price
        this.img = img
    }

    toString() {
        return `Товар ${this.name}
                Производитель: ${Product.maker}
                Количество на складе: ${this.amount} шт.
                Суммарная стоимость: ${this.price} руб.
                ${this.img}
                Итоговая сумма: ${this.getSum()} руб.
                ${this.withNDS(this.price)}`
    }

    getSum() {
        return this.price * this.amount
    }

    set amount(value) {
        this._amount = value < 0 ? -value : value
    }

    get amount() {
        return this._amount
    }

    withNDS(data, nalog) {
        return `Цена с учётом НДС будет составлять ${data + (data * nalog)} рублей.`
    }

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

class Note extends Product {
    constructor(name, amount, price, img, color, pages) {
        super(name, amount, price, img)
        this.color = color
        this.pages = pages
    }

    getSum() {
        return super.getSum() * 0.8
    }
    
    toString() {
        return `
        ${super.toString()}
        Цвет: ${this.color}
        Количество страниц: ${this.pages}`
    }
}