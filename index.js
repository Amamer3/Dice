
let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let randomImageSource1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource1);

if (randomNumber1 > randomImageSource2){
    document.querySelector("h1").innerHTML = "Player 1 Won !!!"
}
else if(randomImageSource2 > randomImageSource1){
    document.querySelector("h1").innerHTML = "Player 2 Won !!!"
}else{
    document.querySelector("h1").innerHTML = "Players Roll Again !"
}