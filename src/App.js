import React from 'react';

function Song({ title }) {
  return <h2>My favorite song is {title}.</h2>
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Song title="I" />
      <Song title="Why" />
      <Song title="Fine" />
      <Song title="Something New" />
    </div>
  );
}

export default App;
