
function Rival(name,carr){
    this.name =name;
    this.carr=carr;
    this.track=0;
}
Rival.prototype.run=function(){
    // Returns a random integer from 1 to 6:
    track=Math.floor(Math.random() * 5) + 1;

    this.track+=track;
    // console.log(` ${this.name} avanza ${this.track}`);    
}
Rival.prototype.show=function(){
    console.log("El jugador ",this.name," juega con el carro ",this.carr);
    let text = `El jugador  ${this.name} juega con el carro ${this.carr} y lleva ${this.track}000 avanzado`;
    return(text)
}


let pista=Math.floor(Math.random() * 30) + 10;
let player = new Rival("leo","trsut");
let rivs=Math.floor(Math.random() * 6) + 2;
const challenger = [];
for (let i = 0; i< rivs; i++) {
    challenger[i]= new Rival("a","b");
    challenger[i].run();  
} 


console.log(player);
console.log(pista);

player.run();
console.log(challenger)

msj=player.show();
document.write(msj);
// alert(msj);