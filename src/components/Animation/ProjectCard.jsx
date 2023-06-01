import { useEffect, useState } from "react";
import { useSpring, a } from '@react-spring/web'
import { styled, Typography, Link } from "@mui/material";

const style = {width:'460px', height:'220px', display:'flex', cursor:'pointer'}
const StyledTypography = styled(Typography)(({theme}) => ({
    '@media all': {
        color: '#EBDCCB',
    },
}));

const StyledLink = styled(Link)(({theme}) => ({
    '@media all': {
        // color: '#EBDCCB'
        color: '#EBDCCB',
        // backgroundColor: '#EBDCCB',
        textDecoration:'none',
        
        "&:hover": {
            // borderColor:'#A3320B',
            // backgroundColor:'#A3320B',
            color: '#A3320B',
            textDecoration: 'line-through', //line-through
        }
    },
}));

export default function ProjectCard(props) {
    const [back, flip] = useState(false);
    const { transform, opacity } = useSpring({
        opacity: back ? 1 : 0,
        transform: `perspective(600px) rotateX(${back ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    const { img, title, text, link } = props;

    const flipping = () => {
        flip(!back)
    }

    return (
        <div style={style} onClick={flipping}>
            <a.div class="back" style={{position:'absolute',  width:'460px', height:'220px', opacity: opacity.to(o => 1 - o), transform }}>
                <img src={img} alt="" style={{maxWidth:'100%', borderRadius:'4px', maxHeight:'100%'}}></img>
            </a.div>
            <a.div class="front" style={{position:'absolute', width:'460px', height:'220px', opacity, transform, rotateX: '180deg',}}>
                <div style={{width:'460px', height:'220px', backgroundColor:'#051c00', borderRadius:'4px'}}>
                    <StyledTypography variant="h6" style={{height:'140px', padding:'20px', textOverflow: 'ellipsis', overflow: 'clip'}}>{text}</StyledTypography>
                    <StyledLink variant="h6" href={link} style={{justifySelf:'end', float:'right', paddingRight:'20px'}}>More...</StyledLink>
                </div>
            </a.div>
        </div>
    );
}