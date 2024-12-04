import { Box, IconButton, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import ConstructionIcon from '@mui/icons-material/Construction';

const UserProfile = ( { params }: {params:any})  => {

    console.log(params)
    // const user = UserService.getUser(params[0]);
    // console.log(user)
    

    return (
        <Box display='flex' justifyContent='space-between'>
            <div style={{position:'relative', display:'inline-block', justifyContent:'center'}}>
                <Avatar sx={{ width:262, height:262}}>{'L'}</Avatar>
                <IconButton>
                    <EditRoundedIcon/>
                </IconButton>
                <ConstructionIcon fontSize="large" sx={{marginLeft:'auto'}}/>
                <Typography variant="h3">Years of Experience: 5</Typography>
                <Typography variant="h3">Total Jobs Done: 10</Typography>
                <Typography variant="h3">Most Recent Jobs</Typography>
            </div>
            <div style={{ display:'flex', flexDirection:'column'}}>
                
                
            </div>
        </Box>
    )
}

export default UserProfile;