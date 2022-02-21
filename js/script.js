// scripts frontend page
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

let file= `1er lugar para : ${podio[0].name}`
document.write(file);


// let=moven("myBar0");
// move("myBar1");
// let tx1="myBar1";