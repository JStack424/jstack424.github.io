// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';
import useInterval from './utils/useInterval';

import JDSCounter from './JDScomponents/JDSCounter.react';
import JDSTodoList from './JDScomponents/JDSTodoList.react';
import JDSToolbar from './JDSComponents/JDSToolbar.react';
import WelcomePage from './WelcomePage.react';

import './styles/App.css';

export default function App(): React.MixedElement {
  const [pageID, setPageID] = useState('welcome');
  console.log(pageID);
  switch (pageID) {
    case 'welcome':
      return <WelcomePage />;
  }
  return (
    <JDSToolbar
      items={[
        { label: 'Counter', contents: <JDSCounter /> },
        { label: 'Todo List', contents: <JDSTodoList /> },
        { label: 'Something Else', contents: null },
      ]}
    />
  );
}
