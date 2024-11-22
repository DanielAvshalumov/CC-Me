import { Box, Avatar, Typography, IconButton, Button } from "@mui/material";
import avatar from  "../../public/images/avatar/11316980.png"
import EditRoundedIcon from '@mui/icons-material/EditRounded';

const ProfileSidebar = ({user} : {user:any}) => {

    console.log(user)
    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <div style={{position:'relative', display:'inline-block'}}>
                <Avatar sx={{ width:262, height:262}}>{user?.firstName[0]}</Avatar>
                <IconButton><EditRoundedIcon/></IconButton>
            </div>
            <Typography variant='h3'>{user.firstName+' '+user.lastName}</Typography>
            <Button variant='outlined' sx={{width:'120px'}}>Profile</Button>
            <Button variant='outlined' sx={{width:'120px'}}>Jobs</Button>
            <Button variant='outlined' sx={{width:'120px'}}>Settings</Button>
        </Box>
    )
}

export default ProfileSidebar;