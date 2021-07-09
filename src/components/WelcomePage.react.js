// @flow strict

'use strict';

import * as React from 'react';
import { useCallback } from 'react';

import JDSTextInput from '~/components/JDS/JDSTextInput.react';

import '~/styles/Welcome.css';

export default function WelcomePage(props: {
  onSuccess: () => void,
}): React.MixedElement {
  const onSumbit = useCallback(
    (pwd) => {
      if (pwd === 'iloveyou') {
        props.onSuccess();
      } else {
        alert('Incorrect password');
      }
    },
    [props.onSuccess]
  );

  return (
    <div className="welcome">
      <div className="welcomeText">
        <h1>HAPPY BIRTHDAY EMILY</h1>
        <h2>❤️ Love Joe ❤️</h2>
        <JDSTextInput label="Password" onSubmit={onSumbit} />
      </div>
    </div>
  );
}
