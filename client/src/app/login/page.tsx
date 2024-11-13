import JobService from "@/service/JobService"
import { Box, Button, TextField, Typography } from "@mui/material"
import Form from "./Form";
import Register from "./Register";


const Login = () => {

    const handleLogIn = (e: Event) => {
        console.log(e.target);
        // const res = JobService.login()
    }

    return (
        <>
            <Form/>
            <Register />
        </>
    )
}

export default Login;