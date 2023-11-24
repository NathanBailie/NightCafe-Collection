"use strict"

let images = document.querySelectorAll('.item');

for (let image of images) {
    image.addEventListener('click', () => {
        resetClassesFromTarget(images, image.id);
        addInactiveClass(images, image.id);

        if (image.classList.contains('active')) {
            resetClasses(images)
        } else {
            image.classList.add('active');
        };
    });
};

function resetClassesFromTarget(array, id) {
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

function addInactiveClass(array, id) {
    for (let item of array) {
        if (item.id !== id) {
            item.classList.add('filtered');
        }
    }
}

function resetInactiveClass(array, id) {
    for (let item of array) {
        if (item.id !== id) {
            item.classList.remove('filtered');
        }
    }
}