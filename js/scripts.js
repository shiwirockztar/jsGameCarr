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
        // Returns a random integer from 1 to 5:
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
let meta=Math.floor(Math.random() * 30) + 10;   //meta f
console.log(`la meta esta a los ${meta}000 mts`);

let name= prompt(`Por favor introduzca su nombre`);
let team = prompt(`Por favo1 introduzca su equipo`);
let player = new Rival(name,team);   //Usuario


let bots=Math.floor(Math.random() * 5) + 3;  //Bots
for (let i = 0; i< bots; i++) {challenger[i]= new Rival(rivals[i],teams[i]); } 

let podio =[];

challenger.unshift(player); //indexando el usuario a lista de competidores

// ===========********* impresiones ************==============
console.log(challenger);

for (let i = 0 ; podio.length < 3; i++) {  
    
    if (challenger[i].on==false) {continue;}           //si ya gano se salta a el siguiente jugador
    if (challenger[i].on==true) {challenger[i].run();} //solo correran los que no hayan ganado 
    if (challenger[i].on==true && challenger[i].track>=meta) {challenger[i].on=false;podio.push(challenger[i]);} //** si ya alcanzo o supero la meta se pasa a el podio
    if (i==(challenger.length-1)) {i=-1;}              //si se alcanza el final del arreglo vuelve al inicio
}


console.log(podio);

// let msj=player.show()
// document.write(msj);

// alert("¡Game Over!");
