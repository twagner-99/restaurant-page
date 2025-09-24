const createMenuPage = function () {
    const content = document.querySelector('#content');
    
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }

    const menuHeading = document.createElement('h1');
    menuHeading.textContent = "Menu";

    const burgerHeadingBeef = document.createElement('h2');
    burgerHeadingBeef.textContent = 'Beef Borger'


    const burgerHeadingKangaroo = document.createElement('h2');
    burgerHeadingKangaroo.textContent = 'Kangaroo Borger';


    const burgerHeadingMackerel = document.createElement('h2');
    burgerHeadingMackerel.textContent = 'Mackerel Borger';

    content.appendChild(menuHeading);
    content.appendChild(burgerHeadingBeef);
    content.appendChild(burgerHeadingKangaroo);
    content.appendChild(burgerHeadingMackerel);
};

export { createMenuPage };