import React from 'react'
import { FC } from 'react';
import './App.css';
import { Form } from "./components/Form";

const App: FC = () => <div className="App">
    <div className="m-2 container">
        <h2>getAddress() Find</h2>
    </div>
    <Form paragraph="{ :)  Job done }"  title={"Start"}></Form>
    <a className="App-link" href="#" target="_blank" rel="noopener noreferrer">
        open Get Address().io
    </a>
</div>

export default App;
