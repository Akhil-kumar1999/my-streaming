


import React from 'react'
import Buttons from './Buttons'


const ButtonList = () => {
const List = ['All','Music','Mixes','Website','News','Editing','History','Live','Dj mix', 'Deep House','Movies','Motiviation','Cars','Sports','Games']
   
  return (  
<div>
  {
    List.map((name)=>{
   return <Buttons  key={name} name={name} />
    })
  } 
</div>
  )
}

export default ButtonList