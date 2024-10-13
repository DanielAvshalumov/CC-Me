import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import jsonData from "../public/json_samples/home_recents.json"

const Main = () => {

    const jobElement = jsonData.jobs.map((job: {
        field: string;
        company: string;
        location: string;
        views: number;
        ccs: number;}) => 
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt='construction worker' src='../public/images/avatar/construction-3384689_1280.jpg' />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography variant="h6">
                                {`${job.field}`}
                            </Typography>
                        }
                        secondary={
                        <Typography>
                            <b>Company</b> - {`${job.company}\t`}<b>Views</b> - {`${job.views}`}<br />Location - {`${job.location}\t`}CC's - ${job.ccs}
                        </Typography>}
                    />
                </ListItem>
    )

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='h4' mb={3}>Recents</Typography>
            <Box display='flex' justifyContent='space-evenly' sx={{width:'100%'}} >
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Jobs</Typography>
                    <List>
                        {jobElement}
                    </List>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Contractors</Typography>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Companies</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Main;