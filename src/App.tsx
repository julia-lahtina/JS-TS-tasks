import React from 'react';
import './App.css';

function App() {

    const names = ["Dima", "Sveta", "Katja", "Viktor"]
    const liElements = names.map(n => <li>{n}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
        </div>
    );
}

export default App;
