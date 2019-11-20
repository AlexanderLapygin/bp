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
            <PCard title="1" content="content1"></PCard>
            <PCard title="2" content="content2"></PCard>
        </Grid>
    </Grid>
)
