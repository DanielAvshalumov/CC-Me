'use client'
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Job } from "../components/Jobs";
import Link from "next/link";
import { getItem } from "./utils";
import { useEffect, useState } from "react";

const JobSelect = ({jobs}: {jobs:Job[]}) => {

    // const options = jobs.map(item => item.field);

    // const cachedJobs = await getItem('init');
    // const option = cachedJobs.map((item: { field: any; }) => item.field);
    const [options, setOptions] = useState(['']);
    // console.log("params",cachedJobs);

    const handleToggle = (e: any) => {
        if(options.includes(e.target.id)) {
            setOptions(prev => {
                return prev.filter(item => item !== e.target.id);
            })
        } else {
            setOptions(prev => ([...prev,e.target.id]))
        }
    }
    const optionList = jobs.map(item => item.field);
    console.log('is this being shown?')
    console.log('options jobs',jobs);

    return (
            <List>
                {optionList.map(value => {
                    const label = value;
                    return (
                        <Link key={label} href={`contracts/${value}`}>
                            <ListItemButton dense>
                                    <Checkbox 
                                        edge='start'
                                        checked={options.includes(value)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': `${value}`}}
                                        onClick={handleToggle}
                                        id={label}
                                    />
                                    
                                    
                                <ListItemText id={label} primary={label}>
                                </ListItemText>
                            </ListItemButton>
                        </Link>
                    )
                }) 

                }
            </List>
        
    )

}
export default JobSelect;