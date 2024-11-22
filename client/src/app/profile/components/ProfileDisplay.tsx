import { Avatar, Box, FormControl, Input, InputLabel, TextField, Typography } from "@mui/material"


const ProfileDisplay = ( {user, loading} : {user:any, loading:boolean}) => {

    console.log('user',user);
    console.log(Object.entries(user))

    return (
        <Box display='flex' flexDirection='column'>
            {/* {!loading && Object.entries(user).map((key,value) => 
                <Box key={key} display='flex'>
                    <Typography>{key[0]}</Typography>
                    <TextField  placeholder={key[1]}/>
                </Box>
            )} */}
            <div style={{display:'flex', alignItems:'center'}}>
                <Typography variant="h4" sx={{marginRight:'10px'}}>Name:</Typography>
                <TextField value={`${user.firstName} ${user?.lastName}`} disabled/>
            </div>
            <div style={{display:'flex', alignItems:'center'}}>
                <Typography variant="h4" sx={{marginRight:'10px'}}>Email:</Typography>
                <TextField value={`${user.email}`} disabled/>
            </div>
            <Typography>Email</Typography>
            <Typography>Account</Typography>

        </Box>
    )
}

export default ProfileDisplay;