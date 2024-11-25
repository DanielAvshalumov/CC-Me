'use client'
import { Box, Avatar, Typography, IconButton, Button } from "@mui/material";
import avatar from  "../../public/images/avatar/11316980.png"
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Link from "next/link";
import UserService from "@/service/UserService";
import { useEffect, useState } from "react";
import AuthService from "@/service/AuthService";

const ProfileSidebar = () => {

    const [name, setName] = useState<string>('');
    const [con, setCon] = useState<boolean>(false);

    try {
        const fetchData = async () => {
            const _res = await AuthService.getSession();
            const {id} = await _res.data;
            const res = await UserService.getUser(id);
            const user = res.data;
            console.log(user);
            setName(user.firstName+' '+user.lastName);
            setCon(user.contractor);
        }
        fetchData();
    } catch(err) {
        console.log(err);
    }
    
    useEffect(() => {
        console.log(name,con);
    },[name,con])


    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <div style={{position:'relative', display:'inline-block'}}>
                <Avatar sx={{ width:262, height:262}}>{name[0]}</Avatar>
                <IconButton><EditRoundedIcon/></IconButton>
            </div>
            <Typography variant='h3'>{name}</Typography>
            <Button variant='outlined' sx={{width:'120px'}}><Link href="/profile">Profile</Link></Button>
            <Button variant='outlined' sx={{width:'120px'}} ><Link href="/profile/jobs">Jobs</Link></Button>
            <Button variant='outlined' sx={{width:'120px'}}><Link href="/profile/contracts">Settings</Link></Button>
            {con && <Button variant='outlined' sx={{width:'120px'}}>Contracts</Button>}
        </Box>
    )
}

export default ProfileSidebar;