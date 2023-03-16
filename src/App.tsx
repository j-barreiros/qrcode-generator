import { useState } from 'react'
import './App.css'

function App() {

  const [originalText, setOriginalText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const handleQrConversion = () => {
    fetch(` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${originalText}`)
      .then((response) => setQrCode(response.url))
  }

  return (
    <section className="App">
      <section className='current-qr'>
        <input
          type="text"
          className='original-text'
          onChange={event => setOriginalText(event.target.value)}
        />
        <button onClick={handleQrConversion}>Search</button>
        <img src={qrCode}/>
      </section>
    </section>
  )
}

export default App
