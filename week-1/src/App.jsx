import React, { Component } from 'react';

class HelloWorld extends Component {
  render() {
    return <h1>Hello World</h1>;
  }
}

const App = () => {
  return (
    <>
      <HelloWorld />
    </>
  );
}

export default App;