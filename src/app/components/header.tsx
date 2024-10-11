import { Container, Typography, Box, AppBar, ButtonGroup, Button, IconButton, Slide, useScrollTrigger, styled, Toolbar, Grid2, TextField, Autocomplete } from "@mui/material";
import Link from 'next/link'
import { useState } from "react";
import SearchField from "./SearchField"


export default function Header(props : any) {

    

    return (
        <Container maxWidth="lg">
                <AppBar position='static' sx={{ backgroundColor:'beige', boxShadow:'none', display:'flex', marginTop:'20px'}}>
                    <Toolbar>
                        <Typography variant="h3" sx={{ color:'black', marginRight:'30px'}}>CC'Me</Typography>
                        {/* <TextField placeholder='Search' sx={{marginRight:'50px' }}/> */}
                        <Grid2 container spacing={3}>
                            <Grid2>
                                <Button>Contractors</Button>
                            </Grid2>
                            <Grid2 >
                                <Button>Contracts</Button>      
                            </Grid2>
                        </Grid2>

                        <SearchField />
                        
                        <Button sx={{ marginLeft:'auto' }}>Log In</Button>
                    </Toolbar>
                </AppBar>
    </Container>
    )
}