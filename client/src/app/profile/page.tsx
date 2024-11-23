'use client'
import AuthService from "@/service/AuthService";
import JobService from "@/service/JobService";
import { Avatar, Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ProfileDisplay from "./components/ProfileDisplay";
import ProfileSidebar from "./components/ProfileSidebar";
import UserService from "@/service/UserService";


const Profile = () => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<{id:number,role:string,email:string,firstName:string,lastName:string,company:string}>({id:0,role:'',email:'',firstName:'',lastName:'',company:''});

    const refreshUser = async () => {
        const res = await UserService.getUser(user.id);
        const data = await res.data;
        setUser(prev => ({...prev,...data}));
        console.log('user',user);
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await AuthService.getSession();
                const id = res.data.id;
                if(res.status === 200) {
                    const res = await UserService.getUser(id);
                    const data = await res.data;
                    setUser({
                        id:id,
                        role:data.role,
                        email:data.email,
                        firstName:data.firstName,
                        lastName:data.lastName,
                        company:data.company
                    });
                }
            } catch(err) {
                console.log(err);
            }
            setLoading(false);
        }
        fetchData();
        console.log('test',Object.keys(user));
    },[]);

    useEffect(() => {

    },[user])
    
    return (
        <Box display='flex' justifyContent={'center'}>
            <ProfileSidebar user={user}/>
            <Box display='flex' sx={{ justifyContent:'start',alignItems:'center', backgroundColor:'pink', padding:'1%', marginX:'10%'}}>
                <Box display='flex' flexDirection='column' ml={3}>
                    {!loading && <ProfileDisplay user={user} loading={loading} refreshUser={refreshUser}/>}
                </Box>
            </Box>
        </Box>
    )
}

export default Profile;