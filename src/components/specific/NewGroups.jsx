import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { SampleUser } from '../../constants/SampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'
const NewGroups = () => {
  const [members,setMembers]=useState([SampleUser]);
  const [selectMembers,setSelectMembers]=useState([SampleUser]);

  const groupName=useInputValidation("");
  const selectMemberHandler=(id)=>{
    setSelectMembers((prev)=>prev.includes(id)?prev.filter((currElement)=>currElement!==id):[...prev,id]);
  };
  console.log(selectMembers);
  const closeHandler=()=>{};
  const submitHandler=()=>{};
  return (
<Dialog open>
 <Stack padding={{xs:"1rem",sm:"3rem"}} maxWidth={"25rem"} spacing={"2rem"}>
   <DialogTitle variant="h4">
    New Group
   </DialogTitle>
   <TextField label="Group Name" value={groupName.value} onChange={groupName.changeHandler}/>
   <Typography variant="body1">
    Members
    </Typography> 
   <Stack>
   {
   SampleUser.map((i)=>(
     <UserItem user={i} key={i._id} 
     handler={selectMemberHandler} isAdded={selectMembers.includes(i._id)} />
   ))
 }
   </Stack>
   <Stack direction={"row"} justifyContent={"space-between"}>
    <Button variant="text" color="error" size='large' >
      Cancel
    </Button>
    <Button variant="contained" size='large' onClick={submitHandler}>
      Create
    </Button>
   </Stack>
 </Stack>
</Dialog>
  )
}

export default NewGroups
