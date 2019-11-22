import * as React from 'react'
import {Grid} from "@material-ui/core";
import PCard from "./PCard";

export default () => (
    <Grid
        container
        direction="row"
        justify="space-evenly"
    >
        <Grid item>
            <PCard title="title1" content="content1"></PCard>
            <PCard title="title2" content="content2"></PCard>
        </Grid>
    </Grid>
)
