import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <div className="buttons">
        <button className="green" onClick={() => setCount(count + 1)}>+</button>
        <button className="red" onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
}

export default App;
