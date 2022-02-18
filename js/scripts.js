// bots rivales
const rivals =["hamilton","vettel","alonso","montoya","button","flash"];        
const teams =["maclaren","redbull","ferrari","wiliams","aston martin","dc"];
let challenger = [];

// creador de competidores
class Rival{
    constructor(name,team){
    if (name == null ||name== "") {name="player 1"; }        
    this.name =name;
    if (team == null || team=="") {team="team"; }
    this.team=team;
    this.track=0;
    this.on=true;}
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
    apagar(){
        this.on=false
    }
    get getTrack(){
        return this.track;
    }
}


// -------------------------------    Comienza el juego  -----------------------
let name= prompt(`Por favor introduzca su nombre`);
let team = prompt(`Por favo1 introduzca su equipo`);
let player = new Rival(name,team);   //Usuario



let rivs=Math.floor(Math.random() * 5) + 3;  //rivales
for (let i = 0; i< rivs; i++) {
    challenger[i]= new Rival(rivals[i],teams[i]);  
} 

let pista=Math.floor(Math.random() * 30) + 10;   //pista
console.log(`la pista mide ${pista}`);
let podio =[];




// ===========********* impresiones ************==============
console.log(challenger);

for (let i = 0 ; podio.length < 3; i++) {  
    
    if (challenger[i].on==true) {challenger[i].run(); console.log(`el  ${i} es el rrecorrido ${challenger[i].track}`)}
    if (challenger[i].on==false) {console.log(`este ya gano`);i=0;continue}
    if (challenger[i].track>=pista && challenger[i].on==true) {challenger[i].on=false;podio.push(challenger[i]);}
    if (i==(challenger.length-1)) {i=-1;}
}


console.log(podio);

let msj=player.show()
document.write(msj);

// alert("¡Game Over!");
