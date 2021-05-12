let gameScore=0;
let gameOverFlag=0;

function gameGrid(){
    window.random=[];
    let length=0;  
    function generateRandom(){
        let r=0;
        while(length<10){
            r=Math.floor(Math.random()* (81)+1);          
            while(random.includes(r)){
                r=Math.floor(Math.random()* (81)+1);
            }
            random.push(r);
            length++;
        }
        //alert(random);
    }

    generateRandom();

    let cellId=1;
    for(let i=1; i<=9; i++){     //rows
        const divrow=document.createElement("div");
        divrow.setAttribute("id",`row_${i}`);
        divrow.setAttribute("class","rows");
        for(let j=1; j<=9; j++){ //cells
            const divcol=document.createElement("div");
            divcol.setAttribute("id",`cell_${cellId++}`);
            divcol.setAttribute("class","cell");
            divcol.setAttribute("value",0);
            divcol.innerHTML=cellId-1;
            //divcol.value=0;
            divrow.appendChild(divcol);
            //idCount++;          

        }
    document.getElementById("main").appendChild(divrow); 
    }

}
gameGrid();
// function exit(){
    
// }

/*__________________________________________________________ */
document.querySelector("#main")
.addEventListener('click', (e)=>{
    //console.log(e.target.innerHTML);
    let cell=(Number)(e.target.innerHTML);
    let isClicked=(Number)(e.target.getAttribute("value"));
    if(gameOverFlag==0){
        if(cell>=1 && cell<=81 && isClicked!=1){// To avoid bad click
            let result=document.getElementById("resultDisplay");
            e.target.style.backgroundColor="green";
            e.target.setAttribute("value",1);
            //e.target.removeEventListener();
            gameScore++;
            let score=document.getElementById("gameScore");
            score.innerHTML="SCORE-"+gameScore;
            score.style.color="white";
            if(gameScore==71){
                result.innerHTML="CONGRATULATIONS, You win the game :-)";
                result.setAttribute("class","win");
                gameOverFlag=1;
            }
            let redCell=(Number)(e.target.innerHTML);
            
            if(random.includes(redCell)){
                result.innerHTML="SORRY, You lost the game :-(";
                result.setAttribute("class","loose");
                for(let i=0; i<random.length; i++){
                    let redCellID=`cell_${random[i]}`;
                    let redCellObject=document.getElementById(redCellID);
                    //random[i]=-1;
                    redCellObject.innerHTML='';
                    redCellObject.style.backgroundColor="red";
                    redCellObject.style.backgroundImage="url('https://img.icons8.com/emoji/48/000000/bomb-emoji.png')";
                    gameOverFlag=1;
                }
                //document.querySelector("main").diasbled=true;
                document.getElementById("main").removeEventListener('click', this);
                return;
            }
        }
        else{
            alert("Double Click is Not Allowed");
        }
    }
    else{
        alert("Game over. Please reset and try again.")
    }
});
/*__________________________________________________________ */


function reset(){
    gameOverFlag=0;
    gameScore=0;
    document.getElementById("main").innerHTML=null;
    document.getElementById("gameScore").innerHTML=null;
    document.getElementById("resultDisplay").innerHTML=null;
    gameGrid();
    //generateRandom();
}