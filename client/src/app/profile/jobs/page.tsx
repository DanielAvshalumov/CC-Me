'use client'
import Jobs from "@/app/components/Jobs";
import AuthService from "@/service/AuthService";
import JobService from "@/service/JobService";
import { Typography } from "@mui/material"
import { useEffect, useState } from "react";


const ProfileJobs = () => {

    const [jobs, setJobs] = useState([{}]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            const _res = await AuthService.getSession();
            const id = await _res.data.id;
            const res = await JobService.getJobsByUser(id);
            const jobs = await res.data;
            console.log('jobs',jobs); 
            setJobs(jobs); 
            setLoading(false);
        }
        fetchData();
    },[])


    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Typography variant="h2">Current Jobs</Typography>
            {!loading && <Jobs jobs={jobs}/>}
            <Typography variant="h2">Completed Jobs</Typography>
        </div>
    )
}

export default ProfileJobs;