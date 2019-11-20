import * as React from 'react'
import {Card} from "@material-ui/core";
import CardHeader from '@material-ui/core/CardHeader';

export function giveMeFive(): number {
    return 1000000
}

type Props = {
    title: string
    content: string
}

export default (props: Props) => (
    <Card onClick={() => console.log(giveMeFive())}>Card Content
        <CardHeader
          title={props.content}
        />
    </Card>
)
