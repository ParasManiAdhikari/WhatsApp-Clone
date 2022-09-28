import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import Login from './Login';

function App(){
  //useState to get and set the id from localStorage
  const [id, setId] = 
    useState(() => {
      const jsonID = localStorage.getItem('wclone-id')
      return JSON.parse(jsonID)
    })

  //when id changes, change it in storage
  useEffect(() => {
    localStorage.setItem('wclone-id', JSON.stringify(id))
  }, [id])

  return (
    id ? <Dashboard myId ={id} setId={setId}/> : <Login idSubmit={setId}/>
  );
}

export default App;