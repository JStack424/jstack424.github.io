// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';

import Image from '~/components/Image.react';
import RotatingImage from '~/components/RotatingImage.react';

import '~/styles/AboutPage.css';

const DETAILS = [
  ['Beauty', '10/10'],
  ['Intelligence', '10/10'],
  ['Charisma', '10/10'],
  ['Chillness', '11/10'],
  ['Positivity', '10/10'],
  ['Friendliness', '10/10'],
];

const INFO: Array<InfoBoxProps> = [
  {
    images: ['skills1', 'skills2', 'skills3', 'skills4'],
    headline: 'Skills',
    body: [
      'She can draw better than Picasso',
      'She can sing better than Olivia Rodrigo',
      'She can dance better than Chris Brown',
      "Oh did I mention she's got superhuman balance and coordination",
      "Honestly what can't she do? Emily is pretty much the best at everything she does.",
    ],
  },
  {
    images: ['hobbies1', 'hobbies2', 'hobbies3', 'hobbies4', 'hobbies5'],
    headline: 'Hobbies',
    body: [
      'Ya gurl LOVES the sports & outdoors. Hiking, snowboarding, surfing, biking, volleyball, you name it!',
      'Travel is an absolute must. Find her traveling the world spontaneously',
      'Whether at home or on the go, she makes and shares incredible artwork and music constantly',
      'Number 1 priority is having friends and family to do everything with',
    ],
  },
  {
    images: ['occupation1', 'occupation2', 'occupation3'],
    headline: 'Occupation',
    body: [
      'Fun fact: Emily developed the Abbott Vascular Supplier Diversity initiative',
      "She's also been known to a badass negotiator, dealing with multi-million dollar contracts",
      "It's not all about competition though, she also helps small businesses find new growth opportunities",
      "Emily's work hard play hard mentality helps her thrive and keep her skills sharp",
    ],
  },
  {
    images: ['next1', 'next2', 'next3', 'next4'],
    headline: "What's Next",
    body: [
      "If you've picked up on the trends it's clear that she's gonna be on the go",
      'Off she goes to Los Angeles, New York, Seattle, and Hawaii over the next few months',
      'Maybe even a change in career, if the tides feel right',
      'Beyond that is a mystery left waiting to be solved...',
    ],
  },
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
        {INFO.map((info, idx) => (
          <InfoBox key={idx} {...info} />
        ))}
      </div>
    </div>
  );
}

type InfoBoxProps = {
  images: Array<string>,
  headline: string,
  body: Array<string>,
};
function InfoBox(props: InfoBoxProps): React.MixedElement {
  return (
    <div className="InfoBox">
      <div className="Image">
        <RotatingImage names={props.images} />
      </div>
      <div className="Text">
        <div className="Headline">{props.headline}</div>
        <div className="Body">
          {props.body.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </div>
      </div>
    </div>
  );
}
