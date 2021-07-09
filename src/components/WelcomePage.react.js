// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';

import '~/styles/Welcome.css';

export default function WelcomePage(props: {
  onEnterClick: () => void,
}): React.MixedElement {
  return (
    <div className="welcome">
      <div className="welcomeText">
        <h1>HAPPY BIRTHDAY EMILY</h1>
        <h2>❤️ Love Joe ❤️</h2>
        <h3>
          <a href="#" onClick={props.onEnterClick}>
            Enter
          </a>
        </h3>
      </div>
    </div>
  );
}
