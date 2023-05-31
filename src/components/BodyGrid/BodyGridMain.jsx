// import { Paper, Stack } from "@mui/material";
// import { styled } from '@mui/material/styles';
// import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
import { useState } from "react";
import { useSpring, config, animated } from "react-spring";
import { Button } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     // ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     backgroundColor: 'rgba(0,0,0,0)',
// }));

export default function BodyGridMain() {
    const [showA, setShowA] = useState(true);

    const fadeStyles = useSpring({
        config: { ...config.wobbly },
        from: { opacity: 0 },
        to: {
            opacity: showA ? 1 : 0
        }
    });

    const buttonClicked = () => {
        setShowA(!showA);
    }

    return (
        <>
            <Button onClick={buttonClicked} variant="outlined">Click me</Button>
            <animated.div style={fadeStyles}>Hello world!!!!!!!!!!!!!</animated.div>
        </>
    );
}