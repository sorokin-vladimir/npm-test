import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { App } from './components/App';
import { TestComponent } from './components/TestComponent';

const Appl: FC<{}> = () => (
  <App>
    <TestComponent />
  </App>
);

ReactDOM.render(<Appl />, document.getElementById('root'));
