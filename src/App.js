import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "🤣": "Rolling on the Floor Laughing",
  "❤️": "Love",
  "😐": "Annoyance",
  "😲": "Astonished",
  "😠": "Anger",
  "🤲": "praying",
  "🙏": "Gratitude",
  "😊": "Smiling",
  "🤩": "Amazed",
  "😎": "Swag",
  "🥡": "Takeout Box",
  "🥂": "Celebrating",
  "💌": "Love Letter",
  "😇": "Blessed",
  "🤐": "No comments"
};

var emojisWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputEmojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We don't have this in our database.";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Inside out!</h1>
      <input onChange={inputEmojiHandler} />
      <h2>{meaning}</h2>

      <h3> Emojis we know </h3>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "3rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
