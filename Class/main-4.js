// import { Article } from "./js/Article.js"
// import {SubArticle} from "./js/SubArticle.js"
import {Article} from "./js/Article-function.js"
import {SubArticle} from "./js/SubArticle-function.js"

let article_1 = new Article("Main Article", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore.", new Date(2020, 1, 1), "20px", "black", "lightgray", "3px solid")

let article_2 = new SubArticle("SubArticle 1", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis.", new Date(2020, 8, 12), "14px", "indigo", "thistle", "3px double indigo", "img/kun1.jpg", "")

let article_3 = new SubArticle("SubArticle 2", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis dolores quis omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita odit vitae molestiae dolore soluta omnis quasi quidem deleniti. Magni ipsam facilis.", new Date(2020, 10, 11), "14px", "midnightblue", "cornflowerblue", "3px double midnightblue", "", "https://open.spotify.com/playlist/3ZUf80LWYu1bMSUuUbYxum?si=30eb9a98dbde41a8")

container.insertAdjacentHTML("beforeend", article_1.createPattern("item"))

container.insertAdjacentHTML("beforeend", article_2.createPattern("item", "", "img/kun1.jpg"))

container.insertAdjacentHTML("beforeend", article_3.createPattern("item", "Ссылка", ""))

console.table(article_1)
console.table(article_2)