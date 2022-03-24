import React, { useState, useEffect, useLayoutEffect } from "react";
import axios from 'axios';
import "./App.css";

function App() {
  const [data, setData] = useState();

  useLayoutEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      console.log(res);
    })
  }, [])
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;



