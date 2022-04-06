// scripts frontend page
// document.write(`la meta esta a los ${meta}000 mts <br>`);
// let file= `1er lugar para : ${podio[0].name}`
// document.write(`${file} <br>`);
// let file2= `2do lugar para : ${podio[1].name}`
// document.write(`${file} <br>`);
// let file3= `3er lugar para : ${podio[2].name}`
// document.write(`${file} <br>`);


console.log(`1er lugar para : ${podio[0].name}`);
console.log(`2do lugar para : ${podio[1].name}`);
console.log(`3er lugar para : ${podio[2].name}`);

//*************construye la estructura en bloques*************** 
//**-----------------  de el boton en header ------------------*

let mov=`moveN()`;
for (chall in challenger) {dinamic(challenger[chall].name,chall);    let text = `, move${chall}()`; mov = mov.concat(text);}

// let but=document.createElement("BUTTON");
let but=document.createElement("a");
but.innerHTML="Start";
but.setAttribute('onclick', "start()"); 
// let header=document.querySelector("header") 
let boton=document.querySelector("#boton") 

boton.appendChild(but);

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
    // let br =document.createElement("br");
    // div.appendChild(br);

    // document.getElementById("racers").appendChild(div); 
    let racers=document.querySelector("#racers")     //forma directa de pasar elementos
    racers.appendChild(div);
}
// -*********************************************************************
// *****************------- dinamic advance--------***************
function start() { for (i in challenger) { 
    // const borrable = document.getElementById("pollposition");
    // borrable.remove();
    moveD(i);} }
    let poll=0;
function moveD(N) {
    // const element = document.getElementById(`Bar${N}`); 
    let element = document.getElementById(`Bar${N}`);   

    let width = 0;
    let i =0;
    const id = setInterval(frame, 425);
    let rango= 100/meta;
    function frame() {
        if (width >= 99 &&poll<3) {clearInterval(id);
            // element.remove(h4)
            poll++;
            let h4=document.createElement("h4");
            h4.setAttribute("id",`pollposition`);
            h4.innerHTML=poll;
            element.appendChild(h4);
        } 
        else {
            let x=challenger[N].history[i];
            let prom=x*rango;
            width=prom; 
            element.style.width = width + '%'; 
            i++;
        }
    }
}

// --------------------------------------------------------------------





