function makeBigger(event){
    event.target.style.height = `300px`
}

function returnSize(event){
    event.target.style.height = `250px`
}

function makePink(event){
    event.target.style.color = `hotpink`
}

function makeLavender(event){
    event.document.body.target.style.color = `lavender`
}

// selecting 'all' will be wrapped in array, need to target each element within the array
let poster = document.querySelectorAll(`img`);
for (let i=0;i<poster.length;i++){
    // I wanted the images to grow when hovered
    poster[i].addEventListener(`mouseover`, makeBigger);
    // then if you click the image after hovering, it will return to original size
    poster[i].addEventListener(`click`, returnSize);
}

// change first h1 in doc to Pink when clicked
let mainTitle = document.querySelector(`h1`);
mainTitle.addEventListener(`click`, makePink);

// the Body text colour will change from black to green when space bar is pressed
// the first H1 will still turn to hot pink when clicked before and after space bar is pressed
// if space bar is pressed(key down), I want the body text to become Green
document.body.onkeydown = function(event){
    if(event.keyCode == 32){
        document.body.style.color = `green`;
    }
}
