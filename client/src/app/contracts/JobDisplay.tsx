'use client'
import JobService from "@/service/JobService";
import { Box, Button, Paper, Typography } from "@mui/material"
import { useSearchParams } from "next/navigation"

const JobHero = () => {

    const searchParameters = useSearchParams();
    const params = searchParameters.entries().toArray();
    console.log(params.length);

    const handleApply = async (e:any) => {
        // const res = await JobService.apply(7);
        // const data = await res.data;
        const res = await fetch(`http://localhost:8080/jobs/apply/${params[5][1]}`,{method:'POST',credentials:'include'});
        const data = res.json();
        console.log(data);
    }

    if(params.length === 0) {
        return <Box width={1000}>
            <Typography variant="h1"> Choose a job</Typography>
        </Box>;
    } else {

    return (
        <Paper>
            <Box display={'flex'} flexDirection={'column'}>
                <Box display='flex' flexDirection='column' width={1000} padding={5} alignItems='start'>
                    <Typography variant="h2">{params[0][1]}</Typography>
                    <Typography variant="h3">{params[1][1]}</Typography>
                    <Typography variant="body2">{params[4][1]}</Typography>
                    <Button variant="contained" sx={{ marginTop: '15px'}} onClick={handleApply}>CC`Me</Button>
                </Box>
                <Box display='flex' flexDirection='column' width={1000} padding={5} sx={{marginTop:'300px'}}>
                    <Typography variant="subtitle1"><i>Location</i> - {params[2][1]}</Typography>
                    <Typography variant="body2"><i>Views</i> - {params[3][1]}</Typography>
                    <Typography variant="caption">{params[4][1]}</Typography>
                </Box>
            </Box>
        </Paper>
    )
}
}

export default JobHero;