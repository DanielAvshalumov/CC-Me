import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import constructionAvatar from "../public/images/avatar/construction-3384689_1280.jpg";
import jsonData from "../public/json_samples/home_recents.json"

const Jobs = () => {

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

    return (
        <>
            {jobElement}
        </>
    )
}

export default Jobs;