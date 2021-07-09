// @flow strict

'use strict';

import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';

import '~/styles/Welcome.css';

export default function WelcomePage(props: {
  onSuccess: () => void,
}): React.MixedElement {
  const secret = 'iloveyou';
  const [index, setIndex] = useState(0);
  function handleKeydown(e) {
    if (e.key === secret[index]) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });
  useEffect(() => {
    if (index === secret.length) {
      props.onSuccess();
    }
  }, [index]);
  return (
    <div className="welcome">
      <div className="welcomeText">
        <h1>HAPPY BIRTHDAY EMILY</h1>
        <h2>❤️ Love Joe ❤️</h2>
      </div>
    </div>
  );
}
