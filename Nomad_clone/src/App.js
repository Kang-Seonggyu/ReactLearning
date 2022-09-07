import './App.css';
import { useState } from 'react';
import styles from "./App.module.css";
import BtnK from "./BtnK";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  return (
    <div className="App">
      <div className={styles.title}>Welcome Back !</div>
      <h2> {counter} </h2>
      <BtnK text="Test" onClick={onClick}/> ← This button just trick
      <button onClick={onClick}>Count Up</button>
    </div>
  );
}

export default App;
