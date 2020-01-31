/* eslint-disable react/jsx-filename-extension */
import React, { useEffect, useState } from 'react';
import useFetch from './fetch/useFetch';
import './App.css';

function App() {
  const { result, getAsJson, fetchError } = useFetch();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (result) {
      setUsers(result);

      debugger;
    }
  }, [result]);
  useEffect(() => {
    if (fetchError) {
      debugger;
    }
  }, [fetchError]);

  useEffect(() => {
    if (users.length > 0) {
      debugger;
    }
  }, [users]);
  function getJson() {
    getAsJson({ url: 'http://dummy.restapiexample.com/api/v1/employees' });
  }
  return (
    <div>
      App
      <button type="button" onClick={getJson}>
        Get
      </button>
    </div>
  );
}

export default App;
