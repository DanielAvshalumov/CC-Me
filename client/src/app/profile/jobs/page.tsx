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

    const ongoingJobs = jobs?.filter((job:any) => job.status === "ONGOING");

    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Typography variant="h2">Applied Jobs</Typography>
            {!loading &&
                <Jobs jobs={jobs?.filter((job:any) => job.status === "INCOMPLETE")}/>
            }
            <Typography variant="h2">Ongoing</Typography>
            {!loading &&
                <Jobs jobs={ongoingJobs}/>
            }
        </div>
    )
}

export default ProfileJobs;