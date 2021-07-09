// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';

import '~/styles/JDS/JDSToolbar.css';

type JDSToolbarItemConfig = {
  contents: React$Node,
  label: string,
};

function JDSToolbarItem(props: {
  isSelected: boolean,
  label: string,
  onClick: () => void,
}) {
  if (props.isSelected) {
    console.log(props.label);
  }
  return (
    <div
      className={`JDSToolbarButton${props.isSelected ? ' selected' : ''}`}
      onClick={props.onClick}
    >
      {props.label}
    </div>
  );
}

export default function JDSToolbar<TabID: string>(props: {
  tabIDs: Array<TabID>,
  selectedTab: TabID,
  onClick: (TabID) => void,
}): React.MixedElement {
  return (
    <div className="JDSToolbar">
      {props.tabIDs.map((tabID) => (
        <JDSToolbarItem
          key={tabID}
          isSelected={props.selectedTab === tabID}
          label={tabID}
          onClick={props.onClick.bind(null, tabID)}
        />
      ))}
    </div>
  );
}
