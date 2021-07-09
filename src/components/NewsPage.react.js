// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';
import useInterval from '~/utils/useInterval';

import Image from '~/components/Image.react';

import '~/styles/NewsPage.css';

const STORIES: Array<ArticleProps> = [
  {
    images: ['icca1', 'icca2', 'icca3', 'icca4'],
    date: 'Feb 18, 2018',
    headline: 'Tempetations win the ICCA Southwest Competition',
    body:
      'This monumental achievement sets a new record for the Tempetations, an elite a capella group from ASU. ' +
      'None of it would have been possible without their secret weapon, Emily Jing. Some people have been calling her' +
      "the greatest singer/songwriter of our generation, and if you don't believe it then you must not have heard her sing yet!",
  },
  {
    images: ['yellowcar'],
    date: 'Mar 7, 2021',
    headline: 'headline',
    body: 'body',
  },
  {
    images: ['emily1'],
    date: '8 hours',
    headline: 'headline',
    body: 'body',
  },
  {
    images: ['emily1'],
    date: '8 hours',
    headline: 'headline',
    body: 'body',
  },
  {
    images: ['emily1'],
    date: '8 hours',
    headline: 'headline',
    body: 'body',
  },
];

export default function NewsPage(): React.MixedElement {
  return (
    <div id="NewsBody">
      {STORIES.map((article, idx) => (
        <Article key={idx} {...article} />
      ))}
    </div>
  );
}

type ArticleProps = {
  images: Array<string>,
  date: string,
  headline: string,
  body: string,
};
function Article(props: ArticleProps): React.MixedElement {
  return (
    <div className="Article">
      <div className="Image">
        {props.images.length > 1 ? (
          <RotatingImage names={props.images} />
        ) : (
          <Image name={props.images[0]} />
        )}
      </div>
      <div className="Date">{props.date}</div>
      <div className="Headline">{props.headline}</div>
      <div className="Body">{props.body}</div>
    </div>
  );
}

function RotatingImage(props: { names: Array<string> }): React.MixedElement {
  const [currentIndex, setIndex] = useState(0);
  useInterval(() => {
    setIndex((currentIndex + 1) % props.names.length);
  }, 2500 + (Math.random() - 0.5) * 2000);
  return <Image name={props.names[currentIndex]} />;
}
