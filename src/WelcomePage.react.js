// @flow

'use strict';

import * as React from 'react';
import { useState } from 'react';

import './styles/Welcome.css';

export default function WelcomePage(): React.MixedElement {
  return (
    <div className="welcome">
      <div className="welcomeText">
        <h1>HAPPY BIRTHDAY EMILY</h1>
        <h3>Love Joe ❤️</h3>
        <h3>Enter</h3>
      </div>
    </div>
  );
}
