//Valores base mapa
let xmap = 0;
let ymap = 0;
let storyCounter = 0;
//Valores base personaje
let hp = 20;
let str = 5;
let dex = 3;
let luk = 1;
//Funcion cierre de ventanas "X"
function quit(item){
    let show = document.getElementById(item);
    show.remove();
}
//Dado
function dice(x){
    return Math.floor(Math.random()*x)+1;
}
//Crear mapa
function selectLvl(n){
    var lvl = n*20;
    var x = 0;
    var y = 0;
    while (x <= 5 || y <= 5){
        x= dice(lvl);
        y= dice(lvl);
        console.log(x, y);
    }
    quit('lvlSelector');
    return xmap=x, ymap=y, playGame();
}
//Show texto on "screen"
function showText(text){
    let screen = document.getElementById('screen');
    //Push text
    screen.innerHTML = `
    <p class="storyText">${text}</p>
    `;
}
//Start game
function playGame(){
    let storyText = ["Paseas tranquilamente por el bosque, la constante lluvia hace que caminar en esta pendiente sea toda una proeza. Subir la ultima curva pareció una bajada en comparación a los ultimos tres metros de asqueroso esfuerzo. Type 'S' to continue...", "asd"];
    showText(storyText[storyCounter]);
    
}
//Juego cargado
document.addEventListener('DOMContentLoaded', ()=>{
    let game = document.getElementById('game');
    let btnStart = document.getElementById('start-Btn');
    //Despliega selector de nivel.
    btnStart.addEventListener('click', ()=>{
        game.innerHTML += `
        <div id="lvlSelector">
        <label>Selecciona el nivel</label><br>
        <button type="button" id="quit" onclick="quit('lvlSelector')">X</button>
        <button type="button" id="lvl1" class="lvl" onclick="selectLvl(1)">LVL-1</button>
        </div>
        `;
    })
})