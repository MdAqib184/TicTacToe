import React, { useRef, useState } from 'react'
import './Game.css'
import circle from '../Asset/cir.png'
import cross from '../Asset/cr.png'
let data = ["","","","","","","","",""];
const Game = () => {
  let [cnt,setCnt] = useState(0);
  let [lck,setLck] = useState(false);
  let titleref = useRef(null);
  let b1 = useRef(null);let b2 = useRef(null);let b3 = useRef(null);
  let b4 = useRef(null);let b5 = useRef(null);let b6 = useRef(null);
  let b7 = useRef(null);let b8 = useRef(null);let b9 = useRef(null);
  let b_arr = [b1,b2,b3,b4,b5,b6,b7,b8,b9];
  const toggle = (e,num) =>{
    if(lck){
        return 0;
    }
    if(cnt%2===0){
        e.target.innerHTML = `<img src="${cross}">` ;
        data[num]="x";
        setCnt(++cnt);
    }
    else{
        e.target.innerHTML = `<img src="${circle}">` ;
        data[num]="o";
        setCnt(++cnt);
    }
    check();
  }

  const check = ()=>{
    if(data[0]===data[1]&&data[1]===data[2]&&data[2]!==""){
        win(data[2]);
    }
    else if(data[3]===data[4]&&data[4]===data[5]&&data[5]!==""){
        win(data[5]);
    }
    else if(data[6]===data[7]&&data[7]===data[8]&&data[8]!==""){
        win(data[8]);
    }
    else if(data[0]===data[3]&&data[3]===data[6]&&data[6]!==""){
        win(data[6]);
    }
    else if(data[1]===data[4]&&data[4]===data[7]&&data[7]!==""){
        win(data[7]);
    }
    else if(data[2]===data[5]&&data[5]===data[8]&&data[8]!==""){
        win(data[8]);
    }
    else if(data[0]===data[4]&&data[4]===data[8]&&data[8]!==""){
        win(data[8]);
    }
    else if(data[2]===data[4]&&data[4]===data[6]&&data[6]!==""){
        win(data[6]);
    }
  }
  const win = (won)=>{
    setLck(true);
    if(won==="x"){
        titleref.current.innerHTML = `Congratulations for player x`;
        titleref.current.style.color = "rgb(99, 203, 61)";
    }
    else{
        titleref.current.innerHTML = `Congratulations for player O`;
        titleref.current.style.color = "rgb(99, 203, 61)";
    }
  }
  const reset = ()=>{
    setLck(false);
    data = ["","","","","","","","",""];
    titleref.current.innerHTML = 'Tic <span>Tac </span>Toe';
    b_arr.map((e)=>{
        e.current.innerHTML = "";
        return null;
    });
  }
  return (
    <div className='container'>
        <div className="title" ref={titleref}>Tic <span>Tac </span>Toe</div>
        <div className="board">
            <div className="row1">
                <div className="box" ref={b1} onClick={(e)=>{toggle(e,0)}}></div>
                <div className="box" ref={b2} onClick={(e)=>{toggle(e,1)}}></div>
                <div className="box" ref={b3} onClick={(e)=>{toggle(e,2)}}></div>
            </div>
            <div className="row2">
                <div className="box" ref={b4} onClick={(e)=>{toggle(e,3)}}></div>
                <div className="box" ref={b5} onClick={(e)=>{toggle(e,4)}}></div>
                <div className="box" ref={b6} onClick={(e)=>{toggle(e,5)}}></div>
            </div>
            <div className="row3">
                <div className="box" ref={b7} onClick={(e)=>{toggle(e,6)}}></div>
                <div className="box" ref={b8} onClick={(e)=>{toggle(e,7)}}></div>
                <div className="box" ref={b9} onClick={(e)=>{toggle(e,8)}}></div>
            </div>
        </div>
        <div className="reset" onClick={()=>{reset()}}>Reset</div>
    </div>
  )
}

export default Game
