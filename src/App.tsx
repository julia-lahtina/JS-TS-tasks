import React from 'react';
import './App.css';

function App() {

    const names = ["Dima", "Sveta", "Katja", "Viktor"]
    const users = [
        {name: "Dima"},
        {name: "Sveta"},
        {name: "Katja"},
        {name: "Viktor"}
    ]
    const liElements = names.map((n, index) => <li key={index}>{n}</li>)
    const liUsers = users.map((u, index) => <li key={index}>{u.name}</li>)

    return (
        <div className="App">
            <ul>
                {liElements}
            </ul>
          <ul>
            {liUsers}
          </ul>
        </div>
    );
}

export default App;
