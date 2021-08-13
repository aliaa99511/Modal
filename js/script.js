


var img = document.querySelector("img");
var demo=document.getElementById("demo");
var parent=document.getElementById("parent");
var fa=document.getElementById("fa");
var theImg=document.getElementById("theImg");

var attr=img.getAttribute("src");


img.onclick=function(){
    demo.appendChild(img);
    img.style.width="800px";
    img.style.height="500px";
    parent.style.display="block";
};
fa.onclick=function(){
    parent.style.display="none";
    theImg.appendChild(img);
    img.style.width="500px";
    img.style.height="400px";
};
parent.onclick=function(){
    parent.style.display="none";
    theImg.appendChild(img);
    img.style.width="500px";
    img.style.height="400px";
};
