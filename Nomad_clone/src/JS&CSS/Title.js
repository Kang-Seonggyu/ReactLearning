import './Title.css';
import { useState, useEffect } from 'react';
import styles from "./Title.module.css";
import BtnK from "./BtnK";

function Title() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCounter((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  useEffect(()=> {
    console.log("Run Once");
  }, []);
  useEffect(()=> {
    console.log("it runs when keyword changed");
  }, [keyword]);
  useEffect(()=> {
    console.log("it runs when counter changed");
  }, [counter]);
  return (
    <div className="Title">
      <div className={styles.title}>Welcome Back !</div>
      <input 
        value={keyword}
        onChange ={onChange}
        type="text"
        placeholder='Search Here..'
      />
      <h2> {counter} </h2>
      <BtnK text="Test" onClick={onClick}/> ← This button just trick
      <button onClick={onClick}>Count Up</button>      
    </div>
  );
}

export default Title;
