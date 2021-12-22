export class Item {

    static maker = "SM Ent."

    constructor(name, price, amount = 0, nalog = 0.2) {
        this.name = name
        this.amount = amount
        this.price = price
        this.nalog = nalog
    }

    get sum() {
        return ~~(this.price * this.amount)
    }

    set amount(value) {
        this._amount = value < 0 ? -value : value
    }

    get amount() {
        return this._amount
    }

    toString() {
        return `Товар: ${this.name}
                Производитель: ${Item.maker}
                Количество на складе: ${this.amount} шт.
                Суммарная стоимость: ${this.price} руб.
                ${this.img}
                Итоговая сумма: ${this.sum} руб.
                Налог: ${this.nalog}
                Цена с учётом НДС: ${this.withNDS(this.price)}`
    }

    addImage(img) {
        return `<img src="${img}"></img>`
    }

    withNDS(data) {
        return data + (data * this.nalog)
    }

    createPattern(item, info, img) {
        return `
        <div class="${item}">
            <h3>${this.name}</h3>
            ${this.addImage(img)}
            <div class="${info}">
               <p>Производитель: ${Item.maker}</p>
               <p>Количество на складе: ${this.amount} шт.</p>
               <p>Суммарная стоимость: ${this.price} руб.</p>
               <p>Итоговая сумма: ${this.sum} руб.</p>
               <strong>Цена с учётом НДС: ${this.withNDS(this.price)} руб.</strong>`
    }
}