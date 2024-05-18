import { useState } from 'react'
import React from 'react'
import './App.css'
import Axios from 'axios'

function App() {
  const [artist, setArtist] = useState("")
  const [song, setSong] = useState("")
  const [lyrics, setLyrics] = useState("")

  function searchLyrics() {
    if (artist === "" || song === "") return
    Axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`).then(res => { 
      console.log(res.data.lyrics); 
      setLyrics(res.data.lyrics); 
  }) 
  }

  return (
    <>
      <div className="App">
        <h1>Lyrics Finder</h1>
        
        <input
          className='inputValue'
          type="text"
          placeholder='Artist Name'
          onChange={(e) => { setArtist(e.target.value) }}
        />

        <input
          className='inputValue'
          type="text"
          placeholder='Song Name'
          onChange={(e) => { setSong(e.target.value) }}
        />

        <button
          className='btn'
          onClick={() => searchLyrics()}
        > ??? Search </button>

        <hr />

        <pre>{lyrics}</pre>

      </div>
    </>
  )
}

export default App
