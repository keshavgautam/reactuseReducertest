import React, { useEffect, useContext, useReducer, useState } from 'react';
import { initialState, reducer } from '../store.js';
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <div> aa componets Count: {state.count}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment' })}>
                    +
                </button>
            </div>
        </div>
    );
}

export default App;
