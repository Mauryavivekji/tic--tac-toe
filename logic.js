let boxes=document.querySelectorAll(".btn");
let resetBtn=document.querySelector(".resetBtn");
let msgContainer=document.querySelector(".msgContainer");
let msg=document.querySelector(".msg");
let newGame=document.querySelector(".newGame");

let turno=true;
let winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
boxes.forEach((btn)=>{
    btn.addEventListener("touchstart",()=>{

        if(turno){
btn.innerHTML="<span style='color:black;'>O</span>"
turno=false;
        }
        else{
            btn.innerHTML="<span style='color:white;'>X</span>"

            turno=true;
        }
        btn.disabled=true;
        checkWinner();
    })
})

const resetGame=()=>{
    turno=true;
    enabledBtn();
    msgContainer.classList.add("hide")
} 

const disabledBtn=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enabledBtn=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showWinner=(winner)=>{

msg.innerText=`CONGRATULATION, WINNER IS '${winner}'`;
msgContainer.classList.remove("hide");
disabledBtn();
}



const checkWinner=()=>{
   for(let pattern of winPattern)  {
    // console.log(pattern[0]);
// console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
let pos1Val=boxes[pattern[0]].innerText;
let pos2Val=boxes[pattern[1]].innerText;
let pos3Val=boxes[pattern[2]].innerText;
if(pos1Val!="" &&pos2Val!="" && pos3Val!=""){
    if(pos1Val===pos2Val&&pos2Val===pos3Val){
showWinner(pos1Val);
    }
}
   }
}



newGame.addEventListener("touchstart",resetGame)
resetBtn.addEventListener("touchstart",resetGame)
