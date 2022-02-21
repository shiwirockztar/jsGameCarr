// scripts frontend page
function move() {
  const element = document.getElementById("myBarB");   
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
