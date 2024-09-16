import { Dialog, DialogTitle, InputAdornment,Input, Stack, TextField, List, ListItem } from '@mui/material'
import React from 'react'
import {useInputValidation} from "6pp"
import { Search as SearchIcon } from '@mui/icons-material'
import UserItem from '../shared/UserItem'
import { SampleUser } from '../../constants/SampleData'
import { useState } from 'react'
const Search = () => {
  const search=useInputValidation("");
  const isLoadingSendFriendRequest=(id)=>{
    let isLoadingSendFriendRequest=false;
  };
  const [users,setUsers]=useState(SampleUser);
  const addFriendHandler=(id)=>{
    console.log(id);
  }
  return (
    <Dialog open>
    <Stack p={"2rem"} direction={"column"} width={"25rem"}>
      <DialogTitle textAlign={"center"}>Find People</DialogTitle>
      <TextField label="" value={search.value} onChange={search.changeHandler}
      variant="outlined"
      size="small"
      InputProps={{
        startAdornment:(
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        )
      }}/>
      <List>
        {
          users.map((i)=>(
            <UserItem user={i} key={i._id} handler={addFriendHandler} handlerIsLoading={isLoadingSendFriendRequest} />
          ))
        }
      </List>
    </Stack>
    </Dialog>
  )
}

export default Search
