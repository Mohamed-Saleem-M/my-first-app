import React from 'react'
import { useContext } from 'react';
import AppContext from './AppContext';

function GrandChild() {
    const {setUserName} = useContext(AppContext);
    return (
        <div>
            <button onClick={() => {
                setUserName("Mohamed Saleem");
            }}>
                Change UserName
            </button>
        </div>
    )
}

export default GrandChild