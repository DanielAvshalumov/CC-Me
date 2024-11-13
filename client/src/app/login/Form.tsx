'use client'
import JobService from "@/service/JobService";
import { Box, Button, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const Form = () => {


    const [form, setForm] = useState({email:'',password:''});

    const handleChange = (e: any) => {
        const id = e.target.id;
        const value = e.target.value;
        setForm(prev => ({...prev,[id]:value}));
    }

    const handleLogIn = async () => {
        console.log(form)
        try {
            const res = await JobService.login(form)
            const data = await res.data;
            console.log(data)
            // const res = await fetch('http://localhost:8080/auth/login', {method:"POST",body:JSON.stringify(form)});
            // const data = await res.json();
            // console.log(data, res.status);
        } catch(err) {
            console.log('err',err);
        }
        // const data = res.data;
        // const status = res.status;
        // console.log('call',data,status);
    }

    return (
        <Box display={'flex'} flexDirection='row' justifyContent='center'>
            <Box display={'flex'} flexDirection='column' alignContent='center' width={600}>
                <Typography variant="h1">Log in Page</Typography>
                <TextField id='email' sx={{width:'200px', marginLeft:'130px'}} placeholder="Email" onChange={handleChange}/>
                <TextField id='password' sx={{width:'300px', marginLeft:'130px'}} placeholder="Password" onChange={handleChange}/>
                <Button onClick={handleLogIn}>Log in</Button>
            </Box>
        </Box>
    )
}

export default Form;