import React from 'react';

function Rv(props) {
  console.log(props)
  return <h2>Her name is {props.name}.</h2>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Rv name="Irene" />
      <Rv name="Seulgi" />
      <Rv name="Wendy" />
      <Rv name="Joy" />
      <Rv name="Yeri" />
    </div>
  );
}

export default App;
