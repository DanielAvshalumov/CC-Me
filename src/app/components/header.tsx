import { Container, Typography, Box, AppBar, ButtonGroup, Button, IconButton, Slide, useScrollTrigger, styled, Toolbar, Grid2 } from "@mui/material";
import Link from 'next/link'

export default function Header(props : any) {

    return (
        <Container maxWidth="lg">
                <AppBar position='static' sx={{ backgroundColor:'beige', boxShadow:'none', display:'flex' }}>
                    <Toolbar>
                        <Typography variant="h3" sx={{ color:'black', marginRight:'100px'}}>CC'Me</Typography>
                        <Grid2 container spacing={3}>
                            <Grid2>
                                <Button>Contractors</Button>
                            </Grid2>
                            <Grid2 >
                                <Button>Contracts</Button>      
                            </Grid2>
                        </Grid2>
                        <Button sx={{ marginLeft:'auto' }}>Log In</Button>
                    </Toolbar>
                </AppBar>
    </Container>
    )
}