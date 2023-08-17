import React from "react";
import memesData from "../memesData";

function Meme(){

  const [memeImage,setMemeImage] = React.useState("")

  function getMememImage(){
    const memesArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    setMemeImage( memesArray[randomNumber].url)
  }

  return(
    <div className="meme-container">
      <form>
        <input type="text" className="shutup" value="Shut Up"></input>
        <input type="text" className="takemoney" value="and take my money"/>
      </form>
      <button onClick={getMememImage}>Get a new meme image  🖼</button>
      <div className="meme-img-container">
        <img src={memeImage} alt="meme img" className="meme-img"/>
        <span className="text-1">SHUT UP</span>
        <span className="text-2">AND TAKE MY MONEY</span>
      </div>
    </div>
  )
}
export default Meme;