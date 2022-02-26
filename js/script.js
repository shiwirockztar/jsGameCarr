// scripts frontend page

function move() {
    const element = document.getElementById("myBar");   
    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
          clearInterval(id);
      } else {
          width++; 
          element.style.width = width + '%'; 
      }
  }
}

function move0() {
    const element = document.getElementById("myBar0");   
    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
          clearInterval(id);
      } else {
          width++; 
          element.style.width = width + '%'; 
      }
  }
}


function move1() {
    const element = document.getElementById("myBar1");   
    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
          clearInterval(id);
      } else {
          width++; 
          element.style.width = width + '%'; 
      }
  }
}
function move2() {
    const element = document.getElementById("myBar2");   
    let width = 0;
    const id = setInterval(frame, 10);
    function frame() {
        if (width == 100) {
          clearInterval(id);
      } else {
          width++; 
          element.style.width = width + '%'; 
      }
  }
}


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

dinamic(podio[0].name,0);
dinamic(podio[1].name,1);
dinamic(podio[2].name,2);



let file= `1er lugar para : ${podio[0].name}`
document.write(file);

// document.getElementById("user").innerHTML = podio[0].name;
// document.getElementById("bot1").innerHTML = podio[1].name;
// document.getElementById("bot2").innerHTML = podio[2].name;



// let=moven("myBar0");
// move("myBar1");
// let tx1="myBar1";