'use client'
import ApplicantService from "@/service/ApplicantService";
import JobService from "@/service/JobService";
import UserService from "@/service/UserService";
import { Avatar, AvatarGroup, Box, Button, Paper, Typography } from "@mui/material"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react";
import { useJobContext } from "./provider";

const JobHero = ({ job } : {job:any}) => {


    const searchParameters = useSearchParams();
    const params = searchParameters.entries().toArray();
    

    const handleApply = async (e:any) => {
        const id = +params[5][1];
        const res = await fetch(`http://localhost:8080/applicants/create/${id}`,{method:'POST',credentials:'include'});
        const data = res.json();
        console.log('data',data);
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
                    <Typography variant="h2">{}</Typography>
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