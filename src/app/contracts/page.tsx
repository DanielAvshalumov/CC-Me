import { Typography, Box, List } from "@mui/material";
import JobsComponent from "../components/Jobs";

const Contracts = () => {


    
    return (
        <>
            <Box display='flex' flexDirection='column'>
                    <Typography variant="h5">Jobs</Typography>
                    <List>
                        <JobsComponent />
                    </List>
            </Box>
        </>
    )
}

export default Contracts;