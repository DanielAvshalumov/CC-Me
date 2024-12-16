'use client'
import ApplicantService from "@/service/ApplicantService";
import JobService from "@/service/JobService";
import UserService from "@/service/UserService";
import { Avatar, AvatarGroup, Box, Button, Paper, Typography } from "@mui/material"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useJobContext } from "./provider";

const JobHero = ({ _job } : {_job:any}) => {

    const { job, loading } : any = useJobContext();
    console.log(job);
    const searchParameters = useSearchParams();
    const params = searchParameters.entries().toArray();
    

    const handleApply = async (e:any) => {
        const id = job.id;
        const res = await fetch(`http://localhost:8080/applicants/create/${id}`,{method:'POST',credentials:'include'});
        const data = res.json();
        console.log('data',data);
    }


    // if(params.length === 0) {
    //     return <Box width={1000}>
    //         <Typography variant="h1"> Choose a job</Typography>
    //     </Box>;
    // } else {

    return (
        <Paper>
            {!loading && job !== undefined &&
            <Box display={'flex'} flexDirection={'column'}>
                <Box display='flex' flexDirection='column' width={1000} padding={5} alignItems='start'>
                    <Typography variant="h2">{job.field}</Typography>
                    <Typography variant="h3">{job.company}</Typography>
                    <Typography variant="body2">{job.description}</Typography>
                    <br/>
                    <Typography variant="body2">Owner - {job.owner.firstName}</Typography>
                    <Button variant="contained" sx={{ marginTop: '15px'}} onClick={handleApply}>CC`Me</Button>
                </Box>
                <Box display='flex' flexDirection='column' width={1000} padding={5} sx={{marginTop:'300px'}}>
                    <Typography variant="body2">Cash {job.payment.amountRangeEnd > 0 ? 'Range' : 'Payment'}: ${job.payment.amountRangeStart} {job.payment.amountRangeEnd > 0 && `- $${job.payment.amountRangeEnd}`}</Typography>
                    <Typography variant="subtitle1"><i>Location</i> - {job.location}</Typography>
                    <Typography variant="body2"><i>Views</i> - {job.views}</Typography>
                    <Typography variant="caption">{job.field}</Typography>
                </Box>
            </Box>
}
        </Paper>
    )
// }
}

export default JobHero;