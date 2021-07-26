
let btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomImage1 = "dice" + randomNumber1 + ".png";
  var randomImageSource1 = "images/" + randomImage1;

  var dice1 = document.querySelectorAll("img")[0];
  dice1.setAttribute("src", randomImageSource1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImage2 = "dice" + randomNumber2 + ".png";
  var randomImageSource2 = "images/" + randomImage2;

  var dice2 = document.querySelectorAll("img")[1];
  dice2.setAttribute("src", randomImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!!"; }
  else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!!"; }
  else {
    document.querySelector("h1").innerHTML = "Draw!!"; }
});