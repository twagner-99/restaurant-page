import burgerImg from './images/burger.jpg';

const createHomepage = function() {
    const content = document.querySelector('#content');
    
    const restaurantInfo = document.createElement('div');
    restaurantInfo.id = 'restaurant-info';
    
    const title = document.createElement('h1');
    title.textContent = 'Borgers';
    
    const tagline = document.createElement('p');
    tagline.textContent = 'Eat so many borgs - be so happy';
    
    const burgerImgElement = document.createElement('img');
    burgerImgElement.id = 'burger-img';
    burgerImgElement.src = burgerImg;
    burgerImgElement.alt = 'Cheese Burger';
    
    restaurantInfo.appendChild(title);
    restaurantInfo.appendChild(tagline);
    content.appendChild(restaurantInfo);
    content.appendChild(burgerImgElement);
};

export { createHomepage };
