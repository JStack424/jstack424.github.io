// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';

import Image from '~/components/Image.react';

import '~/styles/AboutPage.css';

const DETAILS = [
  ['Beauty', '10/10'],
  ['Intelligence', '10/10'],
  ['Charisma', '10/10'],
  ['Chillness', '11/10'],
];

export default function AboutPage(): React.MixedElement {
  return (
    <div id="AboutPage">
      <div id="LeftColumn">
        <h1>Emily Jing</h1>
        <Image name="headshot" />
        <div id="Details">
          {DETAILS.map((detail, idx) => (
            <li key={idx}>{detail[0] + '  -  ' + detail[1]}</li>
          ))}
        </div>
      </div>
      <div id="RightColumn">
        <Image name="emily1" />
      </div>
    </div>
  );
}
