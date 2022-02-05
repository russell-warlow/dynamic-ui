/*
document.getElementById('dropdown-button').addEventListener('click', function(e) {
    let classes = document.getElementById('dropdown-content').classList;
    classes.contains('show') ? classes.remove('show') : classes.add('show');
})


createbutton method?
use module pattern? factory?

what is the input? 
a button name, dropdown content name?
generate all css too ...? no way that's too crazy
*/

const dropdownModule = (() => {
    const create = (buttonId, contentId) => {
        document.getElementById(buttonId).addEventListener('click', function(e) {
            let classes = document.getElementById(contentId).classList;
            classes.contains('show') ? classes.remove('show') : classes.add('show');
        })
    };

    return { create };

})();

dropdownModule.create('dropdown-button', 'dropdown-content');

document.getElementById('menu-start').addEventListener('click', function(e) {
    // create new buttons and add? but if click again, then delete?
    let classes = document.getElementById('mobilemenu-options').classList;
    classes.contains('open') ? classes.remove('open') : classes.add('open');
})

const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const dot0 = document.getElementById('dot0');
const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');

let counter = 0;
let totalImages = images.length;

showImage(counter);

function showImage(index) {
    console.log('counter index: ' + index);
    for(let i=0; i<images.length; i++) {
        if(i === index) {
            let imgToShow = document.getElementById(i);
            imgToShow.style.opacity = 1;
            let dotToShow = document.getElementById('dot' + i);
            dotToShow.classList.add('active');
        }
        else {
            let hide = document.getElementById(i);
            hide.style.opacity = 0;
            let dotToHide = document.getElementById('dot' + i);
            if(dotToHide.classList.contains('active')) {
                dotToHide.classList.remove('active');
            }
        }
    }
}

function nextSlide(e) {
    if ((counter+1) === totalImages) {
        counter = 0;
    }
    else {
        counter++;
    }
    showImage(counter);
}

nextButton.addEventListener('click', nextSlide);

prevButton.addEventListener('click', function(e) {
    if ((counter-1) === -1) {
        counter = totalImages-1;
    }
    else {
        counter--;
    }
    showImage(counter);
})

dot0.addEventListener('click', () => showImage(counter=0));
dot1.addEventListener('click', () => showImage(counter=1));
dot2.addEventListener('click', () => showImage(counter=2));

setInterval(nextSlide, 3000);