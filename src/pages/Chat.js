// Import necessary libraries
import React, { useState } from "react";
import Messages from '../components/chat/Messages';
import "../css/chatStyles.css";
import { NavLink } from "react-router-dom";
import { addMessage, getMessages, useMessages} from "../api.js";


export default function Chat(data) {
  //conversationId is hardcoded as this page is not fully finished
  data = {conversationId: "5eae207c2630d000173c63d6"}
  var { loading, messages, error } = useMessages(data);
    if (loading) {
      return <p>Loading...</p>;
    }
    if (error) {
      return <p>Something went wrong: {error.message}</p>;
    }

    console.log(messages);

    const topicImage = sessionStorage.getItem('currentTopicImage');
  
    return (
      <div>
        <div className = "message-heading">
          Chat (Not Fully Implemented)
        </div>
        <div className = "chat-page">
          
          
          <div className = "grid-item user-display" style={{backgroundImage: `url(https://res.cloudinary.com/drvfo389c/image/upload/v1589694061/pear/profile_hdtz1k.png)`}}>
            Talking to:
          </div>
          
          
          <div className = "grid-item message-display">
            {messages.map(messages => (
              <Message key={messages.text} {...messages} />
            ))}
          </div>
          
          
          <div className = "grid-item topic-display" style={{backgroundImage: `url(${topicImage})`}}>
            Talking about:
          </div>
          
          
          <div className = "grid-item message-form">
            <MessageForm />
          </div>

        </div>
      </div>
  );
}


function MessageForm() {
   //assign the proper inputs from form
   const [conversationId, setConversatioId] = useState("");
   const [senderId, setSenderId] = useState("");
   const [text, setText] = useState("");
   const [image, setImage] = useState("");
   const [video, setVideo] = useState("");
  
  //on submit, add message to mongoDB database
  function onSubmit() {
    addMessage({
      conversationId,
      senderId, 
      text,
      image,
      video

    });
}
  function handleSubmit(event){
    event.preventDefault();
  }

  return (
    <div className = "chatBox">
      <h1>Write message: </h1>
      <form onSubmit={handleSubmit}>
        {/* <label for="message">Write a message</label> */}
          <input 
            type="text" 
            name="message"
            placeholder="Type your message"
            value={text}  
            onChange={event => {
              setText(event.target.value);
            }}
            
          /> <br />
      
        <input type="submit" value="Send" id='btn' onClick={onSubmit}/>
      </form> 
    </div>
  );
}
  
  /* This function is created to display all messages from a specific conversation stored in the mongoDb
     database. However, as this section of the code is not yet fully implemented, conversation is still 
     hardcoded.
  */
  function Message(message) {
    const {_id, conversationId, senderId, text, image, video, timeSent} = message;
    
    return (
      <section className='join'>
          <div className={`chat-room conversation-${text}`}  key={text}>
            <div>
                <br></br>
                  {senderId}:
                <br></br>
                {text}
            </div>
         </div>
      </section>
  );
 }
