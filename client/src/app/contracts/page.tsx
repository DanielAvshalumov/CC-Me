import { GetServerSideProps } from "next";
import { Typography, Box, List, Paper } from "@mui/material";
import Jobs from "../components/Jobs";
import JobDetails from "./JobDetails";
import JobSelect from "./JobSelect";
import { useEffect } from "react";
import JobService from "@/service/JobService";

// export async function getServerSideProps() {
    
// }

const Contracts = () => {

    

    return (
        <Box display='flex' style={{width:'95%', margin:'30px'}}>
            <JobSelect />
            <Paper elevation={0} sx={{marginRight:'auto'}}>
                <Box display='flex' flexDirection='column' maxHeight={700} overflow='auto'>
                        <Typography variant="h5">Jobs</Typography>
                        <List>
                            <Jobs />
                        </List>
                </Box>
            </Paper>
            <JobDetails />
        </Box>
    )
}

export default Contracts;