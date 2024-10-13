import { Box, Typography } from "@mui/material";
import jsonData from "../public/json_samples/home_recents.json"

const Main = () => {

    const jobElement = jsonData.jobs.map((job: {
        field: string;
        company: string;
        location: string;
        views: number;
        ccs: number;}) => {

    })

    return(
        <Box display='flex' flexDirection='column' alignItems='center'>
            <Typography variant='h4' mb={3}>Recents</Typography>
            <Box display='flex' justifyContent='space-evenly' sx={{width:'100%'}} >
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Jobs</Typography>
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