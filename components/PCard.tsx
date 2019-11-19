import * as React from 'react'
import {Box} from "@material-ui/core";

export function giveMeFive(): number {
    return 5
}

type Props = {
    cardText: string
}

export default (props: Props) => (
    <Box onClick={() => console.log(giveMeFive())}>{props.cardText}</Box>
)
