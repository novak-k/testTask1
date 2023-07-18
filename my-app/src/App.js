import React, { useEffect, useState } from 'react';

import './resetCss.css';
import './App.css';
import { DataTable } from './DataTable';
import { getData } from './data';

const App = () => {
  const [state, setState] = useState({
    result: [
      { id: 1, name: 'name', category: 'category', price: 1 }
    ]
  });

  useEffect(() => {
    getData()
      .then(result => {
        setState({ result });
      });
  }, [])


  return (
    <div className='container'>
      <h1 className='title'>DATA FROM API</h1>
      <DataTable result={state.result} />
    </div>
  );
};

export default App;
