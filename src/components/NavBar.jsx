import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import RadarIcon from '@mui/icons-material/Radar';
// import { useEffect } from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
    '@media all': {
        color: '#051c00',
        borderColor: '#051c00',
        backgroundColor:'#EBDCCB',
        justifyContent:'flex-start',
        "&:hover": {
            // borderColor:'#320E3B',
            // backgroundColor:'#320E3B',
            // color: '#94849B'
            borderColor:'#A3320B',
            backgroundColor:'#A3320B',
            // color:'#051c00'
            color: '#EBDCCB',
        },
    },
}));

const StyledBox = styled(Box)(({theme}) => ({
    left: '8%',
    transform: 'translate(-8%, 0%)',
}))

const ActiveStyledButton = styled(Button)(({ theme }) => ({
    '@media all': {
        color: '#051c00',
        borderColor: '#051c00',
        backgroundColor:'#A3320B',
        justifyContent:'flex-start',
        "&:hover": {
            color: '#EBDCCB',
            borderColor: '#051c00',
            backgroundColor:'#A3320B',
        },
    },
}));

export default function NavBar(props) {
    const { button } = props;

    const about = <StyledButton disableRipple href="/about/" startIcon={<PersonIcon />}>About Me</StyledButton>;
    const activeAbout = <ActiveStyledButton disableRipple href="/about/" startIcon={<PersonIcon />}>About Me</ActiveStyledButton>;
    
    const projects = <StyledButton disableRipple href="/projects/" startIcon={<RadarIcon />}>My Projects</StyledButton>;
    const activeProjects = <ActiveStyledButton disableRipple href="/projects/" startIcon={<RadarIcon />}>My Projects</ActiveStyledButton>;
    
    const resume = <StyledButton disableRipple href="/resume/" startIcon={<ArticleIcon />}>Resume</StyledButton>;
    const activeResume = <ActiveStyledButton disableRipple href="/resume/" startIcon={<ArticleIcon />}>Resume</ActiveStyledButton>;

    return (
        <StyledBox position="fixed" >
            <ButtonGroup style={{marginTop:'5vh'}} variant="outlined" aria-label="large button group" orientation="vertical">
                {button === 'about' ? activeAbout : about}
                {button === 'projects' ? activeProjects : projects}
                {button === 'resume' ? activeResume : resume}
            </ButtonGroup>
        </StyledBox>
    );
}