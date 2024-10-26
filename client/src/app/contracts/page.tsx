
import { GetServerSideProps } from "next";
import { Typography, Box, List, Paper } from "@mui/material";
import Jobs, { Job } from "../components/Jobs";
import JobDetails from "./JobDetails";
import JobSelect from "./JobSelect";
import { Suspense, useEffect, useState } from "react";
import JobService from "@/service/JobService";

const Contracts = async () => {


    const res = await JobService.getAllJobs();
    const data = await res.data;
    
    return (
        <Suspense fallback={<p>Loading feed</p>}>
            <JobDetails jobs={data}/>
        </Suspense>
    )
}

export default Contracts;