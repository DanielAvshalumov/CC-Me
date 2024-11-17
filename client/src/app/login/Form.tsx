'use client'
import AuthService from "@/service/AuthService";
import JobService from "@/service/JobService";
import { Box, Button, CircularProgress, FormControl, InputLabel, TextField, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


const Form = () => {

    const router = useRouter();
    const [form, setForm] = useState({email:'',password:''});
    const [loading, setLoading] = useState<boolean>(false);

    const handleChange = (e: any) => {
        const id = e.target.id;
        const value = e.target.value;
        setForm(prev => ({...prev,[id]:value}));
    }

    const handleLogIn = async () => {
        setLoading(true);
        try {
            const res = await JobService.login(form)
            const data = await res.data;
            console.log(data);
            router.push("/");
        } catch(err) {
            console.log('err',err);
        }
        setLoading(false);
    }


    return (
        <Box display={'flex'} flexDirection='row' justifyContent='center'>
            <Box display={'flex'} flexDirection='column' alignContent='center' width={600}>
                <Typography variant="h1">Log in Page</Typography>
                <TextField id='email' sx={{width:'200px', marginLeft:'130px'}} placeholder="Email" onChange={handleChange}/>
                <TextField id='password' sx={{width:'300px', marginLeft:'130px'}} placeholder="Password" onChange={handleChange}/>
                {loading ? 
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress/> 
                </div> :
                <Button onClick={handleLogIn}>Log in</Button>}
                <Button onClick={() => {AuthService.getSession().then(res=>{console.log(res.data)}).catch(err=>{console.log(err)})}}>Sesh</Button>
            </Box>
        </Box>
    )
}

export default Form;