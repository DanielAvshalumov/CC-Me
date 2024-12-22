'use client'
import { Box, Avatar, Typography, IconButton, Button, Input } from "@mui/material";
import avatar from  "../../public/images/avatar/11316980.png"
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Link from "next/link";
import UserService from "@/service/UserService";
import { useEffect, useRef, useState } from "react";
import AuthService from "@/service/AuthService";
import s3Service from "@/service/s3Service";

const ProfileSidebar = () => {

    const [name, setName] = useState<string>('');
    const [id, setId] = useState(0);
    const [con, setCon] = useState<boolean>(false);
    const [url, setUrl] = useState<string>("");
    const fileRef = useRef(null);

    try {
        const fetchData = async () => {
            const _res = await AuthService.getSession();
            const {id} = await _res.data;
            const res = await UserService.getUser(id);
            const user = res.data;
            console.log(user);
            setId(user.id);
            setName(user.firstName+' '+user.lastName);
            setCon(user.contractor);
            setUrl(user.profilePictureUrl);
        }
        fetchData();
    } catch(err) {
        console.log(err);
    }
    
    useEffect(() => {
        console.log(name,con,id,url);
    },[name,con,id,url])

    const handleFileChange = async (e:any) => {
        const formData = new FormData();
        formData.append('file',e.target.files[0]);
        console.log(formData.get('file'));
        const res = await s3Service.uploadFile(formData,id);
        const data = res.data;
        console.log(data);
        setUrl(data);
        // try {
        //     const res = await fetch('http://localhost:8080/s3/upload', {method:'PATCH',body:formData,headers:{'Content-Type':'multipart/form-data; boundary=gc0p4Jq0M2Yt08jU534c0p'}})
        //     const data = res.json();
        //     console.log(data);
        // } catch(e) {
        //     console.log(e);
        // }
        // const formData = new FormData();
        // formData.append("image",fileRef.current)
    }


    return (
        <Box display='flex' flexDirection='column' alignItems='center'>
            <div style={{position:'relative', display:'inline-block'}}>
                {
                    url?.length === 0 ? 
                    <Avatar sx={{ width:262, height:262}}>{name[0]}</Avatar> :
                    <Avatar sx={{ width:262, height:262}} src={`${url}`}/>
                }
                <IconButton onClick={() => {fileRef?.current.click()}}>
                    <EditRoundedIcon/>
                </IconButton>
                <Input 
                    type='file'
                    onChange={handleFileChange}
                    // style={{ display:'none'}}
                />
            </div>
            <Typography variant='h3'>{name}</Typography>
            <Button variant='outlined' sx={{width:'120px'}}><Link href="/profile">Profile</Link></Button>
            <Button variant='outlined' sx={{width:'120px'}} ><Link href="/profile/jobs">Jobs</Link></Button>
            {con && <Button variant='outlined' sx={{width:'120px'}}><Link href="/profile/contractjobs">Contracts</Link></Button>}
        </Box>
    )
}

export default ProfileSidebar;