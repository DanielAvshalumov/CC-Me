'use client'
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";


const Register = () => {

    const [form, setForm] = useState({email:'',password:'', firstName:'',lastName:'',passwordConfirmation:''});

    const handleChange = (e: any) => {
        const id = e.target.id;
        const value = e.target.value;
        setForm(prev => ({...prev,[id]:value}));
    }

    const handleRegister = async () => {
        const res = await axios.post("http://localhost:8080/api/users/create", form, {headers:{"Content-Type":'application/json'}});
        const data = await res.data
        console.log(data,res.status);
    }

    useEffect(() => {
        console.log('register', form);
    },[form])

    return (
        <Box display={'flex'} flexDirection='row' justifyContent='center'>
            <Box display={'flex'} flexDirection='column' alignContent='center' width={600}>
                <Typography variant="h1">Log in Page</Typography>
                <TextField id='email' sx={{width:'200px', marginLeft:'130px'}} placeholder="Email" onChange={handleChange}/>
                <TextField id='password' sx={{width:'300px', marginLeft:'130px'}} placeholder="Password" onChange={handleChange}/>
                <TextField id='firstName' sx={{width:'200px', marginLeft:'130px'}} placeholder="Email" onChange={handleChange}/>
                <TextField id='lastName' sx={{width:'300px', marginLeft:'130px'}} placeholder="Password" onChange={handleChange}/>
                <TextField id='passwordConfirmation' sx={{width:'200px', marginLeft:'130px'}} placeholder="Email" onChange={handleChange}/>
                <Button onClick={handleRegister}>Log in</Button>
            </Box>
        </Box>
    )
}

export default Register;