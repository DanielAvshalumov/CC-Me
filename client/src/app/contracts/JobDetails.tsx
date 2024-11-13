import { Box, List, Paper, Typography } from "@mui/material";
import JobSelect from "./JobSelect";
import Jobs, { Job } from "../components/Jobs";
import { useEffect, useReducer, useState } from "react";



const JobDetails = ({jobs}: {jobs:Job[]}) => {

    

    return (
        <Box display='flex' style={{width:'95%', margin:'30px'}}>
            <Paper elevation={0} sx={{marginRight:'auto'}}>
                <Box display='flex' flexDirection='column' maxHeight={700} overflow='auto'>
                        <Typography variant="h5"></Typography>
                        <List>
                            <Jobs jobs={jobs}/>
                        </List>
                </Box>
            </Paper>
        </Box>
    )
}

export default JobDetails;