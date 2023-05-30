import { Grid } from "@mui/material";
import NavBar from "./NavBar";

export default function BodyGrid() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <NavBar />
            </Grid>
            <Grid item xs={9}>
                HELLO WORLD!
            </Grid>
        </Grid>
    );
}