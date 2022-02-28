// scripts frontend page

function move() {
    const element = document.getElementById("Bar");   
    let width = 0;
    const id = setInterval(frame, 100);
    function frame() {
        if (width == 100) {
          clearInterval(id);
      } else {
          width++; 
          element.style.width = width + '%'; 
      }
  }
}

function progress(argument) {
    const element = document.getElementById("Bar");   
}

//*************construye la estructura en bloques*************** 
//**-----------------  de el boton en header ------------------*

let mov=`moveN()`;
for (chall in challenger) {
    dinamic(challenger[chall].name,chall);    let text = `, move${chall}()`; mov = mov.concat(text);
}


let but=document.createElement("BUTTON");
but.innerHTML="st4rt";
but.setAttribute('onclick', "start()"); 
// let header=document.querySelector("header") 
let header=document.querySelector("#racers") 

header.appendChild(but);

// *****************------- dinamic advance--------***************
function start() {
    for (i in challenger) { moveN(i);}
}
function moveN(N) {
    const element = document.getElementById(`Bar${N}`);   
    let width = 0;
    // console.log(history[N]*100);
    document.write(history[N]);
document.write("<br>");
    const id = setInterval(frame, history[N]*100);
    function frame() {
        if (width == 100) {clearInterval(id);} 
        else {width++; element.style.width = width + '%'; }
    }
}
// --------------------------------------------------------------------
//**-----------  de la barra de carga para la section----------*
function dinamic(playerN,N) {
    let div =document.createElement("div");
    div.setAttribute("class","player");
    let h3=document.createElement("h3");
    // h3.setAttribute("class","a");
    h3.innerHTML=playerN;
    div.appendChild(h3);


    let divP =document.createElement("div");
    divP.setAttribute("class","myProgress");
    div.appendChild(divP);
    let divB =document.createElement("div");
    divB.setAttribute("id",`Bar${N}`);
    divP.appendChild(divB);
    let br =document.createElement("br");
    div.appendChild(br);

    // document.getElementById("racers").appendChild(div); 
    let racers=document.querySelector("#racers")     //forma directa de pasar elementos
    racers.appendChild(div);
}
// -*********************************************************************
// dinamic(podio[0].name,0);
// dinamic(podio[1].name,1);
// dinamic(podio[2].name,2);





let file= `1er lugar para : ${podio[0].name}`
document.write(file);
document.write("<br>");
let file2= `2do lugar para : ${podio[1].name}`
document.write(file2);
document.write("<br>");
let file3= `3er lugar para : ${podio[2].name}`
document.write(file3);
document.write("<br>");
document.write(history);
document.write("<br>");
document.write(history[4]);
document.write("<br>");
// document.write(mov);

// document.getElementById("user").innerHTML = podio[0].name;
// document.getElementById("bot1").innerHTML = podio[1].name;
// document.getElementById("bot2").innerHTML = podio[2].name;



// let=moven("myBar0");
// move("myBar1");
// let tx1="myBar1";

