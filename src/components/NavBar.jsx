import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MenuIcon from '@mui/icons-material/Menu';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import Paper from '@mui/material/Paper';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(3),
    // paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
      minHeight: '20vh',
      background: '#051c00'
    },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    '@media all': {
        color: '#EBDCCB'
    },
}))

const StyledButton = styled(Button)(({ theme }) => ({
    '@media all': {
        color: '#7E9181',
        borderColor: '#7E9181',
        "&:hover": {
            borderColor:'#A3320B',
            backgroundColor:'#A3320B',
            color: '#EBDCCB'
        }
    },
}));

// const Item = styled(Paper)(({ theme }) => ({
//     // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     // ...theme.typography.body2,
//     backgroundColor:'#94849B',
//     color:'#320E3B',
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     // color: theme.palette.text.secondary,
// }));

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <StyledToolbar>
                    <Grid container>
                        <StyledTypography variant="h4" component="div" sx={{ flexGrow: 1}}>
                            Emily Berger
                        </StyledTypography>
                        <ButtonGroup variant="outlined" aria-label="large button group">
                            <StyledButton href="https://www.linkedin.com/in/eberge11" startIcon={<LinkedInIcon />}>LinkedIn</StyledButton>
                            <StyledButton href="https://github.com/heyitsM" startIcon={<GitHubIcon />}>GitHub</StyledButton>
                            <StyledButton href="mailto:eberge11@jhu.edu" startIcon={<EmailIcon />}>Email</StyledButton>
                        </ButtonGroup>
                    </Grid>
                </StyledToolbar>
            </AppBar>
        </Box>
    );
}