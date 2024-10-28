import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Job } from "../components/Jobs";
import Link from "next/link";
import { getItem } from "./utils";

const JobSelect = async ({jobs}:{jobs: Job[]}) => {

    // const options = jobs.map(item => item.field);

    const cachedJobs = await getItem('init');
    console.log('cached jobs',cachedJobs);
    const options = cachedJobs.map((item: { field: any; }) => item.field);

    return (
        
            <List>
                {options.map(value => {
                    const label = value;
                    return (
                        <Link key={value} href={`contracts/${value}`}>
                            <ListItemButton dense>
                                    <Checkbox 
                                        edge='start'
                                        checked={options.includes(value)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': `${value}`}}
                                        // onClick={handleToggle}
                                        id={value}
                                    />
                                    
                                    
                                <ListItemText id={label} primary={value}>
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