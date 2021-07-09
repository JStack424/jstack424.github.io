// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';

function JDSCounter(): React.MixedElement {
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
