import React, {useState, useEffect} from 'react';

const Hooks = () => {
  const [batch, setBatch] = useState (8);
  const [code, setCode] = useState ('');
  useEffect (() => {
    console.log ('did mount');
  }, []);
  useEffect (
    () => {
      console.log ('did update batch');
    },
    [batch]
  );
  useEffect (
    () => {
      console.log ('did update code');
    },
    [code]
  );
  return (
    <div style={{backgroundColor: 'lightgreen'}}>
      <p style={{fontSize: 100}}>{batch}</p>
      <p style={{fontSize: 100}}>{code}</p>
      <input
        type="number"
        onChange={e => {
          setBatch (e.target.value);
        }}
      />
      <input
        type="text"
        onChange={e => {
          setCode (e.target.value);
        }}
      />
    </div>
  );
};

export default Hooks;
