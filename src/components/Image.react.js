// @flow strict

'use strict';

import * as React from 'react';

export default function Image(props: {
  name: string,
  className?: string,
}): React.MixedElement {
  return <img className={props.className} src={`images/${props.name}.jpg`} />;
}
