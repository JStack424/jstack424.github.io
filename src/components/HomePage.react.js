// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';

import JDSToolbar from '~/components/JDS/JDSToolbar.react';

import '~/styles/HomePage.css';

type TabType = 'About' | 'News' | 'Presents';

function EmbedContent(): React.MixedElement {
  return <img src="images/emily1.jpg" width={100} />;
}

function PageContents({ selectedTabID }: { selectedTabID: TabType }) {
  switch (selectedTabID) {
    case 'About':
      return <EmbedContent />;
    case 'News':
    case 'Presents':
  }
  return selectedTabID;
}

export default function HomePage(): React.MixedElement {
  const [selectedTabID, setTabID] = useState<TabType>('About');
  const onClickTab = useCallback((id: TabType) => setTabID(id), [setTabID]);
  return (
    <>
      <JDSToolbar
        tabIDs={['About', 'News', 'Presents']}
        selectedTab={selectedTabID}
        onClick={onClickTab}
      />
      <PageContents selectedTabID={selectedTabID} />
    </>
  );
}
