'use client'
import Jobs from "@/app/components/Jobs";
import AuthService from "@/service/AuthService";
import JobService from "@/service/JobService";
import { Typography } from "@mui/material"
import { Suspense, useEffect, useState } from "react";
import { useAuth } from "../components/provider";


const ProfileJobs = () => {

    const {currentUser, loading} : any = useAuth();
    console.log('profileJobs',currentUser,loading);

    const [jobs, setJobs] = useState();
    useEffect(() => {
        const fetchData = async () => {
            const res = await JobService.getAppliedJobs(currentUser.id);
            const data = await res.data;
            setJobs(data);
        }
        fetchData();
    },[]);

    useEffect(() => {
        console.log(jobs);
    },[jobs]);

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Typography variant="h2">Current Jobs</Typography>
            {!loading &&
            // <Suspense>
                <Jobs jobs={jobs}/>
            // </Suspense>
            }
            <Typography variant="h2">Completed Jobs</Typography>
        </div>
    )
}

export default ProfileJobs;