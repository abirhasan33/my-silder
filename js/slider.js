const images = [
    'images/piliyes-1 - Copy.jpg',
    'images/piliyes-2 - Copy.jpg',
    'images/piliyes-3 - Copy.jpg',
    'images/piliyes-4 - Copy.jpg',
    'images/piliyes-5 - Copy.jpg',
    'images/piliyes-6 - Copy.jpg',
    'images/piliyes-7 - Copy.jpg',
    'images/piliyes-8 - Copy.jpg',
    'images/piliyes-9 - Copy.jpg',
];
let imgIndex = 0;
const imagesElement = document.getElementById('silesr-img');
setInterval( () => {
    if(imgIndex >= images.length){
        imgIndex= 0;
    }
    const imgUrl = images[imgIndex];
    imagesElement.setAttribute('src', imgUrl);
    imgIndex++;
    console.log(imgUrl);
}, 1000)