'use client'
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Job } from "../components/Jobs";
import Link from "next/link";
import { getItem } from "./utils";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const JobSelect = ({jobs}: {jobs:Job[]}) => {
    
    const router = useRouter();
    const [options, setOptions] = useState(['']);

    const handleToggle = (e: any) => {
        if(options.includes(e.target.id)) {
            setOptions(prev => {
                router.push(usePathname().replace(e.target.id,''));
                return prev.filter(item => item !== e.target.id);
            })
        } else {
            setOptions(prev => ([...prev,e.target.id]))
        }
    }
    const optionList = jobs.map(item => item.field);

    return (
            <List>
                {jobs.map(value => {
                    const label = value.field;
                    return (
                        <Link key={label} href={`${usePathname()}/${label}`}>
                            <ListItemButton dense>
                                    <Checkbox 
                                        edge='start'
                                        checked={usePathname().includes(label)}
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