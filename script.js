
var colors = ["#ff0000","#918563","#aaff1c","#eaccff","#006497","#aaccaa","#f0e6fa"];

var bg = document.querySelector("section");
var btn = document.getElementById("butn");
var text = document.getElementById("text");

btn.addEventListener("click", function(){
    let randomNumber = parseInt(Math.random()*colors.length);
    // console.log("Hey");
    bg.style.background = colors[randomNumber];
    // console.log(colors[randomNumber]);
    // console.log(randomNumber);
    text.textContent=(colors[randomNumber]);
});