import * as rs from 'readline-sync';

//### ¡Gran Concurso de Tortas de Tres Arroyos! :birthday:
//Te toca ser jurado de un concurso de tortas, y el número de participantes puede variar. Tu tarea es pedir al usuario cuántos concursantes habrá y luego solicitar las puntuaciones de Sabor, Presentación y Dificultad para cada torta. Al final, debes determinar qué torta tiene el mayor puntaje. Y si hay empate? En ese caso, informaremos que se produjo un empate (no es necesario indicar si fueron dos o mas empates ni entre que tortas es el empate, solo basta con indicar que se produjo empate si al menos existe uno).
//## Funciones a implementar:
//calcularPuntaje(sabor, presentacion, dificultad):
//Recibe tres números entre 1 y 5 que representan las puntuaciones de una torta y devuelve la suma de esos números (el puntaje total del pastel).
//determinarGanador():
//Utiliza la librería readline-sync para pedir al usuario el número de participantes, luego solicita las puntuaciones de cada uno de ellos y usa la función calcularPuntaje para determinar la torta con el mayor puntaje.
//*Si lo consideran necesario, pueden implementar funciones extra.

let participantes: number = rs.questionInt("Numeros de participantes: ");
let sabor: number=0;
let dificultad: number=0 ;
let presentacion: number=0 ;
let puntajeTorta:number=0;
let ganador:number=0;
let mayorPuntaje:number=0;
let empate:boolean=false;



function solicitarPuntaje(criterio:number,nCriterio:string):number{
    
    do{
        criterio=rs.questionInt(`ingrese una puntuacion de ${nCriterio} del 1 al 5: `);
        if(criterio<1 ||criterio>5){
            console.log(`El puntaje debe estar entre 1 y 5`);
        }
    }while(criterio<1|| criterio>5);
    return criterio
}
function calcularPuntaje(sabor:number,presentacion:number,dificultad:number):number{
    return sabor+presentacion+dificultad
}


function determinarGanador(){
    for (let i = 1; i <= participantes; i++) {
        console.log(`\nParticipante ${i}:`);
        sabor=solicitarPuntaje(sabor,"sabor");
        presentacion= solicitarPuntaje(presentacion,"presentacion");
        dificultad= solicitarPuntaje(dificultad,"dificultad");
        puntajeTorta=calcularPuntaje(sabor,presentacion,dificultad);
        console.log(`El puntaje total de la torta es ${puntajeTorta}`);
        if (puntajeTorta > mayorPuntaje ){
            mayorPuntaje =puntajeTorta;
            ganador= i;
            empate = false;
            
        } else if(puntajeTorta === mayorPuntaje){
            empate =true 
            
        }
    
    }
    if(empate){
    console.log(`Hay empate entre participantes`);
   }else{
    console.log(`¡¡¡El ganador del concurso de tortas es el participante ${ganador} !!! con un puntaje de ${mayorPuntaje}.`);
   }
    
}

determinarGanador();


    
    