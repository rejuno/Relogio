function relogio(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();



    h = (h < 10)? "0" + h: h;
    m = (m < 10)? "0" + m: m;

    var time = "~ "+ h + ":" + m + " ~";
    document.getElementById("relogio").innerHTML = time;
    document.getElementById("relogio").textContent = time;

    setTimeout(relogio, 1000);

    

} 
relogio();

var currentTime = new Date().getHours();
if (6 <= currentTime && currentTime < 12) {

    document.body.style.backgroundColor = "antiquewhite";

}else if (12 <= currentTime && currentTime < 18) {

    document.body.style.backgroundColor = "pink";

}else {

    document.body.style.backgroundColor = rgb(178, 224, 250);

}