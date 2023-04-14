import React  from 'react';

import './App.css';
import { Sample } from './components/Sample';

const App =() => {
  return (
    <div className="App">
     <Sample name='Ajmal' age={23}  email="aju@gmail.com "/>
    </div>
  );
}

export default App;
