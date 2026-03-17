import { useState } from "react"
import confetti from "canvas-confetti"
import "./App.css"

// Import your music and photos
import music from "./assets/romantic.mp3"
import photo1 from "./assets/photo1.jpg"
import photo2 from "./assets/photo2.jpg"
import trip1 from "./assets/trip1.jpg"
import trip2 from "./assets/trip2.jpg"

export default function App() {
  const [message, setMessage] = useState("")
  const [audio, setAudio] = useState(null)

  // Memory gallery data
  const memories = [
    { img: photo1, caption: "Our first selfie together 😊" },
    { img: photo2, caption: "The day we laughed nonstop 😄" },
    { img: trip1, caption: "Our amazing trip ✈️" },
    { img: trip2, caption: "A memory I’ll never forget ❤️" },
  ]

  // Love messages for surprise button
  const messages = [
    "You are my favorite notification ❤️",
    "Every moment with you is magical ✨",
    "I love you more than words can say 💕",
    "Distance can’t stop my love for you ❤️",
    "You make my life brighter every day ☀️"
  ]

  // Show random message + confetti
  const showMessage = () => {
    const random = Math.floor(Math.random() * messages.length)
    setMessage(messages[random])
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } })
  }

  // Start background music
  const startMusic = () => {
    if (!audio) {
      const newAudio = new Audio(music)
      newAudio.loop = true
      newAudio.play()
      setAudio(newAudio)
    }
  }

  return (
    <div className="container">
      <h1>Happy Birthday My Love ❤️</h1>
      <p>This website is our story.</p>

      {/* Floating hearts */}
      <div className="hearts">
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
        <span>❤️</span>
      </div>

      {/* Memory gallery */}
      <div className="gallery-container">
        <h2>Our Memories Timeline 📸</h2>
        <div className="gallery">
          {memories.map((mem, index) => (
            <div className="memory" key={index}>
              <img src={mem.img} alt={mem.caption} />
              <p>{mem.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Surprise button */}
      <button className="surprise-btn" onClick={showMessage}>
        Click for a Surprise 🎁
      </button>
      <p className="surprise-message">{message}</p>

      {/* Music button */}
      <button className="surprise-btn" onClick={startMusic}>
        🎵 Click to Start Music
      </button>
    </div>
  )
}