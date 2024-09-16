import { Avatar, Button, Dialog, DialogTitle, IconButton, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import  {SampleNotifications}  from '../../constants/SampleData'
const Notification = () => {
  const FriendRequestHandler=({_id,accept})=>{

  }
  return (
     <Dialog open>
      <Stack padding={{xs:"1rem",sm:"2rem"}} maxWidth={"25rem"}>
        <DialogTitle>
         {
         SampleNotifications.length>0?(SampleNotifications.map((i)=><NotificationItem sender={i.sender} _id={i._id} handler={FriendRequestHandler}/>))
         :(<Typography textAlign={"center"}>0 notification</Typography>)
         }
        </DialogTitle>
      </Stack>
     </Dialog>
 )
}
const NotificationItem=memo(({sender,_id,handler})=>{
  const {name,avatar}=sender;
return (  <ListItem>
  <Stack 
  direction={"row"}
  alignItems={"center"}
  spacing={"1rem"}
  width={"100%"}
  >
      <Avatar src={avatar}/>
      <Typography
      variant="body1"
      sx={{
          flexGrow:1,
          display:"-webkit-box",
          WebkitLineClamp:1,
          WebkitBoxOrient:"vertical",
          overflow:"hidden",
          textOverflow:"ellipsis",
      }}
      >{`${name}`} send you friend request</Typography>
  <Stack direction={{
    xs:"column",
    sm:"row"
  }} >
    <Button onClick={()=>handler({_id,accept:true})}>
    Accept
    </Button>
    <Button color="error"  onClick={()=>handler({_id,accept:false})}>
   Reject
    </Button>
  </Stack>
  
  </Stack>
</ListItem>)
})
export default Notification
