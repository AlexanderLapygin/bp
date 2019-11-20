import * as React from 'react'
import {Grid} from "@material-ui/core";
import PCard from "./PCard";

export function giveMeFive(): number {
    return 5
}

export default () => (
    <Grid
        container
        direction="row"
        alignItems="center"
    >
        <Grid item>
            <PCard cardText="cardText1"></PCard>
            <PCard cardText="cardText2"></PCard>
        </Grid>
    </Grid>
)
