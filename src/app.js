import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { AutoButton, AutoInputNumber } from './components';

function App() {
  return (

    <AutoInputNumber label="新按钮" />

  )
}

ReactDOM.render(<App />, document.getElementById('root'));