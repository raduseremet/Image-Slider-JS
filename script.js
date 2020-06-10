const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextImage);prevBtn.addEventListener('click', prevImage);

function nextImage(){

if(counter === 4) {
    counter = -1;
}
counter++;

container.style.backgroundImage = `url(image/img-${counter}.jpg)`

}

function prevImage(){

    if(counter === 0 ) {
        counter = 5;
    }

    counter--; 

    container.style.backgroundImage =  `url(image/img-${counter}.jpg)`;

}
