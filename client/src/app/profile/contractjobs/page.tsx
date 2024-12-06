'use client'
import Jobs from "@/app/components/Jobs";
import AuthService from "@/service/AuthService";
import JobService from "@/service/JobService";
import { Avatar, Box, Button, IconButton, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText, Popover, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import contractorAvatar from "../../public/images/avatar/avatar-1300331_1280.png";
import { Edit, Delete } from '@mui/icons-material';
import CheckIcon from '@mui/icons-material/Check';
import ApplicantService from "@/service/ApplicantService";

enum Decision {
    UNDECIDED,
    MAYBE,
    ACCEPTED
}


const ContractsPage = () => {

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

    //

    const [view, setView] = useState(false);
    const [id, setId] = useState<number>();

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

    const [jobs, setJobs] = useState([{}]);
    const [loading, setLoading] = useState<boolean>(false);
    const [applicantId, setApplicantId] = useState<number>();

    const decideMaybe = async (e:any) => {
        console.log(applicantId);
        const res = await ApplicantService.decideMaybe(applicantId,Decision.MAYBE);
        const data = res.data;
        console.log(data);
    }

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            const _res = await AuthService.getSession();
            const id = await _res.data.id;
            setId(id);
            const res = await JobService.getJobsByUser(id);
            const jobs = await res.data;
            // setJobs(jobs); 
            jobs.forEach( async (item:any) => {
                const res = await ApplicantService.getApplicantsByJob(item.id);
                const data = await res.data;
                item.applicants = data;
                setJobs(prev => ([
                    ...(prev.filter((el:any) => el.id !== item.id)),
                    {
                        ...item,
                        applicants: data
                    }
                ]))
            });
            setLoading(false);
        }
        fetchData();
    },[])

    const jobsElement = jobs.map((job:any) => 
        
    

            <Box display='flex' flexDirection='column'>
                <Typography variant="h4">{job.field}</Typography>
                <div style={{display:'flex'}}>
                {job?.applicants?.map((app:any) => (
                    <>
                    <Avatar onClick={(event:any) => 
                    {
                        setAnchorEl(event.currentTarget);
                        setApplicantId(app.id);
                    }} sx={{cursor:'pointer'}}>{app.sender.firstName[0]}
                    </Avatar>
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
          {/* Icon Buttons inside the popover */}
          <IconButton onClick={handleClose} aria-label="chat">
            <CheckIcon />
          </IconButton>
          <IconButton  onClick={decideMaybe} aria-label="edit">
            <Edit id={app.id}/>
          </IconButton>
          <IconButton onClick={handleClose} aria-label="delete">
            <Delete />
          </IconButton>
        </div>
      </Popover>
                    </>
                ))}
                </div>
            </Box>
        
    );

    return (
        <div>
            {view ?
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
            </Box> :
            <div style={{display:'flex',flexDirection:'column'}}>
            {!loading && jobsElement}
            </div>}
            <Button onClick={() => {setView(prev=>!prev)}}>Turn</Button>
        </div>
    );
}

export default ContractsPage;