import restaurantImage from "../assets/images/restaurant.jpg"

 const generateHomePage = () => {
    const content = document.getElementById('content')

    const title = document.createElement('h1');
    title.textContent = "Welcome to the best restaurant in town!"
    content.appendChild(title);

    
    const simpleDescription = document.createElement('p');
    simpleDescription.textContent = "Please check the menu and find foods that you can enjoy!"
    content.appendChild(simpleDescription)
    
    const image = document.createElement('img');
    image.src = restaurantImage
    content.appendChild(image)

}

export default generateHomePage