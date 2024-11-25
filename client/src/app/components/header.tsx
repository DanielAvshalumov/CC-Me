'use client'
import { Container, Typography, Box, AppBar, ButtonGroup, Button, IconButton, Slide, useScrollTrigger, styled, Toolbar, Grid2, TextField, Autocomplete, Avatar, Menu, MenuItem } from "@mui/material";
import Link from 'next/link'
import { cache, useEffect, useState } from "react";
import SearchField from "./SearchField"
import React from "react";
import AuthService from "@/service/AuthService";
import { usePathname, useRouter } from "next/navigation";
import ProfileMenu from "./ProfileMenu";

interface User {
    id: number,
    role: string,
    email: string,
    firstName: string,
    lastName: string
}

export default function Header() {

    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);   

    const handleLogOut = async () => {
        const res =  await AuthService.logout();
        const data = await res.data;
        console.log('logout data',data,'\nstatus',res.status);
        router.refresh();
        window.location.pathname = '/'
    }

    useEffect(() => {
        const fetchUser = cache(async () => {
            try {
                const res = await AuthService.getSession();
                const data = await res.data;
                if(res.status === 200) {
                    setUser(data);
                } else {
                    setUser(null);
                    console.log(res.status);
                }
            } catch (err) {
                console.log(err)
            }
        })
        fetchUser();
    },[]);

    return (
        <Container maxWidth="xl">
                <AppBar position='static' sx={{ backgroundColor:'beige', boxShadow:'none', display:'flex', marginTop:'20px',borderRadius:'30px', opacity:'60%', border: '4mm ridge rgba(211, 220, 50, .6)'}}>
                    <Toolbar>
                        <Typography variant="h3" sx={{ color:'black', marginRight:'30px'}}><a href="/">CC'Me</a></Typography>
                        <Grid2 container spacing={3} display={'flex'} alignItems='center'>
                            <Grid2>
                                {user && <ProfileMenu user={user}/>}
                            </Grid2>
                            <Grid2>
                                <Button>
                                    {/* <a href='/contracts'>Contracts</a> */}
                                    <Link href='/contracts'>Contracts</Link>
                                </Button>
                            </Grid2>
                            <Grid2 >
                                <Button>Contractors</Button>      
                            </Grid2>
                        </Grid2>
                        <SearchField />
                        {
                            !user ?
                            
                            <Button sx={{ marginLeft:'auto' }} onClick={() => {router.push('/login')}}>Sign In</Button> 
                            :
                            
                            <Button sx={{ marginLeft:'auto' }} onClick={handleLogOut}>Log out</Button>
                        }
                    </Toolbar>
                </AppBar>
    </Container>
    )
}