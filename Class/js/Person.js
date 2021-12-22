export class Person {

    birth = new Date(1999, 8, 8)

    constructor(name = "xiao", surname = "dejun", second_name = "Bella") {
        this.name = name
        this.surname = surname
        this.second_name = second_name
    }

    getNames() {
        return `${this.getUpperName(this.surname) + this.getLowerName(this.surname)} ${this.getInitials(this.name)}. ${this.getInitials(this.second_name)}.`
    }

    getUpperName(data) {
        return data.substr(0, 1).toUpperCase()
    }

    getLowerName(data) {
        return data.substr(1, data.length).toLowerCase()
    }

    getInitials(data) {
        return data.substr(0, 1).toUpperCase()
    }

    getAge_1(date) {
        let nowDate = new Date()
        let difference = nowDate - date
        let age = ~~(difference / 31557600000)

        return age
    }

    getAge_2(date) {
        let nowDate = new Date()
        let age = nowDate.getUTCFullYear() - date.getFullYear() + 1

        if (nowDate > date) { age-- }

        return age
    }

    toString() {
        return `по имени ${this.getNames()} (${this.getAge_2(this.birth)} лет)`
    }

}