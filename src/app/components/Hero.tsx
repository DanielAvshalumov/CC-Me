"use client"
import { Box, Button, Container, IconButton } from "@mui/material";
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useState } from "react";

interface HeroBanner {
    imageURL : string,
    imageCaption : string
}

const Hero = (props:any) => {

    const [index, setIndex] = useState<number>(0)
    
    const images: HeroBanner[]= [
        // "/../public/images/Hero/electric.jpg",
        // "/../public/images/Hero/landscape.jpg",
        // "/../public/images/Hero/Home-Plumbing-Systems.jpg"
        {imageURL:"https://media.gettyimages.com/id/104292111/photo/home-remodel-blueprint-of-a-kitchens-electrical-plan.webp?s=2048x2048&w=gi&k=20&c=90SMJBkPYoKUMM2mrYMDrzhVmMEWy4InVpwymwvmZKI=",
        imageCaption:""},
        {imageURL:"https://media.istockphoto.com/id/651143168/photo/landscape-architect-design-backyard-plan-for-villa.jpg?s=1024x1024&w=is&k=20&c=D2ZtI-CdeolYE_364Jj-0Uy3e8snR8pzZWfpOJwVywM=",
        imageCaption:""},
        {imageURL:"https://pathmakerplumbing.com/wp-content/uploads/2023/03/Home-Plumbing-Systems.jpg",
        imageCaption:""}
    ];
    const imageComponent = images.map(image => (
        <Box
            component="img"
            src={image.imageURL}
            width={600}
            height={400}
        />
    ));


    return(
        <Box display="flex" justifyContent="center" mt={5}>
            <IconButton onClick={(e) => {
                setIndex((nextIndex) => {
                    if(index === 0) {
                        nextIndex = 2;
                    } else {
                        nextIndex -= 1;
                    }
                    return nextIndex;
                } )
            }}>
                <NavigateBeforeIcon />
            </IconButton>
            {imageComponent[index]}
            <IconButton onClick={(e) => {
                setIndex((nextIndex) => (nextIndex + 1)%3 );
            }}>
                <NavigateNextIcon />
            </IconButton>
        </Box>
    )
}

export default Hero;