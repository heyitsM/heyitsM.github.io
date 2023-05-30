import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import Box from '@mui/material/Box';
import RadarIcon from '@mui/icons-material/Radar';

const StyledButton = styled(Button)(({ theme }) => ({
    '@media all': {
        color: '#051c00',
        borderColor: '#051c00',
        backgroundColor:'#EBDCCB',
        justifyContent:'flex-start',
        "&:hover": {
            borderColor:'#320E3B',
            backgroundColor:'#320E3B',
            color: '#94849B'
        }
    },
}));

const StyledBox = styled(Box)(({theme}) => ({
    '@media all': {
        textAlign:'center',
    }
}))

export default function NavBar() {
    return (
        <StyledBox>
            <ButtonGroup style={{marginTop:'5vh'}} variant="outlined" aria-label="large button group" orientation="vertical">
                <StyledButton href="/" startIcon={<PersonIcon />}>About Me</StyledButton>
                <StyledButton href="/" startIcon={<RadarIcon />}>My Projects</StyledButton>
                <StyledButton href="/" startIcon={<ArticleIcon />}>Resume</StyledButton>
            </ButtonGroup>
        </StyledBox>
    );
}