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
import { useJobContext } from "../contracts/provider";

export interface Job {
    field: string;
    company: string;
    location: string;
    views: number;
    ccs: number;
    description: string;
    owner : {
        firstName: string
    }
}

const Jobs = ({jobs}:{jobs: Job[]}) => {

    const { changeJob } : any = useJobContext();

    console.log(jobs)
    
    const jobElement = jobs?.map((job:Job,key: number) => {

                return (
                <ListItemButton key={key}>
                    <ListItem sx={{ width:'300px'}}>
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
                                <b>Company</b> - {`${job.company}`}<br />
                                <b>Views</b> - {`${job.views}`}<br />
                                <b>Location</b> - {`${job.location}`}<br/>
                                <b>Owner</b> - {`${job?.owner?.firstName}`}<br/>
                            </>}
                        />
                    </ListItem>     
                    <ListItemIcon style={{marginLeft:'auto'}}>
                        <Link href={{pathname:'/contracts'}}>
                            <NavigateNextIcon onClick={(e)=>{changeJob(job)}}/>
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