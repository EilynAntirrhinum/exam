import { Article } from "./Article-function.js";

export function SubArticle(name, text, datePubl, fontSize, fontColor, bgColor, border, img, link) {
    Article.call(this, name, text, datePubl, fontSize, fontColor, bgColor, border)
    this.img = img
    this.link = link
}

const SubArticleMethods = {
    toString() {
        return `
        Заголовок: ${this.name}
        Основной текст: ${this.text}
        Дата публикации: ${this.datePubl}
        Размер основного текста: ${this.fontSize}
        Цвет шрифта заголовка: ${this.fontColor}
        Цвет фона: ${this.bgColor}
        Настройки рамки: ${this.border}
        Картинка: ${this.img}
        Ссылка: ${this.link}`
    },

    createPattern(item, link, img) {
        return `
        <div class="${item}" style="background-color: ${this.bgColor}; border: ${this.border}">
            <h3 style="color: ${this.fontColor};">${this.name}</h3>
            <div font-size: ${this.fontSize};>
                ${this.addImg(img)}
                <p>${this.text}</p>
                <span><a href="${this.link}">${link}</a></span>
                <p><sub>${this.datePubl.toLocaleDateString()}</sub></p>
            </div>
        </div>`
    },

    addImg(img) {
        return img == "" ? "" : `<img src="${img}">`
    }
}

Object.assign(SubArticle.prototype, SubArticleMethods)

Object.setPrototypeOf(SubArticle.prototype, Article.prototype)