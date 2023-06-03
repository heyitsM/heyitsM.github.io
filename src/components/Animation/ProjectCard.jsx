import { useEffect, useState, forwardRef } from "react";
import { useSpring, a } from '@react-spring/web'
import { styled, Typography, Link, Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './Animation.css'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const style = {width:'460px', height:'220px', display:'flex', cursor:'pointer'}
const StyledTypography = styled(Typography)(({theme}) => ({
    '@media all': {
        color: '#EBDCCB',
    },
}));

const StyledLink = styled(Button)(({theme}) => ({
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
    const [open, toggle] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: back ? 1 : 0,
        transform: `perspective(600px) rotateX(${back ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })
    const { img, title, text, link } = props;

    const flipping = (e) => {
        console.log(e);
        let classes = Array.from(e.target.classList.values())
        console.log(classes);
        let found = classes.includes('modal-toggle') || classes.includes('modal-close') || classes.includes('MuiDialog-container');
        found = found || classes.includes('MuiDialogActions-root') || classes.includes('MuiDialogContentText-root') || classes.includes('MuiDialogTitle-root');

        if (!found) {
            flip(!back)
        }
    }

    const handleButtonClick = (e) => {
        toggle(!open);
    }

    const handleClose = (e) => {
        toggle(false);
    }

    return (
        <div style={style} className="container" onClick={flipping}>
            <a.div style={{position:'absolute',  width:'460px', height:'220px', opacity: opacity.to(o => 1 - o), transform }}>
                <img src={img} alt="" style={{maxWidth:'100%', borderRadius:'4px', maxHeight:'100%'}}></img>
            </a.div>
            <a.div class="front" style={{position:'absolute', width:'460px', height:'220px', opacity, transform, rotateX: '180deg',}}>
                <div style={{width:'460px', height:'220px', backgroundColor:'#051c00', borderRadius:'4px'}}>
                    <StyledTypography variant="h6" style={{height:'140px', padding:'20px', textOverflow: 'ellipsis', overflow: 'clip'}}>{text}</StyledTypography>
                    <StyledLink className="modal-close" variant="h6" href={link}>GitHub</StyledLink>
                    <StyledLink className="modal-toggle" variant="h6" onClick={handleButtonClick} style={{justifySelf:'end', float:'right', paddingRight:'20px'}}>More...</StyledLink>
                </div>
            </a.div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                className="modal-close"
                aria-describedby="alert-dialog-slide-description"
                PaperProps={{style:{backgroundColor:'rgb(126, 145, 129)'}}}
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {text}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <StyledLink className="modal-close" variant="h6" href={link}>GitHub</StyledLink>
                    <StyledLink onClick={handleClose} className="modal-close">Close</StyledLink>
                </DialogActions>
            </Dialog>
        </div>
    );
}