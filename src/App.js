import React, { useEffect, useContext, useReducer, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import A from './componets/a';
import B from './componets/b';

import { initialState, reducer } from './store.js';
function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div className="App">
            Count: {state.count}
            <A />
            <B />
        </div>
    );
}

export default App;
