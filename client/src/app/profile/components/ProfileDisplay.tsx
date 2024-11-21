import { Avatar, Box, InputLabel, TextField, Typography } from "@mui/material"


const ProfileDisplay = ( {user, loading} : {user:any, loading:boolean}) => {

    console.log('user',user);

    return (
        <Box display='flex' flexDirection='column'>
            <Typography>Welcome back, {user.firstName}</Typography>
            {!loading && Object.entries(user).map((key,value) => 
                <Box key={key} display='flex'>
                    <Typography>{}</Typography>
                    <TextField  placeholder={value.toString()}/>
                </Box>
            )}
        </Box>
    )
}

export default ProfileDisplay;