import generateHomePage  from "./home"
import generateMenuPage from "./menu"
import generateAboutPage from "./about"

import "./style.css"

generateHomePage()

const homeButton = document.getElementById('home-button')

homeButton.addEventListener('click', () => {
    removeContent()
    generateHomePage()
})

const menuButton = document.getElementById('menu-button')

menuButton.addEventListener('click', () => {
    removeContent()
    generateMenuPage()
})

const aboutButton = document.getElementById('about-button')

aboutButton.addEventListener('click', () => {
    removeContent()
    generateAboutPage()
})

const removeContent = () => {
    const content = document.getElementById('content')
    if (content){
        content.innerHTML = ""
    }
}