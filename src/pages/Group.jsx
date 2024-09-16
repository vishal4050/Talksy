import React, { lazy, memo, Suspense, useEffect, useState } from 'react';
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material';
import { Delete as DeleteIcon, Add as AddIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { sampleChats, SampleUser } from '../constants/SampleData';
import AvatarCard from '../components/shared/AvatarCard';
import { Link } from "../components/styles/StyledComponents";
import UserItem from '../components/shared/UserItem';
import { bgimg } from '../constants/color';

const ConfirmDeleteDialog = lazy(() => import('../components/dialogs/ConfirmDeleteDialog'));
const AddMemberDialog = lazy(() => import('../components/dialogs/AddMemberDialog'));

const Group = () => {
  const chatId = useSearchParams()[0].get("group");
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [groupNameUpdated, setGroupNameUpdated] = useState("");
  const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false);
  const [isAddMemberDialogOpen, setAddMemberDialogOpen] = useState(false); // Manage AddMemberDialog state

  useEffect(() => {
    if(chatId){setGroupName(`GroupName ${chatId}`);
    setGroupNameUpdated(`GroupName ${chatId}`);
  }
    return () => {
      setGroupName("");
      setGroupNameUpdated("");
      setIsEdit(false);
    };
  }, [chatId]);

  const navigateBack = () => {
    navigate("/");
  };

  const HandleMobile = () => {
    setMobileMenuOpen(prev => !prev);
  };

  const HandleMobileClose = () => {
    setMobileMenuOpen(false);
  };

  const UpdateGroupName = () => {
    setIsEdit(false);
    console.log("Group Name updated");
  };

  const openConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(true);
  };

  const closeConfirmDeleteHandler = () => {
    setConfirmDeleteDialog(false);
  };

  const openAddMemberHandler = () => {
    setAddMemberDialogOpen(true); 
  };

  const closeAddMemberHandler = () => {
    setAddMemberDialogOpen(false); 
  };

  const deleteHandler = () => {
    console.log("Group deleted");
  };
const removeMemberHandler=(id)=>{
  console.log("Remove Member",id);
}
  const IconBtn = (
    <>
      <Box
        sx={{
          display: {
            xs: "block",
            sm: "none",
            position: "fixed",
            right: "1rem",
            top: "1rem",
          },
        }}>
        <IconButton onClick={HandleMobile}>
          <MenuIcon />
        </IconButton>
      </Box>
      <Tooltip title="Back">
        <IconButton
          sx={{
            position: "absolute",
            top: "2rem",
            left: "2rem",
            bgcolor: "rgba(0,0,0,0.7)",
            color: "white",
            ":hover": {
              bgcolor: "rgba(0,0,0,0.6)",
            }
          }}
          onClick={navigateBack}>
          <KeyboardBackspaceIcon />
        </IconButton>
      </Tooltip>
    </>
  );

  const GroupName = (
    <Stack direction={"row"} alignItems={"center"} justifyContent={"center"} spacing={"1rem"} padding={"3rem"}>
      {isEdit ? (
        <>
          <TextField value={groupNameUpdated} onChange={e => setGroupNameUpdated(e.target.value)} />
          <IconButton onClick={UpdateGroupName}>
            <DoneIcon />
          </IconButton>
        </>
      ) : (
        <>
          <Typography variant="h4">{groupName}</Typography>
          <IconButton onClick={() => setIsEdit(true)}>
            <EditIcon />
          </IconButton>
        </>
      )}
    </Stack>
  );

  const ButtonGroup = (
    <Stack
      direction={{
        xs: "column-reverse",
        sm: "row",
      }}
      spacing={"1rem"}
      p={{
        xs: "0",
        sm: "1rem",
        md: "1rem 4rem",
      }}>
      <Button size="large" color='error' startIcon={<DeleteIcon />} onClick={openConfirmDeleteHandler}>
        Delete Group
      </Button>
      <Button size="large" variant="contained" startIcon={<AddIcon />} onClick={openAddMemberHandler}>
        Add Member
      </Button>
    </Stack>
  );

  return (
    <Grid container height={"100vh"}>
      <Grid
        item
        sx={{
          display: {
            xs: "none",
            sm: "block",
          }
        }} sm={4}>
        <GroupList myGroups={sampleChats} />
      </Grid>
      <Grid item xs={12} sm={8} sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        padding: "1rem 3rem",
      }}>
        {IconBtn}
        {groupName && <>
          {GroupName}
          <Typography>Members</Typography>
          <Stack
            maxWidth={"45rem"}
            width={"100%"}
            boxSizing={"border-box"}
            padding={{
              sm: "1rem",
              xs: "0",
              md: "1rem 4rem",
            }}
            spacing={"2rem"}
            bgcolor={bgimg}
            height={"50vh"}
            overflow={"auto"}
            >
              {
                SampleUser.map((i)=>(
                  <UserItem user={i} isAdded styling={{
                  boxShadow:"0 0 0.5rem rgba(0,0,0,0.2)",
                  padding:"1rem 2rem",
                  borderRadius:"1rem",
                  }} handler={removeMemberHandler}
                  key={i._id}/> 
                ))
              }
          </Stack>
          {ButtonGroup}
        </>}
      </Grid>

      {isAddMemberDialogOpen && (
        <Suspense fallback={<Backdrop open />}>
          <AddMemberDialog open={isAddMemberDialogOpen} onClose={closeAddMemberHandler} chatId={chatId} />
        </Suspense>
      )}

     
      {confirmDeleteDialog && (
        <Suspense fallback={<Backdrop open />}>
          <ConfirmDeleteDialog open={confirmDeleteDialog} handleClose={closeConfirmDeleteHandler} deleteHandler={deleteHandler} />
        </Suspense>
      )}

      <Drawer open={isMobileMenuOpen} onClose={HandleMobileClose}
      >
        <GroupList w={"50vw"} myGroups={sampleChats} chatId={chatId} />
      </Drawer>
    </Grid>
  );
};

const GroupList = ({ w = "100%", myGroups = [], chatId }) => (
  <Stack sx={{
    backgroundImage:bgimg,
    height:"100vh",
    overflow:"auto"
  }}>
    {myGroups.length > 0 ? (
      myGroups.map(group => <GroupListItem group={group} chatId={chatId} key={group._id} />)
    ) : (
      <Typography textAlign={"center"} padding={"1rem"}>No Group</Typography>
    )}
  </Stack>
);

const GroupListItem = memo(({ group, chatId }) => {
  const { _id, name, avatar } = group;

  return (
    <Link to={`?group=${_id}`} onClick={e => {
      if (chatId === _id) e.preventDefault();
    }}>
      <Stack direction={"row"} spacing={"1rem"} alignItems={"center"}>
        <AvatarCard avatar={avatar} />
        <Typography>{name}</Typography>
      </Stack>
    </Link>
  );
});

export default Group;
