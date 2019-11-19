import * as React from 'react'

export function giveMeFive(): number {
    return 5
}

type Props = {
    buttonText1: string
}

export default (props: Props) => (
    <div onClick={() => console.log(giveMeFive())}>{props.buttonText1}</div>
)
