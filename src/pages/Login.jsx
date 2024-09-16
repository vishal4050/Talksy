import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import {CameraAlt as CameraAltIcon, Gradient } from "@mui/icons-material"
import { VisuallyHiddenInput } from '../components/styles/StyledComponents'
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp'
import { usernameValidator } from '../ulits/validators'
import { bgimg } from '../constants/color'
const Login = () => {
    const [isLogin,setIsLogin]=useState(true);
    const toggleLogin=()=>setIsLogin(prv=>!prv);
    const name=useInputValidation("");
    const bio =useInputValidation("");
    const  username=useInputValidation("",usernameValidator);
    const password =useStrongPassword();

     const avatar=useFileHandler("single");
     const handleLogin=(e)=>{
        e.preventDefault();
     }
     const handleSignUp=(e)=>{
        e.preventDefault();
     }
    return (
    <div
    style={{
        backgroundImage:{bgimg},
        height: "100vh", 
        overflow:"auto"
    }}
    ><Container component={"main"} maxWidth="xs" sx={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    }}>
     <Paper
     elevation={3}
     sx={({
        marginTop:15,
        padding:4,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        background:"#d4f3f282"
        // background:"rgba(0,0,0,0.4)"

     })}
     >
        {
            isLogin?(<>
            <Typography variant='h5'>Login</Typography>
            <form style={{
                width:"100%",
                marginTop:"1rem"
            }}
            onSubmit={handleLogin}>
                <TextField 
                required 
                fullWidth
                label="Username"
                margin='normal'
                variant='outlined'
                value={username.value}
                onChange={username.changeHandler}
                />
                 <TextField 
                required 
                fullWidth
                label="Password"
                margin='normal'
                type='password'
                variant='outlined'
                value={password.value}
                onChange={password.changeHandler}
                />
                <Button 
                sx={{
                    marginTop:"1rem",
                } }
                variant='contained'
                fullWidth
                color='primary'
                type='submit'
                >Login</Button>
                <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
                <Button 
                variant='text'
                color='secondary'
                fullWidth
                onClick={toggleLogin}
        >SIGN UP Instead</Button>
            </form>
            </>):<>
             <Typography variant='h5'>SIGN UP</Typography>
      <form style={{
          width:"100%",
          marginTop:"1rem"
      }} 
      onSubmit={handleSignUp}>
        <Stack position={"relative"} width={"10rem"} margin={"auto"}>
        <Avatar 
        sx={{
            width:"10rem",
            height:"10rem",
            objectFit:"contain",
        }
        }
        src={avatar.preview}
        />
        {
    avatar.error &&(
        <Typography 
        m={"1rem auto"}
        width={"block"}
        color="error" 
        variant="caption">{avatar.error}</Typography>
    )}
        <IconButton 
        sx={{
            position:"absolute",
            bottom:"0",
            right: "0",
            bgcolor:"rgb(255,255,255,0.5)",
            ":hover":{bgcolor:"rgb(0,0,0,0.7)"}
        }}
        component="label">
            <>
         <CameraAltIcon/>
         <VisuallyHiddenInput type="file" onChange={avatar.changeHandler}/>  
            </>
        </IconButton>
        </Stack>
          <TextField 
  required 
  fullWidth
  label="Name"
  margin='normal'
  variant='outlined'
  value={name.value}
  onChange={name.changeHandler}
  />
          <TextField 
          required 
          fullWidth
          label="Username"
          margin='normal'
          variant='outlined'
          value={username.value}
          onChange={username.changeHandler}
          />
          {
            username.error &&(
                <Typography color="error" variant="caption">{username.error}</Typography>
            )
          }
            <TextField
  required 
  fullWidth
  label="BIO"
  margin='normal'
  variant='outlined'
  value={bio.value}
  onChange={bio.changeHandler}
  />
           <TextField 
          required 
          fullWidth
          label="Password"
          margin='normal'
          type='password'
          variant='outlined'
          value={password.value}
          onChange={password.changeHandler}
          />
            {
    password.error &&(
        <Typography color="error" variant="caption">{password.error}</Typography>
    )
  }
          <Button 
          sx={{
              marginTop:"1rem",
          } }
          variant='contained'
          fullWidth
          color='primary'
          type='submit'
          >SIGN UP</Button>
          <Typography textAlign={'center'} m={"1rem"}>OR</Typography>
          <Button 
          variant='text'
          color='secondary'
          fullWidth
          onClick={toggleLogin}
  >SIGN IN INSTEAD</Button>
      </form>
            </>     }
     </Paper>
    </Container>
    </div>
  )
}

export default Login
