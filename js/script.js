// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_setinterval_progressbar
file:///C:/Users/Shiwirockztar/Downloads/javascLabs/jsGameCarr/index.html

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