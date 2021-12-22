import { Item } from "./Item.js"

export class Cake extends Item {
    constructor(weight, kkal, dateOfBegin, timeStorage, name, price, amount, nalog) {
        super(name, price, amount, nalog)
        this.weight = weight
        this.kkal = kkal
        this.dateOfBegin = dateOfBegin
        this.timeStorage = timeStorage
    }

    get dateBefore() {
        let temp = new Date()
        temp.setDate(this.dateOfBegin.getDate() + this.timeStorage)
        return temp.toLocaleDateString()
    }

    toString() {
        return `
        ${super.toString()}
        Вес: ${this.weight}
        Каллории: ${this.kkal}
        Дата изготовления: ${this.dateOfBegin}
        Дата до истечения срока хранения: ${this.dateBefore}
        Срок хранения: ${this.timeStorage}`
    }

    createPattern(item, info, img) {
        return `
        ${super.createPattern(item, info, img)}
            <hr>
            <p>Вес: ${this.weight} гр.</p>
            <p>Каллории: ${this.kkal} ккал.</p>
            <p>Дата изготовления: ${this.dateOfBegin.toLocaleDateString()}</p>
            <p>Дата до истечения срока хранения: ${this.dateBefore}</p>
            <p>Срок хранения: ${this.timeStorage} дней</p>
            </div>
        </div>`
    }
}