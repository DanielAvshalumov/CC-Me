
import { GetServerSideProps } from "next";
import { Typography, Box, List, Paper } from "@mui/material";

import { Suspense, useEffect, useState } from "react";
import JobService from "@/service/JobService";
import JobDetails from "../JobDetails";

const Contracts = async ( { params } : {params: {field: string}}) => {


    const res = await JobService.getJobsByField(params.field);
    const data = await res.data;
    
    return (
        <Suspense fallback={<p>Loading feed</p>}>
            <JobDetails jobs={data}/>
        </Suspense>
    )
}

export default Contracts;