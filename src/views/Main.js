import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Main() {
  const [data, setData] = useState(null);
  const [fuck, setFuck] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:4000/main')
      .then((res) => {
        console.log('Response from server:', res.data);
        setData(res.data);
      })
      .catch((error) => console.error(error.response.data));
  }, []);

  function Clickevent() {
    axios.post('http://localhost:4000/main', { data: fuck, data2: fuck });
  }

  return (
    <>
      <div>
        <h1>hihi</h1>
        {data ? (
          <h1>{data.map((user) => user.user_nickname)}</h1>
        ) : (
          <div>loading</div>
        )}
      </div>
      <input
        type="text"
        value={fuck}
        onChange={(e) => {
          setFuck(e.target.value);
        }}
      />
      <button onClick={Clickevent}>제출</button>
    </>
  );
}

export default Main;
