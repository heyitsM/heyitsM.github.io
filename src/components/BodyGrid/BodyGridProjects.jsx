import ProjectCard from "../Animation/ProjectCard";
import { Grid } from "@mui/material";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

export default function BodyGridProjects() {
    return (
        <Grid container spacing={4}>
            <Grid item>
                <ProjectCard img="../project/blrb1.jpg" title="BLRB" text={text} link="https://github.com/cs421sp23-homework/sp23-oose-project-team-07" />
            </Grid>
            <Grid item>
                <ProjectCard img="../project/spterminal1.jpg" title="Spotify Terminal" text={text} link="https://github.com/heyitsM/terminal-spotify-updated" />
            </Grid>
            <Grid item>
                <ProjectCard img="../project/spterminal1.jpg" title="Spotify Terminal" text={text} link="https://github.com/heyitsM/terminal-spotify-updated" />
            </Grid>
            <Grid item>
                <ProjectCard img="../project/blrb1.jpg" title="BLRB" text={text} link="https://github.com/cs421sp23-homework/sp23-oose-project-team-07" />
            </Grid>
            
        </Grid>
    );
}