import { Container, Typography, Box, AppBar, ButtonGroup, Button, IconButton, Slide, useScrollTrigger, styled, Toolbar, Grid2, TextField, Autocomplete } from "@mui/material";
import Link from 'next/link'
import { useState } from "react";
import SearchField from "./SearchField"
import React from "react";


export default function Header(props : any) {

    

    return (
        <Container maxWidth="lg">
                <AppBar position='static' sx={{ backgroundColor:'beige', boxShadow:'none', display:'flex', marginTop:'20px',borderRadius:'30px', opacity:'60%', border: '4mm ridge rgba(211, 220, 50, .6)'}}>
                    <Toolbar>
                        <Typography variant="h3" sx={{ color:'black', marginRight:'30px'}}><a href="/">CC'Me</a></Typography>
                        <Grid2 container spacing={3}>
                            <Grid2>
                                <Button>
                                    <a href='/contracts'>Contracts</a>
                                </Button>
                            </Grid2>
                            <Grid2 >
                                <Button>Contractors</Button>      
                            </Grid2>
                        </Grid2>
                        <SearchField />
                        <Button sx={{ marginLeft:'auto' }}>Sign In</Button>
                    </Toolbar>
                </AppBar>
    </Container>
    )
}