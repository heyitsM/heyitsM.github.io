import ProjectCard from "../Animation/ProjectCard";
import { Grid } from "@mui/material";

const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const blrb = "Most artists have a personal site for a portfolio (or use sites such as DeviantArt, ArtStation, Pixiv etc.), and a separate site for networking/advertising (e.g.: Twitter, Instagram, etc.). There is no single site for artists to connect to other artists, advertise commissions, and easily be able to share their portfolio (or possibly resume) to potential employers. BLRB serves as a place for artists to display their portfolio, engage their community, and complete commissions."
export default function BodyGridProjects() {
    return (
        <Grid container spacing={4}>
            <Grid item>
                <ProjectCard img="../project/blrb1.jpg" title="BLRB" text={blrb} link="https://github.com/heyitsM/BLRB-reference" />
            </Grid>
            <Grid item>
                <ProjectCard img="../project/spterminal1.jpg" title="Spotify Terminal" text={text} link="https://github.com/heyitsM/terminal-spotify-updated" />
            </Grid>
            <Grid item>
                <ProjectCard img="../project/spterminal1.jpg" title="Spotify Terminal" text={text} link="https://github.com/heyitsM/terminal-spotify-updated" />
            </Grid>
            <Grid item>
                <ProjectCard img="../project/blrb1.jpg" title="BLRB" text={blrb} link="https://github.com/heyitsM/BLRB-reference" />
            </Grid>
            
        </Grid>
    );
}