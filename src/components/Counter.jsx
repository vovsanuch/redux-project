import React from 'react';
import {useDispatch, useSelector} from 'react-redux'

import {increment, decrement, reset} from '../store2/actions/counter-actions'
import {getCounter} from '../store2/selectors/counter-selectors'


const Counter = () => {
    const count = useSelector(getCounter)
    const dispatch = useDispatch()

    return (
        <>
            <h2>{count}</h2>
            <button onClick={() => dispatch(decrement)}>-</button>
            <button onClick={() => dispatch(increment)}>+</button>
            <button onClick={() => dispatch(reset)}>reset</button>
        </>
    );
};

export default Counter;