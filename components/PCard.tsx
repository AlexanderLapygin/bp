import * as React from 'react'
import {Card} from "@material-ui/core";

export function giveMeFive(): number {
    return 5
}

type Props = {
    cardText: string
}

export default (props: Props) => (
    <Card onClick={() => console.log(giveMeFive())}>{props.cardText}</Card>
)
