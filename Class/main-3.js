// import {Item, Cake, Shoes} from "./js/Item.js"
import { Cake } from "./js/Cake.js"
import { Item } from "./js/Item.js"
import { Shoes } from "./js/Shoes.js"

const items = [
    new Item("Moon and Sun", 358, 3),
    new Item("Jung Sungchan", 244, 5),
    new Item("Chenji", 578, 8),
    new Item("Qian Kun", 1478, 3),
    new Item("Taeil Mullet", 798, 13),
    new Item("Qian Kun Snowy", 942, 11)
]

let cake = new Cake(540, 720, new Date(2021, 4, 5), 36, "Qian Kun Cake", 1099, 3)

let shoes = new Shoes(37, 1997, 5, "Dong Sicheng Shoes", 1499, 7, 0.5)

const images = [
    "img/moon_sun.png",
    "img/sungchan.jpg",
    "img/chenji.jpg",
    "img/kun1.jpg",
    "img/taeil.jpg",
    "img/kun2.jpg"
]

items.forEach((item, index) => {
    container.insertAdjacentHTML("beforeend", item.createPattern("item", "info", images[index]))
})

container.insertAdjacentHTML("beforeend", cake.createPattern("item", "info", "img/kun3.jpg"))

container.insertAdjacentHTML("beforeend", shoes.createPattern("item", "info", "img/winwin_snowy.jpg"))
