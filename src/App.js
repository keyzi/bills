import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');
  const [text, setText] = useState('');

const handleChange = (event) => {
  setValue(event.target.value)
}

  const handleKeyDown = (event) => {
    if(event.key === 'Enter') {
      setText(value);
      setValue('')
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Test application with autodeploy</p>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <input value={value} onChange={handleChange} onKeyDown={handleKeyDown}></input>
        <div>{text}</div>
      </header>
    </div>
  );
}

export default App;
