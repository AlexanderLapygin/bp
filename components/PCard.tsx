import * as React from 'react'
import {Card} from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from "@material-ui/core/CardContent";

export function giveMeFive(): number {
    return 1000000
}

type Props = {
    title: string
    content: string
}

// @ts-ignore
export default (props: Props) => (
    <Card onClick={() => console.log(giveMeFive())}>Card content
        <CardHeader title="CardHeader title"/>
        <CardContent>
            CardContent content
        </CardContent>
    </Card>
)
