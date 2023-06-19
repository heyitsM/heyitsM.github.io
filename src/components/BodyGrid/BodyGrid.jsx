import { Grid } from "@mui/material";
import NavBar from "../NavBar";
import BodyGridMain from "./BodyGridMain";
import BodyGridAbout from "./BodyGridAbout";
import BodyGridProjects from "./BodyGridProjects";
import BodyGridResume from "./BodyGridResume";
// import { useEffect } from "react";

const opts = {"main":<BodyGridMain />, "about":<BodyGridAbout />, "projects":<BodyGridProjects />, "resume":<BodyGridResume />};

export default function BodyGrid(props) {
    const { active } = props;
    
    return (
        <Grid container spacing={2} style={{minHeight:'91vh'}}>
            <Grid item xs={6} md={9} style={{marginTop:'10vh'}}>
                {opts[active]}
            </Grid>
        </Grid>
    );
}