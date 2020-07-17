// @flow strict

import React, { useState } from 'react';

('use strict');

function JDSCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button class="JDSToolbarButton" onClick={setCount.bind(null, count - 1)}>
        -1
      </button>
      <button onClick={setCount.bind(null, count + 1)}>+1</button>
      <span> Count: {count} </span>
    </div>
  );
}

export default JDSCounter;
