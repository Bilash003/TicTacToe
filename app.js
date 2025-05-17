let arr=[[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8]];
let user1="",user2="";
let submitButton = document.querySelector("#submit");
let p = document.querySelectorAll(".p");
submitButton.onclick=function ()
{
    user1 = document.querySelector("#i1").value;
    user2 = document.querySelector("#i2").value;

    p[0].innerText=`PLAYER 1 : ${user1}  "X" `;
    p[1].innerText=`PLAYER 2 : ${user2}  "O" `;

    document.querySelector("#welcome").style.visibility="hidden";
    document.querySelector("#reset").style.visibility="visible";
    document.querySelector(".container").style.visibility="visible";

    p[0].style.visibility=p[1].style.visibility="visible";
}
p[0].innerText=`PLAYER 1 : ${user1}  `;
p[1].innerText=`PLAYER 2 : ${user2} `;

let box = document.querySelectorAll(".box");

let turn1 = true;
let turn2=false;

let cnt = 0;

box.forEach(function(box)
{
    box.addEventListener('click',()=>
    {
        
        if(turn1===true)
        {
            box.innerText="X";
            box.disabled = true;
            turn1=false;
            turn2=true;
        }
        else{
            box.innerText="O";
            box.disabled=true;
            turn2=false;
            turn1=true;
        }
        cnt++;
         checkWinner();
         if(cnt==9) reset();
    })
    //
   
})
function checkWinner()
{
    let win = false;
    for(let i=0;i<8;i++)
    {
        let a = box[arr[i][0]].innerText;
        let b = box[arr[i][1]].innerText;
        let c = box[arr[i][2]].innerText;

        if((a=="X"&&b=="X"&&c=="X")||(a=="O"&&b=="O"&&c=="O"))
        {
            win = true;
        }
        if(win==true)
        {
            let winner= document.querySelector("#winner");
            let winnerdiv = document.querySelector("#winnerdiv");
            let lastbutton = document.querySelector("#lastbutton");
            if(turn1==true)
            {
                winnerdiv.innerText=`congratulations ${user2} wins`;
            }
            else
            {
                winnerdiv.innerText=`congratulations ${user1} wins`;
            }
            winner.style.visibility="visible";
            lastbutton.style.visibility="visible";

            
        //reset();
        }
    }
    console.log(cnt);
    

}

    
function reset()
{
    for(let i=0;i<9;i++)
    {
        box[i].innerText="";
        box[i].disabled=false;
    }
    cnt=0;
    
}
 let winnerdiv = document.querySelector("#lastbutton");
 winnerdiv.addEventListener('click',()=>
{
    let winner= document.querySelector("#winner");
    winner.style.visibility="hidden";
    winnerdiv.style.visibility="hidden";
    reset();
})
let ibutt=document.querySelector("#ibutton");
ibutt.onclick=function collap(){
    let mess = document.querySelector("#message");
    if(mess.style.visibility==="hidden")
    {
        mess.style.visibility="visible";
    }
    else
    {
        mess.style.visibility="hidden";
    }
}

//document.querySelector("#resetdiv").onclick=()=>{reset()};