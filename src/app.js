import React from 'react';
import ReactDOM from 'react-dom';
import { AutoButton } from './components';

function App() {
  return (
    <AutoButton title="新按钮" />
  )
}

ReactDOM.render(<App />, document.getElementById('root'));