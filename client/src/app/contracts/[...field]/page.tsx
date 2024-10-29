
import { GetServerSideProps } from "next";
import { Typography, Box, List, Paper } from "@mui/material";

import { Suspense, useEffect, useState } from "react";
import JobService from "@/service/JobService";
import JobDetails from "../JobDetails";

const Contracts = async ( { params } : {params: {field: string}}) => {

    let jobs = [];

    for(let i = 0; i < params.field.length; i++) {
        const res = await JobService.getJobsByField(params.field[i]);
        const data = await res.data;
        jobs.push(...data);
    }
    
    return (
        <Suspense fallback={<p>Loading feed</p>}>
            <JobDetails jobs={jobs}/>
        </Suspense>
    )
}

export default Contracts;