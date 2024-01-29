import { useState } from "react";

function MessageBoard() {
  const [message ,setMessage ] = useState([])
  const [inputText , setInputText] = useState('')

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            onChange={(event)=>{
              setInputText(event.target.value)
            }}
            value={inputText}
          />
        </label>
        <button 
        className="submit-message-button" 
        onClick={()=>{
          const newMessage = [...message]
          newMessage.push(inputText)
          setMessage(newMessage)
        }}>Submit</button>
      </div>
      <div class="board">
        {
          message.map((text , index)=>{
            return (
              <div className="message" key={index}>
                <h1>{text}</h1>
                <button 
                className="delete-button"
                onClick={()=>{
                  const newMessage = [...message]
                  newMessage.splice(index , 1)
                  setMessage(newMessage)
                }}
                >x</button>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default MessageBoard;
