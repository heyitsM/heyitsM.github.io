import { Paper, Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    // ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0)',
}));

export default function BodyGridMain() {
    return (
        <MouseParallaxContainer springConfig={{ tension: 180, friction: 12 }} containerStyle={{maxWidth:'100vw', minHeight:'80vh', maxHeight:'100vh'}}>
            <MouseParallaxChild factorX={0.3} factorY={0.1}>
                <img src="/cloud2.png" style={{filter:"sepia(100%)"}} height="200vh" alt="" />
                <img src="/cloud2.png" style={{filter:"sepia(100%)"}} height="100vh" alt="" />
            </MouseParallaxChild>
            <MouseParallaxChild factorX={0.3} factorY={0.3}>
                <img src="/cloud2.png" style={{filter:"sepia(100%)"}} height="100vh" alt="" />
                <MouseParallaxChild factorX={0.2} factorY={0.1}>
                    <img src="/cloud2.png" style={{filter:"sepia(100%)"}} height="100vh" alt="" />
                </MouseParallaxChild>
            </MouseParallaxChild>
        </MouseParallaxContainer>
        
    );
}