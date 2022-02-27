Input fields have value, tags have textContent or to be compatible, innerHTML

var name="Shreerang Patwardhan"
var finalsummary ="Spatial Unlimited is a Tech blog where, examples using Google Maps API v3 and Jquery Mobile are shared. I have tried to give back to the developer community as much as I can.";
var finaldate = new Date().toLocaleString();
var a =document.createElement("a");
let h3=document.createElement("h3");
var p=document.createElement("p");
var p1=document.createElement("p1");
var li = document.createElement("li");
a.setAttribute('href', "#");
h3.innerHTML="Author: "+name;
p.innerHTML="Description: "+finalsummary;
p1.innerHTML="Last update:"+finaldate;
p1.setAttribute("class","ui-li-aside");
a.appendChild(p1);
a.appendChild(p);
a.appendChild(h3);
document.getElementById("racers").appendChild(a);


let but=document.createElement("BUTTON");
but.innerHTML="st4rt";
header.appendChild(but);