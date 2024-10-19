import { Typography, Box, List, Paper } from "@mui/material";
import JobsComponent from "../components/Jobs";
import JobDetails from "./JobDetails";

const Contracts = () => {


    
    return (
        <Box display='flex' style={{width:'85%', margin:'30px'}}>
            <Paper elevation={0} sx={{marginRight:'auto'}}>
                <Box display='flex' flexDirection='column' maxHeight={700} overflow='auto'>
                        <Typography variant="h5">Jobs</Typography>
                        <List>
                            <JobsComponent />
                        </List>
                </Box>
            </Paper>
            <JobDetails />
        </Box>
    )
}

export default Contracts;