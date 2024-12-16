"use client"
import JobService from "@/service/JobService";
import { createContext, useContext, useEffect, useState } from "react"

const JobContext = createContext({});

export function useJobContext() {
    return useContext(JobContext);
}

export default function JobProvider({ children } : {children:any}) {

    const [jobs, setJobs] = useState();
    const [job, setJob] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchJobs = async () => {
            const res = await JobService.getAllJobs();
            const data = await res.data;
            setJobs(data);
            setLoading(false);
        }
        fetchJobs();
    },[]);

    const changeJob = (job:any) => {
        setLoading(true);
        setJob(job);
        setLoading(false);
    }

    const value = {
        jobs,
        job,
        setJob,
        loading,
        setLoading,
        changeJob
    }

    return (
        <JobContext.Provider value={value}>
            { !loading  && children }
        </JobContext.Provider>
    )

}