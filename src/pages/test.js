import React, {useReducer} from 'react';

const initState = {
    count: 0
};

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error();
    }
}

function Counter({initialState}) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <React.Fragment>
            Count: {state.count}
            <button
                onClick={() => {
                    dispatch({type: 'increment'});
                }}
            >+</button>
            <button
                onClick={() => {
                    dispatch({type: 'decrement'});
                }}
            >-</button>
        </React.Fragment>
    );
}

export default Counter;
