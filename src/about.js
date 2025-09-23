const createAboutPage = function() {
    location.reload();

    const content = document.querySelector('#content');

    const aboutHeading = document.createElement('h1');
    aboutHeading.textContent = 'About';

    const aboutInfo = document.createElement('p');
    aboutInfo.textContent = 'We serve the borgers. Come now';

    content.appendChild(aboutHeading);
    content.appendChild(aboutInfo);
};

export { createAboutPage };