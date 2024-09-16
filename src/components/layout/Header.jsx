import React, { lazy, Suspense, useState } from 'react';
import { AppBar, Backdrop, Box, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'; 
import { orange } from '../../constants/color';
import { Add as AddIcon, Group as GroupIcon, Menu as MenuIcon, Search as SearchIcon, Logout as LogoutIcon, Notifications as NotificationIcon } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
const SearchDialog=lazy(()=>import("../specific/Search"));
const NotificationDialog=lazy(()=>import("../specific/Notification"));
const NewGroupsDialog=lazy(()=>import("../specific/NewGroups"));
const Header = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNewGroup, setIsNewGroup] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const [isNotification, setIsNotification] = useState(false);

  const handleMobile = () => {
    console.log("Mobile");
    setIsMobile(prev => !prev);
  };

  const openSearch = () => {
    console.log("Search Mobile");
    setIsSearch(prev => !prev);
  };

  const openNewGroup = () => {
    console.log("New Group");
    setIsNewGroup(prev => !prev);
  };

  const notificationHandler = () => {
    console.log("Notification");
    setIsNotification(prev => !prev);
  };

  const logoutHandler = () => {
    console.log("Logout");
    setIsLogout(prev => !prev);
  };

  const navigateToGroup = () => navigate("/groups");

  return (
    <>
    <Box sx={{ flexGrow: 1, height: "4rem" }}> 
      <AppBar
        position="static"
        sx={{
          bgcolor: orange,       
          height: "100%",      
        }}
      >
        <Toolbar>
          <Typography
            variant="h6" 
            sx={{
              display: { xs: "none", sm: "block" }
            }}
          >
            Chathub
          </Typography>

          <Box
            sx={{
              display: { xs: "block", sm: "none" }
            }}
          >
            <IconButton color='inherit' onClick={handleMobile}>
              <MenuIcon />
            </IconButton>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          <Box>
            <IconBtn 
              title={"Search"} 
              icon={<SearchIcon />} 
              onClick={openSearch}  
            />
            <IconBtn 
              title={"New Group"} 
              icon={<AddIcon />}  
              onClick={openNewGroup}  
            />
            <IconBtn 
              title={"Manage Group"} 
              icon={<GroupIcon />}  
              onClick={navigateToGroup} 
            />
            <IconBtn 
              title={"Notification"}
              icon={<NotificationIcon />}
              onClick={notificationHandler}
            />
            <IconBtn 
              title={"Logout"}
              icon={<LogoutIcon />}
              onClick={logoutHandler}
            />
          </Box>                 
        </Toolbar>
      </AppBar>
    </Box>
{isSearch &&<Suspense fallback={<Backdrop open/>}><SearchDialog/></Suspense>
}
{isNotification &&<Suspense fallback={<Backdrop open/>}><NotificationDialog/></Suspense>
}
{isNewGroup&&<Suspense fallback={<Backdrop open/>}><NewGroupsDialog/></Suspense>
}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon} 
      </IconButton>
    </Tooltip>
  );
};

export default Header;
