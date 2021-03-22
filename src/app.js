import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { FormSpanValue, AutoInputNumber } from './components';

function App() {
  return (
    <Fragment>
      <AutoInputNumber label="新按钮" />
      <FormSpanValue label='ss' value='23' colProps={['ss']} />
    </Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));