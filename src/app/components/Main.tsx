import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import jsonData from "../public/json_samples/home_recents.json";
import contractorAvatar from "../public/images/avatar/avatar-1300331_1280.png";
import constructionAvatar from "../public/images/avatar/construction-3384689_1280.jpg";
import siteAvatar from "../public/images/avatar/11316980.png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';


const Main = () => {

    const jobElement = jsonData.jobs.map((job: {
        field: string;
        company: string;
        location: string;
        views: number;
        ccs: number;}) => 
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt='construction worker' src={constructionAvatar.src} />
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <Typography variant="h6">
                                {`${job.field}`}
                            </Typography>
                        }
                        secondary={
                        <>
                            <b>Company</b> - {`${job.company}`}<br /><b>Views</b> - {`${job.views}`}<br /><b>Location</b> - {`${job.location}`}<br/><b>CC's</b> - ${job.ccs}
                        </>}
                    />
                </ListItem>
    )

    const contractorElement = jsonData.Contractors.map((contractor: {
        "name": string;
        "field": string[];
        "rating": number;
        "jobs" : number;
    }) => 
        <ListItemButton>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt='contractor' src={contractorAvatar.src}/>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography variant="h6">
                            {`${contractor.name}`}
                        </Typography>
                    }
                    secondary={
                        <>
                            <b>Field</b> - {`${contractor.field}`}<br /><b>Rating</b> - {`${contractor.rating}`}<br /><b>Jobs</b> - {`${contractor.jobs}`}
                        </>
                    }
                />
            </ListItem>
            <ListItemIcon style={{marginLeft:'auto'}}>
                    <NavigateNextIcon />
            </ListItemIcon>
        </ListItemButton>
    )

    const comapnyElement = jsonData.Companies.map((company: {
        "name": string;
        "field": string;
        "headquarters": string;
        "jobs": number;
    }) => 
        <ListItem>
            <ListItemAvatar>
                <Avatar alt='construction site' src={siteAvatar.src}/>
            </ListItemAvatar>
            <ListItemText
                primary={
                    <Typography variant="h6">
                        {`${company.name}`}
                    </Typography>
                }
                secondary={
                    <>
                        <b>Field</b> - {`${company.field}`}<br /><b>field</b> - {`${company.field}`}<br /><b>Headquarters</b> - {`${company.headquarters}`}<br /><b>Jobs</b> - {`${company.jobs}`}
                    </>
                }
            />
        </ListItem>
    )

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='h4' mb={3}>Most Recents</Typography>
            <Box display='flex' justifyContent='space-between' sx={{width:'85%'}} >
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Jobs</Typography>
                    <List>
                        {jobElement}
                    </List>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Contractors</Typography>
                    <List>
                        {contractorElement}
                    </List>
                </Box>
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Companies</Typography>
                    <List>
                        {comapnyElement}
                    </List>
                </Box>
            </Box>
        </Box>
    )
}

export default Main;