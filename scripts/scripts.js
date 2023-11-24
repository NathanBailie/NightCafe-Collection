"use strict"

let images = document.querySelectorAll('.item');

for (let image of images) {
    image.addEventListener('click', () => {
        resetClasses(images, image.id)

        if (image.classList.contains('active')) {
            image.classList.remove('active');
        } else {
            image.classList.add('active');
        };
    });
};

function resetClasses(array, id) {
    for (let item of array) {
        if (item.id !== id) {
            item.classList.remove('active');
        };
    };
}