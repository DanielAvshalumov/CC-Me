'use client'
import { Box, List, Paper, Typography } from "@mui/material";
import JobSelect from "./JobSelect";
import Jobs, { Job } from "../components/Jobs";
import { useState } from "react";

const JobDetails = (props: Job) => {

    const [checked, setChecked] = useState<string[]>(['']);

    const toggleCheck = (arr:any) => {
        setChecked(arr)
    }


    return (
        <Box display='flex' style={{width:'95%', margin:'30px'}}>
            <JobSelect checked={checked} setChecked={toggleCheck}/>
            <Paper elevation={0} sx={{marginRight:'auto'}}>
                <Box display='flex' flexDirection='column' maxHeight={700} overflow='auto'>
                        <Typography variant="h5">Jobs</Typography>
                        <List>
                            <Jobs />
                        </List>
                </Box>
            </Paper>
            <Box display='flex' flexDirection='column' width={1000}>
                <Typography variant="h1">Carpentry</Typography>
                <Typography variant="h2">Company</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Box>
        </Box>
    )
}

export default JobDetails;