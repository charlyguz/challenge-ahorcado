const btnPlay = document.querySelector("#play");
const btnNew = document.querySelector("#new");
const btns = document.querySelectorAll(".btn-1");
const w = document.querySelector("#inpt-p");
const save = document.querySelector("#save");
const cancel = document.querySelector("#cancel");
const contenedorLetra = document.querySelector(".game");
const lineas = document.querySelectorAll(".pholder");
let words = [ "hola", "html", "js", "css", "php", "java", "python", "c++", "c#", "ruby", "swift", "kotlin", "go", "sql", "mysql", "mongodb", 
"react", "angular", "vue", "node", "express", "jquery", "ajax", "one", "oracle", "alura"];
let word = 0;
let result = "";
btnPlay.addEventListener("click", function play(){
    clickAnyB();
    playGame();

});

btnNew.addEventListener("click", function newWord(){

    clickAnyB();
    clickNew();

});
cancel.addEventListener("click", function cancel(){
    clickCancel();
});

function clickAnyB(){
    btnNew.style.display = "none";
    btnPlay.style.display = "none";
}

function clickPlay(){

    w.style.display = "none";

}

function clickNew(){
    w.style.display = "flex";
    save.style.display = "flex";
    cancel.style.display = "flex";
}

function clickCancel(){
    w.style.display = "none";
    save.style.display = "none";
    cancel.style.display = "none";
    btnNew.style.display = "flex";
    btnPlay.style.display = "flex";
}


const generarAleatorio = ( min , max ) => {
        return Math.floor(Math.random() * (max-min)) + min;
 };

function aleatorio(){
    let random = generarAleatorio(0, words.length);
    word = words[random];
    return word.length;

}   
function playGame (){
    for (let i = 1; i <= aleatorio(); i++) {

        nuevalinea = `
        <div class="pholder" id="letra${i}"> 
            <div class="line" ></div>
            <input type="text" class="iholder">
        </div>
        `
        contenedorLetra.innerHTML += nuevalinea;
    
        //return word[i-1] = word[i-1].toUpperCase();
    }
}

