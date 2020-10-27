import React, { useEffect, useContext, useReducer, useState } from 'react';
import { initialState, reducer } from '../store.js';
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <div> b componets Count: {state.count}</div>
            <div>
                <button onClick={() => dispatch({ type: 'decrement' })}>
                    -
                </button>
            </div>
        </div>
    );
}

export default App;
