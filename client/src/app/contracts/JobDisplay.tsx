'use client'
import { Box, Paper, Typography } from "@mui/material"
import { useSearchParams } from "next/navigation"

const JobHero = () => {

    const searchParameters = useSearchParams();
    const params = searchParameters.entries().toArray();
    console.log(params.length);

    if(params.length === 0) {
        console.log('not here')
        return ;
    } else {

    return (
        <Paper>
            <Box display='flex' flexDirection='column' width={1000}>
                <Typography variant="h1">{params[0][1]}</Typography>
                <Typography variant="h2">{params[1][1]}</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur  elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </Box>
        </Paper>
    )
}
}

export default JobHero;