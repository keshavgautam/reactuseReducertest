import React, { useEffect, useContext, useReducer, useState } from 'react';
import { initialState, reducer } from '../store.js';

import AA from './aa';

function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            <div className="App">
                <div> a componets Count: {state.count}</div>
                <div>
                    <button onClick={() => dispatch({ type: 'increment' })}>
                        +
                    </button>
                </div>
            </div>
            <div className="App">
                <AA />
            </div>
        </div>
    );
}

export default App;
