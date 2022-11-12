import React, {useState} from "react"
import memesData from "../db/memesData"

export default function Meme() {
  const handleClick = () => {
    let data = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)]
    setMeme(data.url)
  }

  const [meme, setMeme] = useState("https://i.imgflip.com/1bij.jpg")

  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
        />
        <button
          onClick={handleClick}
          className="form--button"
        >
          Get a new meme image 🖼
        </button>
      </div>

      <div className="meme">
        <img className="meme--image" src={meme} alt="" />
        <h2 className="meme--top-text">Top text</h2>
        <h2 className="meme--bottom-text">Bottom text</h2>
      </div>
    </main>
  )
}