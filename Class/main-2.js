//import { Product } from "./js/Product.js";

const products = [
    new Product("Moon and Sun", 3, 358, "img/moon_sun.png"), 
    new Product("Jung Sungchan", 5, 244, "img/sungchan.jpg"), 
    new Product("Chenji", 8, 578, "img/chenji.jpg"), 
    new Product("Qian Kun", 3, 1478, "img/kun_bella.jpg"), 
    new Product("Taeil Mullet", 18, 768, "img/taeil.jpg"), 
    new Product("Forest Taeil", 11, 942, "img/taeil_f.jpg")
]

Product.maker = "Toronto"

products.forEach(item => {
    container.insertAdjacentHTML("beforeend",item.createPattern("product", "info"))
})

console.table(products)