import React, { useEffect, useState } from 'react';

function App(props) {

  useEffect(() => console.log(123))

  const [counter, setCounter] = useState(0)

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter+1)}>Click</button>
    </div>
  );
}

export default App