
import { GetServerSideProps } from "next";
import { Typography, Box, List, Paper } from "@mui/material";
import Jobs, { Job } from "../components/Jobs";
import JobDetails from "./JobDetails";
import JobSelect from "./JobSelect";
import { Suspense, useEffect, useState } from "react";
import JobService from "@/service/JobService";
import { unstable_cache } from "next/cache";
import { cache } from 'react';
import {preload, getItem} from './utils';

const Contracts = async () => {

    const res = await JobService.getAllJobs();
    const jobs = res.data;

    
    return (
        <Suspense fallback={<p>Loading feed</p>}>
            <JobDetails jobs={jobs}/>
        </Suspense>
    )
}

export default Contracts;