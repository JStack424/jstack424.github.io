// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';

import Image from '~/components/Image.react';

import '~/styles/PresentsPage.css';

let LOCKED_ITEMS = [true, true, true];

type PresentType = {
  image: string,
  name: string,
};

export default function PresentsPage(props: {
  unlockedItems: Array<string>,
  setUnlockedItems: (Array<string>) => void,
}): React.MixedElement {
  function Present(innerProps: {
    password: string,
    image: string,
    name: string,
  }): React.MixedElement {
    const onClick = useCallback(() => {
      const input = prompt('Password:');
      if (input === innerProps.password) {
        console.log('success');
        props.setUnlockedItems([...props.unlockedItems, innerProps.name]);
      } else {
        console.log('failure');
      }
    }, [innerProps.password, props.setUnlockedItems, props.unlockedItems]);

    return !props.unlockedItems.includes(innerProps.name) ? (
      <div className="Present Locked" onClick={onClick}>
        <Image name="locked" />
        <h2>???</h2>
      </div>
    ) : (
      <div className="Present">
        <Image name={innerProps.image} />
        <h2>{innerProps.name}</h2>
      </div>
    );
  }

  return (
    <div id="PresentsPage">
      <Present
        key={0}
        image="secret1"
        name="Neck Pillow (duh)"
        password="goodluck"
      />
      <Present key={1} image="secret2" name="Find Me" password="heysexy!" />
      <Present
        key={2}
        image="secret3"
        name="90min E-Foil Lesson For Two"
        password="makemewet"
      />
    </div>
  );
}
