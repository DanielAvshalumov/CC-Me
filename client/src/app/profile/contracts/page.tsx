'use client'
import JobService from "@/service/JobService";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";


const ContractsPage = () => {

    const [jobForm, setJobForm] = useState({
        company:'',
        field:'',
        location:'',
        description:''
    });

    const handleChange = (e:any) => {
        const id = e.target.id;
        const value = e.target.value;
        console.log(id,value);
        setJobForm((prev):any => ({
            ...prev,
            [id]:value
        }));
    }

    useEffect(() => {
        console.log(jobForm);
    },[jobForm]);

    const handleSubmit = async () => {
        const res = await JobService.create(jobForm);
        const data = res.data;
        if(res.status == 200) {
            console.log(data);
        } else {
            console.log(res.status);
        }
    }

    return (
        <Box display='flex' flexDirection='column'>
            <Typography variant="h1">Submit a Job</Typography>
            <div style={{ display:'flex', alignItems:'center'}}>
                <Typography variant="h4">Company: </Typography>
                <TextField id='company' onChange={handleChange}/>
            </div>
            <div style={{ display:'flex', alignItems:'center'}}>
                <Typography variant="h4">Field: </Typography>
                <TextField id='field' value={jobForm.field} onChange={handleChange}/>
            </div>
            <div style={{ display:'flex', alignItems:'center'}}>
                <Typography variant="h4">Location: </Typography>
                <TextField id='location' value={jobForm.location} onChange={handleChange}/>
            </div>
            <div style={{ display:'flex', alignItems:'center'}}>
                <Typography variant="h4">Description: </Typography>
                <TextField id='description' value={jobForm.description} multiline fullWidth rows={10} onChange={handleChange}/>
            </div>
            <Button variant="contained" onClick={handleSubmit}>Create Job</Button>
        </Box>
    );
}

export default ContractsPage;