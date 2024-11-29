'use client'
import Jobs from "@/app/components/Jobs";
import AuthService from "@/service/AuthService";
import JobService from "@/service/JobService";
import { Typography } from "@mui/material"
import { useEffect, useState } from "react";


const ProfileJobs = () => {

    


    return (
        <div style={{display:'flex',flexDirection:'column'}}>
            <Typography variant="h2">Current Jobs</Typography>
            {/* {!loading && <Jobs jobs={jobs}/>} */}
            <Typography variant="h2">Completed Jobs</Typography>
        </div>
    )
}

export default ProfileJobs;