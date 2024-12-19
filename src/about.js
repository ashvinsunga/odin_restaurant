import restaurantContact from "../assets/images/contact.jpg"

const generateAboutPage = () => {
    const content = document.getElementById('content')

    const title = document.createElement('h1');
    title.textContent = "Please refer to our contact below"
    content.appendChild(title);

    
    const simpleDescription = document.createElement('p');
    simpleDescription.textContent = "Please don't hesitate to call US!"
    content.appendChild(simpleDescription)
    
    const image = document.createElement('img');
    image.src = restaurantContact
    content.appendChild(image)
}


export default generateAboutPage