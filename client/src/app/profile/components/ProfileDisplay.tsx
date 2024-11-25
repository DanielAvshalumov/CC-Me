import { Avatar, Box, Button, FormControl, IconButton, Input, InputLabel, TextField, Typography } from "@mui/material"
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useEffect, useState } from "react";
import UserService from "@/service/UserService";


const ProfileDisplay = ( {user, loading} : {user:any, loading:boolean}) => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [name, setName] = useState<string>(`${user.firstName} ${user?.lastName}`);
    const [email, setEmail] = useState<string>(user?.email);
    const [company, setCompany] = useState<string>(user?.company);

    const handleEdit = () => {
        setIsDisabled(prev => !prev);
    }

    const handleSubmit = async () => {
        const [firstName, lastName] = name.split(' ');
        const requestBody = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            company: company
        }
        const res = await UserService.updateUser(requestBody);
        const data = await res.data;
        setIsDisabled(prev => !prev);
        console.log(data);
    }

    return (
        <Box display='flex' flexDirection='column'>
            <div style={{display:'flex', alignItems:'center'}}>
                <Typography variant="h4" sx={{marginRight:'10px'}}>Name:</Typography>
                <TextField value={name} disabled={isDisabled}
                onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
                <Typography variant="h4" sx={{marginRight:'10px'}}>Email:</Typography>
                <TextField value={email} disabled={isDisabled}
                onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
                <Typography variant="h4" sx={{marginRight:'10px'}}>Company:</Typography>
                <TextField value={company} disabled={isDisabled}
                onChange={(e)=>{setCompany(e.target.value)}}/>
            </div>
            {isDisabled &&
                <div style={{display:"flex", justifyContent:'start'}}>
                <IconButton onClick={handleEdit}><EditRoundedIcon/></IconButton>
            </div>}
            {
            !isDisabled && 
            <div>
                <Button onClick={handleSubmit}>Submit</Button> 
                <Button onClick={handleEdit}>Cancel</Button>
            </div>
            }
        </Box>
    )
}

export default ProfileDisplay;