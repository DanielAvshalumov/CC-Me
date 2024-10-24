import { GetServerSideProps } from "next";
import { Typography, Box, List, Paper } from "@mui/material";
import Jobs, { Job } from "../components/Jobs";
import JobDetails from "./JobDetails";
import JobSelect from "./JobSelect";
import { Suspense, useEffect, useState } from "react";
import JobService from "@/service/JobService";

const Contracts = async () => {


    const fetchData =  async () => {
        const res = await fetch('http://localhost:8080/jobs');
        const data = await res.json();
        // const res = await JobService.getAllJobs().then((_res) => {
        //     return _res.data;
        // });
        console.log('data',data);
        const answer : Job = data.map((job: any) => job);
        return answer;
    }

    const data = fetchData();
    
    return (
        <Suspense fallback={<p>Loading feed</p>}>
            <JobDetails props={data}/>
        </Suspense>
    )
}

export default Contracts;