// @flow strict

'use strict';

import * as React from 'react';
import { useState } from 'react';

type JDSToolbarItemConfig = {
  contents: React$Node,
  label: string,
};

function JDSToolbarItem(props: {
  isSelected: boolean,
  label: string,
  onClick: (string) => void,
}) {
  if (props.isSelected) {
    console.log(props.label);
  }
  return (
    <button
      className={`JDSToolbarButton ${props.isSelected ? 'selected' : ''}`}
      onClick={props.onClick.bind(null, props.label)}
    >
      {props.label}
    </button>
  );
}

export default function JDSToolbar(props: {
  items: Array<JDSToolbarItemConfig>,
}): React.MixedElement {
  const [currentTab, setCurrentTab] = useState('');
  let pageContents = null;
  return (
    <>
      <div className="JDSToolbar">
        {props.items.map(({ contents, label }) => {
          const isSelected = currentTab === label;
          if (isSelected) {
            pageContents = contents;
          }
          return (
            <JDSToolbarItem
              key={label}
              isSelected={isSelected}
              label={label}
              onClick={setCurrentTab.bind(null, label)}
            />
          );
        })}
      </div>
      <div
        style={{
          border: '1px solid black',
          borderRadius: '8px',
          margin: 'auto',
          marginTop: '16px',
          padding: '8px',
          width: '60%',
        }}
      >
        {pageContents}
      </div>
    </>
  );
}
