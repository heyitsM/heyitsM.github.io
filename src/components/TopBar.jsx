import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import { useState, useEffect } from 'react';
import { colors } from '../index.js';
import NavBar from './NavBar.jsx';

//silver cinereous liver caribbean-current ucla-blue

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex-start',
    paddingTop: theme.spacing(2),
    // paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    '@media all': {
        background: 'rgba(5, 28, 0, 0)',
    },
}));

const StyledTypography = styled(Link)(({theme}) => ({
    '@media all': {
        color: colors['liver'],
        textDecoration:'none',
        
        "&:hover": {
            color: colors['walnut-brown'],
            textDecoration: 'line-through', //line-through
        }
    },
}));

const SubTitle = styled(Typography)(({ theme }) => ({
    color: colors['walnut-brown'],
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({    
    '@media all': {
      background: 'rgba(0,0,0,0)',
    //   backdropFilter:'blur(3px)',
    //   zIndex:0,
    },
}));

export default function TopBar(props) {
    const { active } = props;

    return (
        <Box sx={{ flexGrow: 1 }} >
            <StyledAppBar position="fixed" elevation={0}>
                <StyledToolbar>
                    <Grid container style={{alignItems:'center'}} spacing={2}>
                        <Grid item component="div" sx={{flexGrow:1}} xs={12}>
                            <div style={{width:'fit-content'}}>
                                <StyledTypography href="/" variant="h4">Emily Berger</StyledTypography>
                                <SubTitle variant="h6">Prospective Software Engineer</SubTitle>
                            </div>
                        </Grid>
                        <Grid item>
                            <NavBar button={active}/>
                        </Grid>
                    </Grid>
                </StyledToolbar>
            </StyledAppBar>
            <StyledToolbar style={{backgroundColor:'rgba(5, 28, 0, 0)'}}>
                <div style={{backdropFilter:'blur(20px)'}}></div>
            </StyledToolbar>
        </Box>
    );
}