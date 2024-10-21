import { GetServerSideProps } from "next";
import { Typography, Box, List, Paper } from "@mui/material";
import Jobs from "../components/Jobs";
import JobDetails from "./JobDetails";
import JobSelect from "./JobSelect";


const Contracts = () => {

    const options = ['Plumbing','Electrical','Landscaping','Roofing','Carpentry','Painting','Home Renovation','Flooring','General Handyman'];
    
    
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