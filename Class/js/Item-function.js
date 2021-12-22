export function Item(name, amount = 0, price) {
    this.name = name
    this.amount = amount
    this.price = price
}

const ItemMethods = {
    toString() {
        return `Товар ${this.name}
                Производитель: ${Item.maker}
                Количество на складе: ${this.amount} шт.
                Суммарная стоимость: ${this.price} руб.
                ${this.img}
                Итоговая сумма: ${this.getSum()} руб.
                ${this.withNDS(this.price)}`
    },

    getSum() {
        return ~~(this.price * this.amount)
    },

    addImage(img) {
        return `<img src="${img}"></img>`
    },

    withNDS(data, nalog) {
        return `Цена с учётом НДС будет составлять ${~~(data + (data * nalog))} рублей.`
    },

    createPattern(item, info, img) {
        return `
        <div class="${item}">
            <h3>${this.name}</h3>
            ${this.addImage(img)}
            <div class="${info}">
               <p>Производитель: ${Item.maker}</p>
               <p>Количество на складе: ${this.amount} шт.</p>
               <p>Суммарная стоимость: ${this.price} руб.</p>
               <p>Итоговая сумма: ${this.getSum()} руб.</p>
               <strong>${this.withNDS(this.price, 0.2)}</strong>
            </div>
        </div>`
    }
}

Object.assign(Item.prototype, ItemMethods)

Object.defineProperty(Item.prototype, "amount", {
    set(value) {
        this._amount = value < 0 ? -value : value
    },

    get() {
        return this._amount
    },
})

Item.maker = "SM Ent."

export function Cake(name, amount, price, weight, kkal, dateOfBegin, timeStorage) {
    Item.call(this, name, amount, price)
    this.weight = weight
    this.kkal = kkal
    this.dateOfBegin = dateOfBegin
    this.timeStorage = timeStorage
}

const CakeMethods = {
    addImage(img) {
        return `<img src="${img}" style="width: 200px; height: 200px; object-fit: cover;"></img>`
    },

    getSum() {
        return ~~(ItemMethods.getSum.call(this) * 0.8)
    },

    toString() {
        return `
        ${ItemMethods.toString.call(this)}
        Вес: ${this.weight}
        Каллории: ${this.kkal}
        Дата изготовления: ${this.dateOfBegin}
        Дата до истечения срока хранения: ${this.dateBefore}
        Срок хранения: ${this.timeStorage}`
    },

    createPattern(item, info, img) {
        return `
        <div class="${item}">
            <h3>${this.name}</h3>
            ${this.addImage(img)}
            <div class="${info}">
               <p>Вес: ${this.weight} гр.</p>
               <p>Каллории: ${this.kkal} ккал.</p>
               <p>Дата изготовления: ${this.dateOfBegin.toLocaleDateString()}</p>
               <p>Дата до истечения срока хранения: ${this.dateBefore}</p>
               <p>Срок хранения: ${this.timeStorage} дней</p>
               <p>Производитель: ${Item.maker}</p>
               <p>Количество на складе: ${this.amount} шт.</p>
               <p>Суммарная стоимость: ${this.price} руб.</p>
               <p>Итоговая сумма: ${this.getSum()} руб.</p>
               <strong>${this.withNDS(this.price, 0.2)}</strong>
            </div>
        </div>`
    }
}

Object.assign(Cake.prototype, CakeMethods)

Object.defineProperty(Cake.prototype, "dateBefore", {
    get() {
        let temp = new Date()
        temp.setDate(this.dateOfBegin.getDay() + this.timeStorage)
        return temp.toLocaleDateString()
    }
})

Object.setPrototypeOf(Cake.prototype, Item.prototype)

export function Shoes(name, amount, price, size, dateOfBegin, garant) {
    Item.call(this, name, amount, price)
    this.size = size
    this.dateOfBegin = dateOfBegin
    this.garant = garant
}

const ShoesMethods = {
    addImage(img) {
        return `<img src="${img}" style="width: 100px; height: 100px; object-fit: cover;"></img>`
    },

    getSum() {
        return ~~(ItemMethods.getSum.call(this) * 0.8)
    },
    
    toString() {
        return `
        ${ItemMethods.toString.call(this)}
        Размер: ${this.size}
        Дата изготовления: ${this.dateOfBegin}
        Гарантия: ${this.garant}
        Дата окончания гарантии: ${this.dateEndGarant}`
    },

    createPattern(item, info, img) {
        return `
        <div class="${item}">
            <h3>${this.name}</h3>
            ${this.addImage(img)}
            <div class="${info}">
               <p>Гарантия: ${this.garant} лет</p>
               <p>Дата изготовления: ${this.dateOfBegin} год</p>
               <p>Дата окончания гарантии: ${this.dateEndGarant} год</p>
               <p>Производитель: ${Item.maker}</p>
               <p>Количество на складе: ${this.amount} шт.</p>
               <p>Суммарная стоимость: ${this.price} руб.</p>
               <p>Итоговая сумма: ${this.getSum()} руб.</p>
               <strong>${this.withNDS(this.price, 0.2)}</strong>
            </div>
        </div>`
    }
}

Object.assign(Shoes.prototype, ShoesMethods)

Object.defineProperty(Shoes.prototype, "dateEndGarant", {
    get() {
        return this.dateOfBegin + this.garant
    }
})

Object.setPrototypeOf(Shoes.prototype, Item.prototype)