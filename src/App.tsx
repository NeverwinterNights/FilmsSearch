import React from 'react';
import './App.css';
import RoutesComponent from './RoutesComponent';

function App() {


    // return <Navigate to={'/main'}/>;
    return (
        <div className="App">
            <h1>Search films</h1>
            <RoutesComponent/>

        </div>
    );
}

export default App;


