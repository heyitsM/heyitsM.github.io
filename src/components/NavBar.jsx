import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import RadarIcon from '@mui/icons-material/Radar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { colors } from '..';
import { List } from '@mui/material';
import Divider from '@mui/material/Divider';

const StyledButton = styled(Button)(({ theme }) => ({
    '@media all': {
        color: colors['liver'],
        borderColor: colors['liver'],
        justifyContent:'flex-start',
        textTransform: 'capitalize',
        borderRadius: '0px',
        "&:hover": {
            borderColor:colors['caribbean-current'],
            backgroundColor:colors['caribbean-current'],
            color: colors['silver'],
            borderRadius: '0px',
        },
    },
}));

const ActiveStyledButton = styled(Button)(({ theme }) => ({
    '@media all': {
        borderColor:colors['ucla-blue'],
        backgroundColor:colors['ucla-blue'],
        color: colors['silver'],
        justifyContent:'flex-start',
        textTransform: 'capitalize',
        borderRadius: '0px',
        "&:hover": {
            borderColor:colors['caribbean-current'],
            backgroundColor:colors['caribbean-current'],
            color: colors['silver'],
            borderRadius: '0px',
        },
    },
}));

const StyledButtonGroup = styled(ButtonGroup)({
    // change the button group dividers color
    '& .MuiButtonGroup-grouped:not(:last-of-type)': {
      border: '0px solid'
    }
});

const StyledDivider = styled(Divider)(({}) => ({
    border: '.1px solid',
    borderColor: colors['walnut-brown']
}));

export default function NavBar(props) {
    const { button } = props;

    const about = <StyledButton disableRipple href="/" startIcon={<PersonIcon />}>About Me</StyledButton>;
    const activeAbout = <ActiveStyledButton disableRipple href="/" startIcon={<PersonIcon />}>About Me</ActiveStyledButton>;
    
    const projects = <StyledButton disableRipple href="/projects" startIcon={<RadarIcon />}>My Projects</StyledButton>;
    const activeProjects = <ActiveStyledButton disableRipple href="/projects" startIcon={<RadarIcon />}>My Projects</ActiveStyledButton>;
    
    const resume = <StyledButton disableRipple href="/resume" startIcon={<ArticleIcon />}>Resume</StyledButton>;
    const activeResume = <ActiveStyledButton disableRipple href="/resume" startIcon={<ArticleIcon />}>Resume</ActiveStyledButton>;

    return (
        <Box sx={{display: 'flex', alignItems: 'center', width: 'fit-content',}}>
            <StyledButtonGroup disableElevation variant="text" aria-label="large button group" orientation="horizontal">
                {button === 'about' ? activeAbout : about}
                {button === 'projects' ? activeProjects : projects}
                {button === 'resume' ? activeResume : resume}
            </StyledButtonGroup>
            <StyledDivider orientation="vertical" flexItem />
            <StyledButtonGroup disableElevation variant="text" aria-label="large button group" >
                <StyledButton disableRipple href="https://www.linkedin.com/in/eberge11" startIcon={<LinkedInIcon />}>LinkedIn</StyledButton>
                <StyledButton disableRipple href="https://github.com/heyitsM" startIcon={<GitHubIcon />}>GitHub</StyledButton>
                <StyledButton disableRipple href="mailto:eberge11@jhu.edu" startIcon={<EmailIcon />}>Email Me!</StyledButton>
            </StyledButtonGroup>
        </Box>
    );
}