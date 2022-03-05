// bots rivales
const rivals =["hamilton","vettel","alonso","montoya","button","flash"];        
const teams =["maclaren","redbull","ferrari","wiliams","aston martin","dc"];
let challenger = [];

// creador de competidores
class Rival{
    constructor(name,team){      
    this.name =name;
    this.team=team;
    this.track=0;
    this.history=[];
    this.on=true;}
    run(){
        // Returns a random integer from 1 to 5:
        let next=Math.floor(Math.random() * 5) + 1;
        this.track+=next;
        this.history.push(this.track);
    }
    show(){
        console.log(`El jugador  ${this.name} juega con el carro ${this.team} y lleva ${this.track}000 avanzado con un historial ${this.history} y ${this.history[0]}`);

    }
    apagar(){
        this.on=false;
    }
}

// ----------------------    Comienza el juego  -----------------------
// ====================================================================

let meta=Math.floor(Math.random() * 30) + 18;   //meta f
console.log(`la meta esta a los ${meta}000 mts`);

let podio =[];
let name= prompt(`Por favor introduzca su nombre`)||"player 1";
let team = prompt(`Por favor introduzca su equipo`)||"team";
let player = new Rival(name,team);   //Usuario

let bots=Math.floor(Math.random() * 5) + 2;  //Bots
// let bots=6;
for (let i = 0; i< bots; i++) {challenger[i]= new Rival(rivals[i],teams[i]); } 

challenger.unshift(player); //indexando usuario a lista de competidores
console.table(challenger);

// ********************* start racing *****************

for (let i = 0 ; podio.length < 3; i++) {  
    //si ya gano se salta a el siguiente jugador
    try{if (challenger[i].on==false) {continue;}       
    }catch(error){ console.log("se reiniciara el DOM");alert("¡UPS¡ hubo un error la pagina se recargara ");location.reload();}
    //solo correran los que no hayan ganado
    if (challenger[i].on==true) {challenger[i].run();} 
    //si ya alcanzo o supero la meta se pasa a el podio 
    if (challenger[i].on==true && challenger[i].track>=meta) {challenger[i].on=false;podio.push(challenger[i]);} 
    //si se alcanza el final del arreglo vuelve al inicio
    if (i==(challenger.length-1)) {i=-1;}              
}
// *********************    results   *********************
console.table(podio);

// ********************* proceso de grabar *****************
// -----archivo como objeto---
function podioObj() {
    let first=podio[0].name;
    let second=podio[1].name;
    let third=podio[2].name;
    return {"first":first, "second":second, "third":third}
}

// ****** obj *******
let Podio=podioObj();

// -----archivo como Json---
function savePodio(Podio) {
    //creamos arreglo para guardar varios podios
    let oldPodioObj=JSON.parse(localStorage.getItem("save"))||[];
    oldPodioObj.push(Podio);
    //se hace string
    let saveJson=JSON.stringify(oldPodioObj);
    localStorage.setItem("save",saveJson);
    return saveJson;
}

// ****** JSON *****
let File=savePodio(Podio);



// alert("¡Game Over!");
// swal("¡Game Over!","try again");
// alert(str.fontcolor( "red" ));
// console.log()

challenger[0].show();
challenger[1].show();
challenger[2].show();