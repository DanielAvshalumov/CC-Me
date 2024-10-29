import { Box, List, Paper, Typography } from "@mui/material";
import JobSelect from "./JobSelect";
import Jobs, { Job } from "../components/Jobs";
import { useEffect, useReducer, useState } from "react";

// const reducer = (state : any, action: any) => {
//     const { type, payload } = action;
//     switch(type) {
//         case 'init': {
//             console.log('dispatching')
//             const res = payload.map((job:Job) => ({
//                 field: job.field,
//                 company:job.company,
//                 location: job.location,
//                 views: job.views,
//                 ccs: job.ccs,
//                 checked: false
//             }));
//             return res;
//         }
//         case "check":{
//             console.log(state,'state')
//             return [...state,{
//                 ...payload,
//                 checked : !payload.checked
//             }
//             ]
//             // return {
//             //     ...state,
//             //     field: state.payload.field,
//             //     checked: !state.checked
//             // }}
//         }
//     }
// }

const JobDetails = ({jobs}: {jobs:Job[]}) => {

    // const [state, dispatch] = useReducer(reducer,[{
    //     field: "",
    //     company: "",
    //     location: "",
    //     views: 0,
    //     ccs: 0,
    //     checked: false
    // }]);

    
    // const toggleCheck = (arr:any) => {
    //     dispatch({type:'check', payload:job})
    //     console.log(state);
    //     console.log()
    // }

    // useEffect(() => {
    //     console.log('jobs before ue', state)
    //     console.log('jobs',jobs)
    //     dispatch({type:'init',payload:jobs});
    //     console.log('use effect',state);
    // },[])

    return (
        <Box display='flex' style={{width:'95%', margin:'30px'}}>
            <Paper elevation={0} sx={{marginRight:'auto'}}>
                <Box display='flex' flexDirection='column' maxHeight={700} overflow='auto'>
                        <Typography variant="h5">Jobs</Typography>
                        <List>
                            <Jobs jobs={jobs}/>
                        </List>
                </Box>
            </Paper>
            <Box display='flex' flexDirection='column' width={1000}>
                <Typography variant="h1">Carpentry</Typography>
                <Typography variant="h2">Company</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Box>
        </Box>
    )
}

export default JobDetails;