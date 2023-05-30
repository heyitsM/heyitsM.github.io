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
    //   minHeight: '20vh',
      background: '#051c00',
    //   opacity:0.5
    },
}));

const StyledTypography = styled(Typography)(({theme}) => ({
    '@media all': {
        // color: '#EBDCCB'
        color: '#EBDCCB',
        // backgroundColor: '#EBDCCB',

        "&:hover": {
            // borderColor:'#A3320B',
            // backgroundColor:'#A3320B',
            color: '#A3320B',
            textDecoration: 'underline overline ', //line-through
        }
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

export default function TopBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <StyledToolbar>
                    <Grid container>
                        <Grid item component="div" sx={{flexGrow:1}}>
                            <div style={{width:'fit-content'}}>
                                <StyledTypography variant="h4">Emily Berger</StyledTypography>
                            </div>
                        </Grid>
                        <Grid item>
                            <ButtonGroup variant="outlined" aria-label="large button group" >
                                <StyledButton href="https://www.linkedin.com/in/eberge11" startIcon={<LinkedInIcon />}>LinkedIn</StyledButton>
                                <StyledButton href="https://github.com/heyitsM" startIcon={<GitHubIcon />}>GitHub</StyledButton>
                                <StyledButton href="mailto:eberge11@jhu.edu" startIcon={<EmailIcon />}>Email</StyledButton>
                            </ButtonGroup>
                        </Grid>
                    </Grid>
                </StyledToolbar>
            </AppBar>
            <StyledToolbar></StyledToolbar>
        </Box>
    );
}