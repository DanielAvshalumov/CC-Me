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

    const [jobs, setJobs] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [applicantId, setApplicantId] = useState<number>();

    const decide = async (e:any) => {
        e.stopPropagation();
        setLoading(true);
        const decision = e.target.id;
        console.log(decision)
        const res = await ApplicantService.decideMaybe(applicantId,decision);
        const data = await res.data;
        const newJobs = jobs.map((job:any) => {
            for(let i = 0; i < job.applicants.length; i++) {
            const app = job.applicants[i];
                if(applicantId === app.id) {
                    return {
                        ...job,
                        applicants: [...job.applicants.filter((_app:any) => _app.id !== app.id),{
                            sender: app.sender,
                            contractor: app.contractor,
                            created_at: app.created_at,
                            id: app.id,
                            decision: `${decision}`
                        }]
                    }
                }
            }
            return job;
        });
        console.log('newjobs',newJobs);
        setJobs(newJobs);
        console.log(data);
        handleClose();
        setLoading(false);
    }

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            const _res = await AuthService.getSession();
            const id = await _res.data.id;
            const res = await JobService.getJobsByUser(id);
            const jobs = await res.data;
            jobs.forEach( async (item:any) => {
                const res = await ApplicantService.getApplicantsByJob(item.id);
                const data = await res.data;
                item.applicants = data; // I dont know if this makes it work or not but I dont think it does
                setJobs((prev:any) => ([
                    ...prev.filter((el:any) => el.id !== item.id),
                    {
                        ...item,
                        applicants: data
                    }
                ]))
            });
            setLoading(false);
        }
        fetchData();
        console.log('after',jobs);
    },[])

    const jobsElement = jobs.map((job:any) => {
        
        const undecided : any = [];
        const maybe : any = [];

        for(const app of job?.applicants)
         {
            if(app.decision === "MAYBE") {
                maybe.push(
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
                            <Button id={"ACCEPTED"} onClick={decide} aria-label="chat">
                                Accept
                            </Button>
                            <Button id={"MAYBE"} onClick={decide} aria-label="edit">
                                Maybe
                            </Button>
                            <IconButton onClick={handleClose} aria-label="delete">
                                <Delete />
                            </IconButton>
                            </div>
                        </Popover>
                    </>
                )
            } else if(app.decision === "UNDECIDED"){
                undecided.push(
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
                            <Button id={"ACCEPTED"} onClick={decide} aria-label="chat">
                                Accept
                            </Button>
                            <Button id={"MAYBE"} onClick={decide} aria-label="edit">
                                Maybe
                            </Button>
                            <IconButton onClick={handleClose} aria-label="delete">
                                <Delete />
                            </IconButton>
                            </div>
                        </Popover>
                    </>
                )
            } else {
                return null;
            }
        }
    

        return (
            <Box display='flex' flexDirection='column'>
                <Typography variant="h4">{job?.field}</Typography>
                <div style={{display:'flex', flexDirection:'column'}}>
                    <Typography variant="h6">Undecided</Typography>
                    <div style={{display:'flex'}}>
                        {!loading && undecided}
                    </div>
                    <Typography variant="h6">Maybe</Typography>
                    <div style={{display:'flex'}}>
                        {!loading && maybe}
                    </div>
                </div>
            </Box>
        )
    });

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