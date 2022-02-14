// bots rivales
const rivals =["hamilton","vettel","alonso","montoya","button","flash"];        
const teams =["maclaren","redbull","ferrari","wiliams","aston martin","dc"];
const challenger = [];

// creador de competidores
class Rival{
    constructor(name,team){
    if (name == null ||name== "") {name="player 1"; }        
    this.name =name;
    if (team == null || team=="") {team="team"; }
    this.team=team;
    this.track=0;
    this.puesto=0;}
    run(){
        // Returns a random integer from 1 to 6:
        let next=Math.floor(Math.random() * 5) + 1;
        this.track+=next; 
        // return this.track; //sera que retornamos el valor
    }
    show(){
        console.log(`El jugador  ${this.name} juega con el carro ${this.team} y lleva ${this.track}000 avanzado`);
        let text =`El jugador  ${this.name} juega con el equipo ${this.team} y lleva ${this.track}000 avanzado`;
        return text;
    }
}


// -------------------------------    Comienza el juego  -----------------------
// let name,team = prompt("Por favor introduzca su nombre y su equipo);
// let name,team = prompt("Por favor introduzca su nombre");
let name= prompt(`Por favor introduzca su nombre`);
let team = prompt(`Por favor introduzca su equipo`);
let player = new Rival(name,team);   //Usuario


let rivs=Math.floor(Math.random() * 5) + 2;  //rivales
for (let i = 0; i< rivs; i++) {
    challenger[i]= new Rival(rivals[i],teams[i]);  
} 

let pista=Math.floor(Math.random() * 30) + 10;   //pista
let k=0;
while(k<3){
    challenger[k].run();
    challenger[k].show();
    if (challenger[k].track>=pista && challenger[k].puesto==0) {
        console.log(`tenemos un ganador en ${k} y es `)
    k++;
    //     i++;
    //     challenger[i].puesto=i;
    }
    console.log(k);
    // k++;
}


// ===========********* impresiones ************==============
console.log(challenger);
player.run();
let msj=player.show()
document.write(msj);

alert("¡Game Over!");


