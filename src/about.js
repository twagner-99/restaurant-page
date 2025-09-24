const createAboutPage = function() {
    const content = document.querySelector('#content');
    content.classList.remove('grid');
    
    while (content.lastChild) {
        content.removeChild(content.lastChild);
    }

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = 'About';

    const aboutInfo = document.createElement('p');
    aboutInfo.textContent = 'We serve the borgers. Come now';

    content.appendChild(aboutHeading);
    content.appendChild(aboutInfo);
};

export { createAboutPage };