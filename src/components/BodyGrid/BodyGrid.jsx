import { Grid } from "@mui/material";
import NavBar from "../NavBar";
import BodyGridMain from "./BodyGridMain";

const opts = {"main":<BodyGridMain />}

export default function BodyGrid(props) {
    const { style } = props;

    return (
        <Grid container spacing={2}>
            <Grid item xs={6} md={3}>
                <NavBar />
            </Grid>
            <Grid item xs={6} md={9} style={{marginTop:'5vh'}}>
                {opts[style]}
            </Grid>
        </Grid>
    );
}