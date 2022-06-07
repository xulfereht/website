import React from 'react'
import NumberCounter from 'react-smooth-number-counter'

const Counter = (props) => {

    return (
        <NumberCounter
            value={props.value}
            suffix= {props.suffix}
            transition={2000}
            align = 'center'
        />
    )

}

export default Counter
