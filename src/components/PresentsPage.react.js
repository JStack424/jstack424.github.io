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

const PRESENTS: Array<PresentType> = [
  { image: 'neckpillow', name: 'Neck Pillow' },
  { image: 'snowboardgoggles', name: 'Snowboard Goggles' },
  { image: 'efoil', name: '1.5hr E-Foil Lesson Together' },
];

export default function PresentsPage(props: {
  unlockedItems: Array<string>,
  setUnlockedItems: (Array<string>) => void,
}): React.MixedElement {
  console.log(props.unlockedItems);
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
      <div className="Present" onClick={onClick}>
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
      <Present key={0} image="swing" name="Neck Pillow" password="test1" />
      <Present
        key={1}
        image="swing"
        name="Snowboard Goggles"
        password="test2"
      />
      <Present
        key={2}
        image="swing"
        name="1.5hr E-Foil Lesson Together"
        password="test3"
      />
    </div>
  );
}
