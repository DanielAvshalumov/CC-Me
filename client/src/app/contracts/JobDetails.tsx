'use client'
import { Box, List, Paper, Typography } from "@mui/material";
import JobSelect from "./JobSelect";
import Jobs, { Job } from "../components/Jobs";
import { useEffect, useReducer, useState } from "react";
import { useJobContext } from "./provider";
import JobHero from "./JobDisplay";



const JobDetails = ({ jobs } : {jobs:any}) => {


    return (
        <Box display='flex' style={{width:'95%', margin:'30px'}}>
            <Paper elevation={0} sx={{marginRight:'auto'}}>
                <Box display='flex' flexDirection='column' maxHeight={700} overflow='auto'>
                        <Typography variant="h5"></Typography>
                        <List>
                            <Jobs jobs={jobs.filter((job:any) => job.status === 'INCOMPLETE')}/>
                        </List>
                </Box>
            </Paper>
            <JobHero job={jobs} />
        </Box>
    )
}

export default JobDetails;