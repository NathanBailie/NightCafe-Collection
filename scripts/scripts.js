"use strict"

let images = document.querySelectorAll('.item');

for (let image of images) {
    image.addEventListener('click', () => {
        resetClassesApartFromTarget(images, image.id);

        if (image.classList.contains('active')) {
            resetClasses(images)
        } else {
            image.classList.remove('filtered');
            image.classList.add('active');
            inctivateItems(images, image.id);
        };
    });
};

function resetClassesApartFromTarget(array, id) {
    for (let item of array) {
        if (item.id !== id) {
            item.classList.remove('active');
            item.classList.remove('filtered');
        };
    };
}

function resetClasses(array) {
    for (let item of array) {
        item.classList.remove('active');
        item.classList.remove('filtered');
    };
}

function inctivateItems(array, id) {
    for (let item of array) {
        if (item.id !== id) {
            item.classList.add('filtered');
        }
    }
}
