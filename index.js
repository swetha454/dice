var randomNumber1=Math.floor(Math.random()*6)+1;
var randomImage1="dice"+randomNumber1+".png";
var randomDice1=document.querySelectorAll("img")[0];
randomDice1.setAttribute("src",randomImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber1+".png";
var randomDice2=document.querySelectorAll("img")[1];
randomDice2.setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!"
}
else{
    document.querySelector("h1").innerHTML="Draw!!"
}