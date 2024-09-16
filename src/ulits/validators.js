
import { isValidUsername } from "6pp"
export const usernameValidator=(username)=>{
    if(!isValidUsername(username))
    return   {valid:false,errorMessage: "Username is invalid",}
}