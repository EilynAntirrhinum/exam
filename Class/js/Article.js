export class Article {
    constructor(name, text, datePubl, fontSize, fontColor, bgColor, border) {
        this.name = name
        this.text = text
        this.datePubl = datePubl
        this.fontSize = fontSize
        this.fontColor = fontColor
        this.bgColor = bgColor
        this.border = border
    }

    toString() {
        return `Заголовок: ${this.name}
        Основной текст: ${this.text}
        Дата публикации: ${this.datePubl}
        Размер основного текста: ${this.fontSize}
        Цвет шрифта заголовка: ${this.fontColor}
        Цвет фона: ${this.bgColor}
        Настройки рамки: ${this.border}`
    }

    createPattern(item) {
        return `
        <div class="${item}" style="font-size: ${this.fontSize}; background-color: ${this.bgColor}; border: ${this.border}">
            <h3 style="color: ${this.fontColor};">${this.name}</h3>
            <div>
                <p>${this.text}</p>
                <sub>${this.datePubl.toLocaleDateString()}</sub>
            </div>
        </div>`
    }
}