const user=document.querySelector('#user-score');;
const comp=document.querySelector('#comp-score');
const msg= document.querySelector('#msg')
const choices= document.querySelectorAll('.choice');
u=0;
c=0;
const compPlay=()=>{
    const playOptions=['rock','paper','scissors'];
    const playIndex= Math.floor(Math.random()*3);
    return playOptions[playIndex];
}
// const winner=(userWin)=>{
//     userWin? console.log('you win') : console.log('you lose');
// }
// const draw=()=>{
//     console.log('draw game');
// }

const playGame=(userPlay)=>{
    let compPlayed= compPlay();
    // console.log('Computer =', compPlay());
    if(userPlay===compPlayed){
        msg.innerText='Game Draw';
        msg.style.backgroundColor='#9d8189'
    }else{
        let userWin=true;
        if(userPlay==='paper'){
            compPlayed==='rock' ? userWin= true: userWin=false;
        }else if(userPlay==='rock'){
            compPlayed==='paper' ? userWin= false: userWin=true;
        }else{
            compPlayed==='paper' ? userWin= true: userWin=false;
        }
        winner(userWin, userPlay, compPlayed);
    }
}
const winner=(userWin, userPlay, compPlayed)=>{
    if (userWin===true){
        msg.innerText=`You Win ${userPlay} beats ${compPlayed}`;
        msg.style.backgroundColor='green';
        u++;
        user.innerText=u;
    }else if(userWin===false){
        msg.innerText=`You lose ${compPlayed} beats ${userPlay}`;
        msg.style.backgroundColor='red';
        c++;
        comp.innerText=c;
    }else{}
}
choices.forEach((choice) => {
    choice.addEventListener('click',()=>{
        const userPlay= choice.getAttribute('id');
        playGame(userPlay)
    })
});
