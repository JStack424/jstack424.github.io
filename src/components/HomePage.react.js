// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';

import JDSToolbar from '~/components/JDS/JDSToolbar.react';
import AboutPage from '~/components/AboutPage.react';
import NewsPage from '~/components/NewsPage.react';
import PresentsPage from '~/components/PresentsPage.react';

import '~/styles/HomePage.css';

type TabType = 'About' | 'News' | 'Presents';

function PageContents({ selectedTabID }: { selectedTabID: TabType }) {
  const [unlockedItems, setUnlockedItems] = useState([]);
  switch (selectedTabID) {
    case 'About':
      return <AboutPage />;
    case 'News':
      return <NewsPage />;
    case 'Presents':
      return (
        <PresentsPage
          unlockedItems={unlockedItems}
          setUnlockedItems={setUnlockedItems}
        />
      );
  }
  throw new Error('Page not implemented: ' + selectedTabID);
}

export default function HomePage(): React.MixedElement {
  const [selectedTabID, setTabID] = useState<TabType>('About');
  const onClickTab = useCallback((id: TabType) => setTabID(id), [setTabID]);
  return (
    <div id="Home">
      <JDSToolbar
        tabIDs={['About', 'News', 'Presents']}
        selectedTab={selectedTabID}
        onClick={onClickTab}
      />
      <div className="Contents">
        <PageContents selectedTabID={selectedTabID} />
      </div>
    </div>
  );
}
