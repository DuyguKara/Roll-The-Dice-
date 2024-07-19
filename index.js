document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    var randomNumber = Math.floor((Math.random() * 6)) + 1;
    var img1 = document.querySelector(".img1");
    img1.setAttribute("src", "./images/dice" + randomNumber + ".png");

    var randomNumber2 = Math.floor((Math.random() * 6)) + 1;
    var img2 = document.querySelector(".img2");
    img2.setAttribute("src", "./images/dice" + randomNumber2 + ".png")


    var title = document.querySelector("h1");
    if(randomNumber === randomNumber2){
        title.textContent = "Draw!";
    }else if(randomNumber > randomNumber2){
        title.textContent = "🎉Player 1 Wins!";
    }else {
        title.textContent = "Player 2 Wins!🎉";
    }
}