// create a business name generator by combining 
// list of adjectives and shop name ond another wod

/*Adjectives:
Crazy
Amazing
Fire

shop name:
Engine
Food
garments

Another word:
Bros
Limited
Hub*/

let rand=Math.random();
let first,second,third;
if(rand<0.33){
    first="Crazy";
}else if(rand<0.66){
    first="Amazing";
}else{
    first="Fire"
}

rand=Math.random();
if(rand<0.33){
    second="Engine";
}else if(rand<0.66){
    second="Food";
}else{
    second="Garment"
}

rand=Math.random();
if(rand<0.33){
    third="Bros";
}else if(rand<0.66){
    third="Limited";
}else{
    third="HUb";
}

console.log(`${first} ${second} ${third}`);
