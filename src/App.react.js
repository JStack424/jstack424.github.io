// @flow strict

'use strict';

import React, { Component, useState } from 'react';
import useInterval from './utils/useInterval';

import JDSCounter from './JDScomponents/JDSCounter.react';
import JDSTodoList from './JDScomponents/JDSTodoList.react';
import JDSToolbar from './JDSComponents/JDSToolbar.react';

import './App.css';

function App() {
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

export default App;
