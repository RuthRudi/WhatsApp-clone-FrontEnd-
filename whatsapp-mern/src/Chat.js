import React from 'react'
import './Chat.css';
import MicIcon from "@material-ui/icons/Mic";
import { Avatar, IconButton} from "@material-ui/core";
import {AttachFile, MoreVert, SearchOutlined, SettingsInputAntenna} from "@material-ui/icons";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";


function Chat({ messages }) {
    return (
        <div className="chat">
          <div className="chat__header">
            <Avatar/>

            <div className="chat__headerInfo">
                <h3>Room name</h3>
                <p>Last seen at...</p>

                </div>
                <div className =" chat__headerRight">
                    <IconButton>
                       <SearchOutlined/>
                    </IconButton>

                    <IconButton>
                        <AttachFile/>
                    </IconButton>

                    <IconButton>
                       <MoreVert/>
                    </IconButton>
                </div>
            </div>
         <div className = " chat__body">
           {messages.map((message) => {
                 <p 
                 className={ 'chat__message  ${message.received && "chat__reciever"}'}>
                     <span className= " chat__name">{message.name}</span>
                     {message.message}
                   <span className =" chat__timestamp"> {message.timestamp} </span>

                   </p> 



           })}


                     <p className=" chat__message chat__reciever">
                     <span className= " chat__name">Sonny</span>
                     This is a message
                   <span className =" chat__timestamp"> {new Date().toUTCString()} </span>

                     </p>

                     <p className=" chat__message">
                     <span className= " chat__name">Sonny</span>
                     This is a message
                   <span className =" chat__timestamp"> {new Date().toUTCString()} </span>

                     </p>
         </div>
         
         <div className =" chat__footer">
         
         <InsertEmoticonIcon/>
         <form>
             <input 
             placeholder =" Type a message"
             type ="text"
             />
             <button
             type = "submit"
             >
                 Send
             </button>
         </form>
<MicIcon/>
         </div>
          </div>
        
    )
}

export default Chat

