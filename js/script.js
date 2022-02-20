// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval_progressbar
file:///C:/Users/Shiwirockztar/Downloads/javascLabs/jsGameCarr/index.html
aaaaaa
algoritmo tremur 

function Rival(name,carr){
    this.name =name;
    this.carr=carr;
    this.track=0;
    this.puesto=0;
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
    return(text)s
}


let pista=Math.floor(Math.random() * 30) + 10;
let player = new Rival("leo","trsut");
let rivs=Math.floor(Math.random() * 5) + 2;
const rivals =["hamilton","vettel","alonso","montoya","button","flash"];
const teams =["maclaren","redbull","ferrari","wiliams","aston martin","dc"];
const challenger = [];

for (let i = 0; i< rivs; i++) {
    challenger[i]= new Rival(rivals[i],teams[i]);
    // challenger[i].run();  
} 



console.log(player);
console.log(pista);

player.run();
console.log(challenger)


// let winners=true;
// for (let i = 0; winners<3; i+0) {
//     challenger[i].run();  
//     if (challenger[i].track>=pista && challenger[i].puesto==0) {
//         console.log(`tenemos un ganador en ${i} y es ${challenger[i].name}`)
//         i++;
//         challenger[i].puesto=i;
//     }
//     if (challenger[i].puesto==3) {
//         winners=3;
//         break;
//     }
// }

let i=0;
while (i<3) {
    challenger[i].run(); 
    console.log(i);
    console.log(challenger[i].name);

//     if (challenger[i].track>=pista && challenger[i].puesto==0) {
//         console.log(`tenemos un ganador en ${i} y es ${challenger[i].name}`)
        i++;
        // challenger[i].puesto=i;
    }
// }


msj=player.show();
document.write(msj);
// alert(msj);





*********************************************************************************
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
        // return text;
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


let bots=Math.floor(Math.random() * 5) + 2;  //Bots
console.log("numero de bots son : ",bots);
for (let i = 0; i< bots; i++) {challenger[i]= new Rival(rivals[i],teams[i]); } 

let podio =[];

challenger.unshift(player); //indexando el usuario a lista de competidores

// ===========********* impresiones ************==============
document.write("");

console.log(challenger);
console.table(challenger);


for (let i = 0 ; podio.length < 3; i++) {  
    try{
        if (challenger[i].on==false) {continue;}           //si ya gano se salta a el siguiente jugador   
    }catch(error){
        console.log("se reiniciara el DOM");
        // document.write("Toca F5 por favor");
        alert("¡UPS¡ hubo un error la pagina se recargara ");
        // swal("¡UPS¡", "Se recargara la pagina por error", "success");
        // swal("Good job!", "You clicked the button!", "success");
        // swal({
        //     title: "¡UPS¡",
        //     text: "Se recargara la pagina por error",
        //     icon: "warning",
        //     button: "0k",
        // });

        location.reload();


    }
    if (challenger[i].on==true) {challenger[i].run();} //solo correran los que no hayan ganado 
    if (challenger[i].on==true && challenger[i].track>=meta) {challenger[i].on=false;podio.push(challenger[i]);} //** si ya alcanzo o supero la meta se pasa a el podio
    if (i==(challenger.length-1)) {i=-1;}              //si se alcanza el final del arreglo vuelve al inicio
}


console.log(podio);
console.table(podio);


let file= `1er lugar para : ${podio[0].name}`
let File={};

document.write(file);

// alert("¡Game Over!");
// swal("¡Game Over!","try again");
// alert(str.fontcolor( "red" ));


