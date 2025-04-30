import React from 'react'
import './styles/board.css'
import { useState, useEffect } from 'react';
import words from './data/words';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { textAlign } from '@mui/system';


function Board() {
    const[shuffledWords, setShuffledWords] = useState(Array(25).fill(''))

 


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
        setShuffledWords(shuffled)
        console.log(shuffledWords)
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
            <Box
                sx={{
                    width: '100%',
                    height:'100%',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(5, 1fr)',
                    gap: 2,
                }} >
                {shuffledWords.map((word, index) =>(
                    <Card style = {{borderStyle: 'solid'}}>
                        <CardContent   sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    height: '100%',
                                    marginTop: '-20px'
                                }}>
                        <Typography>
                                {word}
                            </Typography>
                        </CardContent>
                    </Card>
                )
                )}


            </Box>

   
        </div>

        <div className = "new-game" >
            <button onClick = {fetchRandomWords}>
                 new game button
            </button>

        </div>
    </div>
  )
}

export default Board
