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

let counter = 0;
let totalImages = images.length;

showImage(counter);

// remove all other hide slides then add the correct ones?
function showImage(index) {
    for(let i=0; i<images.length; i++) {
        if(images[i].classList.contains('hide-slide')) {
            images[i].classList.remove('hide-slide');
        }
    }
    for(let i=0; i<images.length; i++) {
        if(i != counter) {
            images[i].classList.add('hide-slide');
        }
    }
}

nextButton.addEventListener('click', function(e) {
    if ((counter+1) === totalImages) {
        counter = 0;
    }
    else {
        counter++;
    }
    showImage(counter);
})

prevButton.addEventListener('click', function(e) {
    if ((counter-1) === -1) {
        counter = totalImages-1;
    }
    else {
        counter--;
    }
    showImage(counter);
})