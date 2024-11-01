'use client'
import { Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import constructionAvatar from "../public/images/avatar/construction-3384689_1280.jpg";
import jsonData from "../public/json_samples/home_recents.json"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from "react";
import React from "react";
import JobService from "@/service/JobService";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface Job {
    field: string;
    company: string;
    location: string;
    views: number;
    ccs: number;
}

const Jobs = async ({jobs}:{jobs: Job[]}) => {

    
    const jobElement = jobs.map((job:Job,key: number) => {

                return (
                <ListItemButton key={key}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar alt='construction worker' src={constructionAvatar.src} />
                        </ListItemAvatar>
                        <ListItemText 
                            primary={
                                <Typography variant="h6">
                                    {`${job.field}`}
                                </Typography>
                            }
                            secondary={
                            <>
                                <b>Company</b> - {`${job.company}`}<br /><b>Views</b> - {`${job.views}`}<br /><b>Location</b> - {`${job.location}`}<br/><b>CC's</b> - ${job.ccs}
                            </>}
                        />
                    </ListItem>     
                    <ListItemIcon style={{marginLeft:'auto'}}>
                        <Link href={`/contracts?field=${job.field}&company=${job.company}&location=${job.location}&views=${job.views}`}>
                            <NavigateNextIcon onClick={(e)=>{console.log(e.target)}}/>
                        </Link>
                    </ListItemIcon>
                </ListItemButton>)
    }
    )

    return (
        <>
            {jobElement}
        </>
    )
}

export default Jobs;