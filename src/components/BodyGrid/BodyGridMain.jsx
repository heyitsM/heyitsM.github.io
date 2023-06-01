// import { Paper, Stack } from "@mui/material";
// import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useSpring, config, useScroll, animated } from '@react-spring/web'

// const Item = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     // ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     backgroundColor: 'rgba(0,0,0,0)',
// }));

export default function BodyGridMain() {
    const { scrollYProgress } = useScroll({
        onChange: ({ value: { scrollYProgress } }) => {
           console.log(scrollYProgress)
          },
          default: {
            immediate: true,
          },
    });

    useEffect(() => {
        console.log(scrollYProgress);
    }, [scrollYProgress])

    return (
        <>
           Main
        </>
    );
}