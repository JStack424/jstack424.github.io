// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';

import useInterval from '~/utils/useInterval';
import Image from '~/components/Image.react';

export default function RotatingImage(props: {
  names: Array<string>,
}): React.MixedElement {
  const [currentIndex, setIndex] = useState(0);
  useInterval(() => {
    setIndex((currentIndex + 1) % props.names.length);
  }, 2500 + (Math.random() - 0.5) * 2000);
  return <Image name={props.names[currentIndex]} />;
}
