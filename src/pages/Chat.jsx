// Chat.jsx
import React, { Fragment, useRef } from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import { IconButton, Stack } from '@mui/material';
import { AttachFile, Send as SendIcon } from '@mui/icons-material';
import InputBox from '../components/shared/InputChatBox'; 
import FileMenu from "../components/dialogs/FileMenu"
import MessageComponent from '../components/shared/MessageComponent';
import { SampleMessage } from '../constants/SampleData';
const user=[{
  name:"Vishal",
  _id:"1234",
}]
const Chat = () => {
  const { chatId } = useParams();
  const containerRef = useRef(null);
  
  
  

  
  return (
    <Fragment>
      <Stack
        ref={containerRef}
        boxSizing={"border-box"}
        padding={"1rem"}
        spacing={"1rem"}
        bgcolor={"gray"}
        height={"90%"}
        sx={{
          overflowX: "hidden",
          overflowY: "auto",
        }}
      >
        {
  SampleMessage.map((i) => (
    <MessageComponent key={i._id} message={i} user={user} />
  ))
}      
           
        
      </Stack >
      <form action="" style={{ height: "10%" }}>
        <Stack 
        direction="row"
        alignItems={"center"}
        position={"relative"}
        >
          <IconButton
          >
            <AttachFile/>
          </IconButton>
          <InputBox sx={{
            
          }}/>
          <IconButton type="submit" sx={{
               backgroundColor:"rgba(0,0,0,0.5)",
               marginLeft:"2px",
               color:"Green",
               "&:hover":{
                 bgcolor:"rgba(0,0,0,0.9)"
               }
          }}>
            <SendIcon />
          </IconButton>
        </Stack>
      </form>
      <FileMenu/>
    </Fragment>
  );
};

export default AppLayout(Chat);
