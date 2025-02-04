const images = [
    "image/plan_house_two.png",
    "image/three_house.png",
];

let currentIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const imageDisplay = document.getElementById('imageDisplay');

function updateImage(newIndex) {
    imageDisplay.classList.add('fade-out');

    setTimeout(() => {
        imageDisplay.src = images[newIndex];

        imageDisplay.classList.remove('fade-out');
        imageDisplay.classList.add('fade-in');

        setTimeout(() => {
            imageDisplay.classList.remove('fade-in');
        }, 300);
    }, 300); // Должно совпадать с transition в CSS
}

prevButton.addEventListener('click', function () {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
});

nextButton.addEventListener('click', function () {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
});





// ---------------- ВАРИАНТ 1 ----------------


// let imgs = ["image/house_1.png", "image/house_1.1.png"];
// let index = 0;

// function changeImage() {
//     let imgElement = document.querySelector("#projectImage img"); // Получаем <img> внутри #projectImage
//     if (!imgElement) {
//         console.error("Элемент изображения не найден!");
//         return;
//     }

//     imgElement.style.transition = "opacity 0.5s ease-in-out";
//     imgElement.style.opacity = 0;

//     setTimeout(() => {
//         index = (index + 1) % imgs.length;
//         imgElement.src = imgs[index];
//         imgElement.style.opacity = 1;
//     }, 500);
// }




// ---------------- ВАРИАНТ 2 ----------------


let imgs_1 = ["image/house_1.png", "image/house_1.1.png"];
let imgs_2 = ["image/house_2.png", "image/house_2.1.png", "image/house_2.2.png", "image/house_2.3.png"];
let imgs_3 = ["image/house_3.png", "image/house_3.1.png", "image/house_3.2.png"];
let imgs_4 = ["image/house_4.png", "image/house_4.1.png"];
let index_1 = 0, index_2 = 0, index_3 = 0, index_4 = 0;
let isAnimating_1 = false, isAnimating_2 = false, isAnimating_3 = false, isAnimating_4 = false;

function changeImage_1() {
    if (isAnimating_1) return;
    isAnimating_1 = true;

    let imgElement = document.querySelector("#projectImage_1 img"); 
    if (!imgElement) {
        console.error("Элемент изображения не найден!");
        return;
    }

    imgElement.classList.add("slide-out-right");

    setTimeout(() => {
        index_1 = (index_1 + 1) % imgs_1.length;
        imgElement.src = imgs_1[index_1];

        imgElement.classList.remove("slide-out-right");
        imgElement.classList.add("slide-in-right");

        setTimeout(() => {
            imgElement.classList.remove("slide-in-right");
            isAnimating_1 = false;
        }, 600);
    }, 600);
}

function changeImage_2() {
    if (isAnimating_2) return;
    isAnimating_2 = true;

    let imgElement = document.querySelector("#projectImage_2 img");
    if (!imgElement) {
        console.error("Элемент изображения не найден!");
        return;
    }

    imgElement.classList.add("slide-out-left");

    setTimeout(() => {
        index_2 = (index_2 + 1) % imgs_2.length;
        imgElement.src = imgs_2[index_2];

        imgElement.classList.remove("slide-out-left");
        imgElement.classList.add("slide-in-left");

        setTimeout(() => {
            imgElement.classList.remove("slide-in-left");
            isAnimating_2 = false;
        }, 600);
    }, 600);
}


function changeImage_3() {
    if (isAnimating_3) return;
    isAnimating_3 = true;

    let imgElement = document.querySelector("#projectImage_3 img"); 
    if (!imgElement) {
        console.error("Элемент изображения не найден!");
        return;
    }

    imgElement.classList.add("slide-out-right");

    setTimeout(() => {
        index_3 = (index_3 + 1) % imgs_3.length;
        imgElement.src = imgs_3[index_3];

        imgElement.classList.remove("slide-out-right");
        imgElement.classList.add("slide-in-right");

        setTimeout(() => {
            imgElement.classList.remove("slide-in-right");
            isAnimating_3 = false;
        }, 600);
    }, 600);
}

function changeImage_4() {
    if (isAnimating_4) return;
    isAnimating_4 = true;

    let imgElement = document.querySelector("#projectImage_4 img");
    if (!imgElement) {
        console.error("Элемент изображения не найден!");
        return;
    }

    imgElement.classList.add("slide-out-left");

    setTimeout(() => {
        index_4 = (index_4 + 1) % imgs_4.length;
        imgElement.src = imgs_4[index_4];

        imgElement.classList.remove("slide-out-left");
        imgElement.classList.add("slide-in-left");

        setTimeout(() => {
            imgElement.classList.remove("slide-in-left");
            isAnimating_4 = false;
        }, 600);
    }, 600);
}
