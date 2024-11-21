'use client'
import AuthService from "@/service/AuthService";
import JobService from "@/service/JobService";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProfileDisplay from "./components/ProfileDisplay";


const Profile = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<{id:number,role:string,email:string,firstName:string,lastName:string}>({id:0,role:'',email:'',firstName:'',lastName:''});

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await AuthService.getSession();
                if(res.status === 200) {
                    setUser(res.data);
                }
            } catch(err) {
                console.log(err);
            }
            setLoading(false);
        }
        fetchData();
        console.log('test',Object.keys(user));
    },[]);
    
    return (
        <>
            <Box display='flex' sx={{ justifyContent:'start',alignItems:'center', backgroundColor:'pink', padding:'1%', marginX:'10%'}}>
            <Avatar>{user.firstName[0]}</Avatar>
                <Box display='flex' flexDirection='column' ml={3}>
                    <ProfileDisplay user={user} loading={loading}/>
                </Box>
            </Box>
        </>
    )
}

export default Profile;