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

function aleatorio(){
    let palabra = words[Math.floor(Math.random() * words.length)]
    result = palabra
    console.log(result);
    console.log(result.length);
    return result;
}   


btnPlay.addEventListener("click", function play(){
    clickAnyB();

    aleatorio();
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
    document.querySelector("#play").style.display = "none";
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

function playGame (){

    for (let i = 1; i <= result.length; i++) {

        nuevalinea = `
        <div class="pholder" id="letra${i}"> 
            <div class="line" ></div>
            <input type="text" maxlength="1" class="iholder" id="letraGanadora${i}" >
        </div>
        `
        contenedorLetra.innerHTML += nuevalinea;
        document.querySelector(`#letraGanadora${i}`).addEventListener("keydown", validarLetra);
    }
    
    
}


function validarLetra(){
    
        for (let i = 0; i < result.length; ) {
            console.log(result[i]);
            
            let letra = document.querySelector(`#letraGanadora${i}`);     
            let letraValue = letra?.value || '';
            if (letraValue = result[i]) {
                document.querySelector(`.dibujo`).style.backgroundColor = "green";
            }else{
                document.querySelector(`.dibujo`).style.backgroundColor = "red";
            }
            i++
        }
    
    
};




//se puede usar u aray dentro de un array*