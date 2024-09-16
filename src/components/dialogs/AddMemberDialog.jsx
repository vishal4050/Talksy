import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { SampleUser } from '../../constants/SampleData';
import UserItem from '../shared/UserItem';
import { useInputValidation } from '6pp';
const AddMemberDialog = ({ addMember, chatId,isLoadingAddMember, open, onClose }) => {
    const [members,setMembers]=useState([SampleUser]);
    const [selectedMembers,setSelectedMembers]=useState([]);
    const groupName=useInputValidation("");
    const selectedMemberHandler=(id)=>{
      setSelectedMembers((prev)=>
        prev.includes(id)?prev.filter((currElement)=>
          currElement!==id):[...prev,id]);
    };
const addMemberSubmitHandler=()=>{
    closeHandler();
};
const closeHandler=()=>{
    setSelectedMembers([]);
    setMembers([]);
};
  return (
    <Dialog open={open} onClose={onClose}>
      <Stack p={"2rem"} width={"20rem"} spacing={"2rem"}>
        <DialogTitle>Add Member</DialogTitle>
        <Stack spacing={"1rem"}>
          {members.length > 0 ? (
            members.map((i) => (
              <UserItem key={i._id} user={i} handler={selectedMemberHandler} 
              isAdded={
                selectedMembers.includes(i._id)
              } />
            ))
          ) : (
            <Typography textAlign={"center"}>No Friends</Typography>
          )}
        </Stack>
        <Stack 
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-evenly"}>
        <Button color={"error"} onClick={closeHandler} >Cancel</Button>
        <Button variant='contained' disabled={isLoadingAddMember} onClick={addMemberSubmitHandler}>Submit Changes</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
};

export default AddMemberDialog;
