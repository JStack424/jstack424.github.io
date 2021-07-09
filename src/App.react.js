// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';

import useInterval from '~/utils/useInterval';
import WelcomePage from '~/components/WelcomePage.react';
import HomePage from '~/components/HomePage.react';

import '~/styles/App.css';

let broken = false;

class ErrorBoundary extends React.Component<
  { children: React.Node },
  { hasError: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    if (!broken) {
      alert('If you see this, I fucked something up :)');
    }
    broken = true;
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1 className="oops">OOPS :(</h1>;
    }
    return this.props.children;
  }
}

export default function App(): React.MixedElement {
  const [pageID, setPageID] = useState<string>('welcome');
  const onEnter = useCallback(() => setPageID('home'), [setPageID]);

  let contents = null;
  switch (pageID) {
    case 'welcome':
      contents = <WelcomePage onSuccess={onEnter} />;
      break;
    case 'home':
      contents = <HomePage />;
      break;
  }
  return <ErrorBoundary>{contents}</ErrorBoundary>;
}
