const hexValues = ["1", "2", "3", "4", "5","6","7","8","9","A","B","C","D","E","F"];

var bg = document.querySelector("section");
var btn = document.getElementById("butn");
var text = document.getElementById("text");



btn.addEventListener("click", function(){
    var str = "#";
    var counter = 6;
    while(counter){
        
        str+=hexValues[parseInt(Math.random()*hexValues.length)];
        console.log(counter);
        counter--;
    }
    console.log(str);
    bg.style.background = str;
    text.textContent=str;
});
