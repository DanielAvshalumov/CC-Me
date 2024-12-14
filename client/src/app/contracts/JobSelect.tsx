'use client'
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Job } from "../components/Jobs";
import Link from "next/link";
import { getItem } from "./utils";
import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const JobSelect = ({jobs}: {jobs:Job[]}) => {
    
    const router = useRouter();
    const [options, setOptions] = useState(['']);
    const searchParams = useSearchParams();
    
    const handleToggle = (e: any) => {
        if(options.includes(e.target.id)) {
            setOptions(prev => {
                router.push(usePathname().replace(encodeURI(e.target.id),'')+`?${searchParams.toString()}`);
                return prev.filter(item => item !== e.target.id);
            })
        } else {
            setOptions(prev => ([...prev,e.target.id]));
        }
    }
    const optionList = Array.from(new Set(jobs.map(item => item.field)));

    return (
            <List sx={{ marginTop:'50px'}}>
                {jobs.map(value => {
                    const label = value.field;
                    const path = decodeURI(usePathname());
                    return (
                        value.status === "INCOMPLETE" &&
                        <Link key={label} href={`${path}/${label}/?${searchParams.toString()}`}>
                            <ListItemButton sx={{ background:'pink', borderRadius:'10px', marginBottom:'10px' }}>
                                    <Checkbox 
                                        edge='start'
                                        checked={path.includes(label)}
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