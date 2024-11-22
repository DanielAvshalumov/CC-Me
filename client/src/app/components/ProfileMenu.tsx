import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';

const ProfileMenu = ({ user }: {user:any}) => {

    const router = useRouter();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (e:any) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e:any) => {
        const val = e.target.innerText
        if(val === 'Profile') {
            router.push('/profile');
        }
        setAnchorEl(null);
    };

    return (
        <div>
        <IconButton onClick={handleClick}>
            <Avatar>{user.firstName[0]}</Avatar> 
        </IconButton>

        <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>My Account</MenuItem>
            <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
        </div>
    );
}

export default ProfileMenu;