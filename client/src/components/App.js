import React, { useState } from 'react';
import Login from './Login';

function App(){
  const [id, setId] = useState();
  return (
    <>
      {id}
      <Login idSubmit={setId}/>
    </>
  );
}

export default App;