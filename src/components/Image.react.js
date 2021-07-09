// @flow strict

'use strict';

import * as React from 'react';

export default function Image(props: {
  name: string,
  size: number,
}): React.MixedElement {
  return <img src={`images/${props.name}.jpg`} width={props.size} />;
}
