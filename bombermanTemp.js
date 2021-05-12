function gameGrid(){

    window.random=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let length=0;
    let bomb=[]; //To store indices of bombs
    let bombArray=new Array(82).fill(0); // To avoid double click
    let isClicked=new Array(82).fill(false); // To avoid double click and score increment
    
    function generateRandom(){
        let r=0;
        while(length<10){
            r=Math.floor(Math.random()* (81)+1);          
            // if(bomb.indexOf(r)==-1){
            // }
            while(bomb.includes(r)){
                r=Math.floor(Math.random()* (81)+1);
            }
            bomb.push(r);
            length++;
        }
        for(let i=0; i<bomb.length; i++){
            bombArray[bomb[i]]=1;
            random[i]=bomb[i];
        }
        //alert(random);
    }

    generateRandom();

    let idCount=0;   //To put unique id for each cell
    let gameOverFlag=0;
    let finalScore=0;
    // Creating rows and cells of the game.
    for(let i=1; i<=9; i++){     //rows
        const divrow=document.createElement("div");
        divrow.setAttribute("id",`row_${i}`);
        divrow.setAttribute("class","rows");
        for(let j=1; j<=9; j++){ //cells
            const divcol=document.createElement("div");
            divcol.setAttribute("id",`cell_${++idCount}`);
            divcol.setAttribute("class","cell");
            divcol.innerHTML=idCount;
            divcol.value=idCount;
            divrow.appendChild(divcol);
            //idCount++;          

        }
    document.getElementById("main").appendChild(divrow); 
    }

   let clickedCell=document.getElementsByClassName("cell");
    console.log(clickedCell);
   for(let i=0; i<=80; i++){     // to put red or green mark
        clickedCell[i].addEventListener("click", function(){
            if(gameOverFlag==0){
                if(bombArray[i]==0){
                    if(isClicked[i]==false){
                        clickedCell[i].style.backgroundColor="green";
                        isClicked[i]=true;
                        finalScore++;
                        let score=document.getElementById("gameScore");
                        score.innerHTML="SCORE-"+finalScore;
                        score.style.color="white";
                        if(finalScore==71){
                            let result=document.getElementById("resultDisplay");
                            result.innerHTML="CONGRATULATIONS, You win the game :-)";
                            result.setAttribute("class","win");
                            gameOverFlag=1;
                            //break;
                        }
                    }
                    else{
                            alert("Double click is not allowed");
                    }
                }
                else{
                    let result=document.getElementById("resultDisplay");
                    result.innerHTML="SORRY, You lost the game :-(";
                    result.setAttribute("class","loose");

                    for(let i=0; i<bomb.length; i++){
                            document.getElementById(clickedCell[bomb[i]].id).innerHTML="";
                            clickedCell[bomb[i]].style.backgroundColor="red";
                            clickedCell[bomb[i]].style.backgroundImage="url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
                            gameOverFlag=1;
                            isClicked[i]=true;
                    }                     
                }
            }
            else{
                alert("Bro Game is over. Final Score is-"+finalScore);
            
            }
        });
     }

}

gameGrid(); // Calling the fucntion to for intial loading of the game.

function reset(){
    document.getElementById("main").innerHTML=null;
    document.getElementById("gameScore").innerHTML=null;
    document.getElementById("resultDisplay").innerHTML=null;
    gameGrid();
}