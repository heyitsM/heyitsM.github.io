import { Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const StyledTypography = styled(Typography)(({theme}) => ({
    color: '#EBDCCB',
    // color: '#320E3B'
    color: '#051c00',
}))

const text = {'intro': "Hello! I'm a prospective software engineer, with some experience in fullstack web development. ", 
    'education':"I am a student in the Johns Hopkins University class of 2024, pursuing a major in Computer Science and minoring in Psychology. ",
    'interests': "My primary interests lie in web app development, though I am interested in expanding my skillset to include mobile app development. ",
    'programming-languages':"I am comfortable programming in Javascript, Python, C++, Java, HTML, and CSS. I also have experience working with a variety of technologies, including React, Express, and Flask. ",
    'relevant-coursework':"Some of the relevant classes I've taken are Object Oriented Software Engineering (601.4xx), Information Retrieval (601.466), Intro Algorithms (601.433), Computer Software Fundamentals (601.2xx), and Bootcamp: Python (500.1xx). ",
    'internships/projects':"I've completed an internship with SEO tech developer, and have completed/worked on a variety of projects, some of which are ongoing. ",
}

export default function BodyGridAbout() {
    return (
        <>
            <StyledTypography variant="h5">{text['intro']}</StyledTypography>
            <StyledTypography variant="p">{text['education'] + text['relevant-coursework']+ text['programming-languages']} </StyledTypography>
            <StyledTypography variant="p">{text['interests']}</StyledTypography>
            <StyledTypography variant="p">{text['internships/projects']}</StyledTypography>
        </>
    );
}