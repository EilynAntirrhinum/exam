import { Item } from "./Item.js"

export class Shoes extends Item {
    constructor(size, dateOfBegin, garant, name, price, amount, nalog) {
        super(name, price, amount, nalog)
        this.size = size
        this.dateOfBegin = dateOfBegin
        this.garant = garant
    }

    get dateEndGarant() {
        return this.dateOfBegin + this.garant
    }

    toString() {
        return `
        ${super.toString()}
        Размер: ${this.size}
        Дата изготовления: ${this.dateOfBegin}
        Гарантия: ${this.garant}
        Дата окончания гарантии: ${this.dateEndGarant}`
    }

    createPattern(item, info, img) {
        return `
        ${super.createPattern(item, info, img)}
        <hr>
            <p>Гарантия: ${this.garant} лет</p>
            <p>Дата изготовления: ${this.dateOfBegin} год</p>
            <p>Дата окончания гарантии: ${this.dateEndGarant} год</p>
            </div>
        </div>`
    }
}