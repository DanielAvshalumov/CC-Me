import { Box, Button, TextField, Typography } from "@mui/material"


const Login = () => {

    return (
        <Box display={'flex'} flexDirection='row' justifyContent='center'>
            <Box display={'flex'} flexDirection='column' alignContent='center' width={600}>
                <Typography variant="h1">Log in Page</Typography>
                <TextField sx={{width:'300px', marginLeft:'130px'}} placeholder="Username" />
                <TextField sx={{width:'300px', marginLeft:'130px'}} placeholder="Password" />
                <TextField sx={{width:'200px', marginLeft:'130px'}} placeholder="Email" />
                <Button>Log in</Button>
            </Box>
        </Box>
    )
}

export default Login;