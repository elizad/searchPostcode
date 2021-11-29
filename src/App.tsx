import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Form} from "./components/form";

function App() {
  return (
      <div className="App">
        <header className="App-header">

          <Form  title="getAddress()  Find" paragraph=" :)  Job done " ></Form>

          <a
              className="App-link"
              href=""
              target="_blank"
              rel="noopener noreferrer"
          >
            open Get Address().io
          </a>
        </header>
      </div>
  );
}

export default App;
