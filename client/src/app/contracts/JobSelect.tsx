"use client";
import { useEffect, useState } from "react";
import { Checkbox, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

const JobSelect = () => {

    const [checked, setChecked] = useState<string[]>(['']);
    const options = ['Plumbing','Electrical','Landscaping','Roofing','Carpentry','Painting','Home Renovation','Flooring','General Handyman']

    const handleToggle = (value: any) => {
        if(checked.includes(value.target.id)) {
            setChecked((prev: string[]) => {
                return prev.filter(item => item !== value.target.id);
            });
        } else {
            setChecked((prev: string[]) => {
                return [...prev,value.target.id]
            });
        }
    }

    useEffect(() => {
        console.log(checked);
    },[checked]);

    return (
        <>
            <List>
                {options.map(value => {

                    const label = value;
                    console.log('value',value)
                    return (
                        <ListItem key={value}>
                            {/* <ListItemButton onClick={handleToggle} dense> */}
                                    <Checkbox 
                                        edge='start'
                                        checked={checked.includes(value)}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{ 'aria-labelledby': `${value}`}}
                                        onClick={handleToggle}
                                        id={value}
                                    />
                                <ListItemText id={label} primary={value} />
                            {/* </ListItemButton> */}
                        </ListItem>
                    )
                }) 

                }
            </List>
        </>
    )
}

export default JobSelect;