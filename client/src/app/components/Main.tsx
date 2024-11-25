import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import jsonData from "../public/json_samples/home_recents.json";
import contractorAvatar from "../public/images/avatar/avatar-1300331_1280.png";
import constructionAvatar from "../public/images/avatar/construction-3384689_1280.jpg";
import siteAvatar from "../public/images/avatar/11316980.png";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Hero from "./Hero";
import Jobs from "./Jobs";
import React, { Suspense } from "react";
import JobService from "@/service/JobService";
import UserService from "@/service/UserService";


const Main = async () => {

    const jobProps = await JobService.getAllJobs();
    const jobs = await jobProps.data;

    const workerProps = await UserService.getAllNonContractors();
    const workers = await workerProps.data;
    console.log(workers);

    const contractorElement = workers.map((contractor: {
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
                            {`${contractor.firstName}`}
                        </Typography>
                    }
                    secondary={
                        <>
                            <b>Field</b> - {`${contractor.company}`}<br /><b>Rating</b> - {`${contractor.rating}`}<br /><b>Jobs</b> - {`${contractor.jobs}`}
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
        <ListItemButton>
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
                <ListItemIcon style={{marginLeft:'auto'}}>
                    <NavigateNextIcon />
                </ListItemIcon>
            </ListItem>
        </ListItemButton>
    )

    return(
        
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Hero />
            <Typography variant='h4' mb={3}>Most Recents</Typography>
            <Box display='flex' justifyContent='space-between' sx={{width:'85%'}} >
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Jobs</Typography>
                    <List>
                        <Suspense fallback={<p>Loading feed</p>}>
                            <Jobs jobs={jobs}/>
                        </Suspense>
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