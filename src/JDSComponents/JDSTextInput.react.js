// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';

function JDSTextInput(props: {
  showButton?: boolean,
  onSubmit: (string) => void,
}): React.MixedElement {
  const [val, setVal] = useState('');

  return (
    <>
      <input
        type="text"
        id="inputBox"
        onChange={(e: SyntheticEvent<HTMLInputElement>) => {
          setVal(e.currentTarget.value);
        }}
        onKeyUp={(e: KeyboardEvent) => {
          if (e.keyCode === 13) {
            if (val) {
              props.onSubmit(val);
              setVal('');
            }
          }
        }}
        value={val}
      />
      {props.showButton && (
        <button
          onClick={() => {
            if (val) {
              props.onSubmit(val);
              setVal('');
            }
          }}
        >
          Submit
        </button>
      )}
    </>
  );
}

export default JDSTextInput;
