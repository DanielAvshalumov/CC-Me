'use client'
import { Edit, Delete } from "@mui/icons-material";
import { IconButton, Popover } from "@mui/material";
import { useState } from "react";
import CheckIcon from '@mui/icons-material/Check';

const PopoverOptions = () => {

    const [anchorEl, setAnchorEl] = useState(null);
  
    // Open the popover when the avatar is clicked
    const handleClick = (event:any) => {
      setAnchorEl(event.currentTarget);
    };
  
    // Close the popover when clicked outside
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    // Check if popover is open
    const open = Boolean(anchorEl);

    return (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
            }}
            transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
            }}
            sx={{
            padding: '8px',
            borderRadius: '10px',
            maxWidth: '200px',
            }}
        >
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <IconButton onClick={handleClose} aria-label="chat">
                <CheckIcon />
            </IconButton>
            <IconButton  onClick={decideMaybe} aria-label="edit">
                <Edit/>
            </IconButton>
            <IconButton onClick={handleClose} aria-label="delete">
                <Delete />
            </IconButton>
            </div>
        </Popover>
    )
}

export default PopoverOptions;