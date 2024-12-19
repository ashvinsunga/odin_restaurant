import restaurantMenu from "../assets/images/menu.jpg"

 const generateMenuPage = () => {
    const content = document.getElementById('content')

    const title = document.createElement('h1');
    title.textContent = "Here's our menu"
    content.appendChild(title);

    
    const simpleDescription = document.createElement('p');
    simpleDescription.textContent = "Here are the list of our exquisite!"
    content.appendChild(simpleDescription)
    
    const image = document.createElement('img');
    image.src = restaurantMenu
    content.appendChild(image)
}

export default generateMenuPage