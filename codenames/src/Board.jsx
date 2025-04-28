import React from 'react'
import './styles/board.css'
import { useState } from 'react';
import words from './data/words';

function Board() {




    const fetchRandomWords = async() =>{
       

        let shuffled = words.slice(0)
        let lastIndex = shuffled.length - 1
        while(lastIndex>0){
            let randIndex =Math.floor(Math.random() * (lastIndex + 1));
            let temp = shuffled[lastIndex];
            shuffled[lastIndex] =  shuffled[randIndex];
            shuffled[randIndex] = temp;
            lastIndex -= 1;
        }
        shuffled = shuffled.slice(0,25)
        console.log(shuffled)
       
     
    }


  return (
    <div className = "main-codenames">
        <div className = "title">
            codenames
        </div>

        <div className = "teams">
            <div className = "team-red"> 
                team red
            </div>
            <div className = "team-blue">
                team blue
            </div>
        </div>

        <div className = "cards">
            {/*25 words*/}
            <button onClick = {fetchRandomWords}>hello</button>
            game board
        </div>

        <div className = "new-game">
            new game button
        </div>
    </div>
  )
}

export default Board
