// @flow strict

'use strict';

import * as React from 'react';
import { useState, useCallback } from 'react';
import useInterval from '~/utils/useInterval';

import Image from '~/components/Image.react';
import RotatingImage from '~/components/RotatingImage.react';

import '~/styles/NewsPage.css';

const STORIES: Array<ArticleProps> = [
  {
    images: ['baby'],
    date: 'Jul 9, 1996',
    headline: 'The Birth Of A Goddess',
    body: `Rejoice for today the prophecy has come true! Born to Neal Jing and Heidi Yang, and given the name Emily, it is said that
    this child will grow up to be the most beautiful and intelligent being of all time. We can only imagine what joys her life will bring.`,
  },
  {
    images: ['glowup', 'glowup2'],
    date: 'May 23, 2013',
    headline: '10 Tips To Maximize Your Glow-Up',
    body: `Attention high schoolers: do you ever look in the mirror and think "Ugh I look like such a nerd"? Well there's no need to worry
    because we've got a foolproof technique to help you glow-up, invented by our very own Emily Jing. As you can see by her stunning smile,
    gorgeous hair, and killer bod, it works wonders. Subscribe now for only $10 a month to get your personalized glow-up-guide.`,
  },
  {
    images: ['license'],
    date: 'May 30, 2013',
    headline: 'Teen Driver Excited To See Friends',
    body: `Emily Jing, a local high schooler, got her driver's license last week just like she always talked about. Her friends say they were so excited
    for her to drive up to their house, however she was seen earlier this afternoon driving through the suburbs crying because they weren't around.
    Our hearts go out to Emily in this tough time, hopefully she can make a hit song out of this tragic story.`,
  },
  {
    images: ['careerfair'],
    date: 'Sponsored',
    headline: 'Looking For a Job? Look No Further!',
    body: `Here at SCMA, we believe that finding a job should be easy. That's why our #SCMAcareerfair is known nationwide for getting students
    offers from companies like Abbott, Apple, and even Square! If you're still unsure of your future come try our patented position pairing process
    for a guaranteed job offer! And if we can't get you a job, we'll just get you airpods instead.`,
  },
  {
    images: ['plane'],
    date: 'Nov 11, 2016',
    headline: 'Missing Airplane Carrying Supermodels Recovered Safely',
    body: `Late last month an airplane mysteriously vanished on it's way to Las Vegas for the annual "Prettiest Woman Alive" competition. On board
    were 6 of the most beautiful women anyone's ever seen, and among them was this year's expected winner: Emily Jing. During this morning's rescue the
    women all said that Emily's leadership and determination kept them safe through the scorching desert heat. Although the competition is over, the academy
    retroactively awarded Emily the 1st prize medal for her heroic acts.`,
  },
  {
    images: ['icca1', 'icca2', 'icca3', 'icca4'],
    date: 'Feb 18, 2018',
    headline: 'Tempetations win the ICCA Southwest Competition',
    body: `This monumental achievement sets a new record for the Tempetations, an elite a cappella group from ASU.
    None of it would have been possible without their secret weapon, Emily Jing. Some people have been calling her
    the greatest singer/songwriter of our generation. If you don't believe it you must not have heard her voice yet!
    It's smooth melodic tone has been known to end wars, cure disease, and even make distracted boyfriends pay attention.`,
  },
  {
    images: ['apple'],
    date: 'Mar 27, 2020',
    headline: 'Apple Announces First Ever Female CEO',
    body: `In a shocking turn of events Apple CEO Tim Cook is being forced to step down. The board has named Emily Jing as his replacement,
    saying she is "better in every way". In an exclusive interview Tim told us that he believes it was the right move, saying "I've never met anyone
    like her". Check back in the coming weeks to find out more about Emily.`,
  },
  {
    images: ['surfing1', 'surfing2'],
    date: 'Jul 23, 2020',
    headline: "Watch Out Alana Blanchard, There's a New Surf Queen In Town",
    body: `Despite having no formal training, when Emily Jing picked up that surfboard it sent waves through the surfing community. Her skill
    is comparable to the sport's most elite competitors, and her beauty is unrivaled by anything on the land or sea. Keep an eye out for her
    signature "Dab" during this year's competition.`,
  },
  {
    images: ['horse1', 'horse2', 'horse3'],
    date: 'Oct 4, 2020',
    headline: 'New Study Finds Horse Girls "Not All Crazy"',
    body: `In a shocking subversion of expectations, a new study from Oxford finds that it's possible for horse lovers to be "chill girls". Our top Equine
    expert Emily Jing went undercover in horse country to find out the truth. Despite falling in love with horses and refusing to return home, she
    she claims the study was accurate because she is "still very chill".`,
  },
  {
    images: ['helicopter'],
    date: 'Nov 25, 2020',
    headline: 'Fearless Heli Pilot Saves Man Stranded Near Volcano',
    body: `During a routine supply flight around Hawaii's Mauna Kea volcano, veteran pilot Emily Jing noticed a distress signal from below.
    Against all odds, she landed the helicopter on rough terrain and saved a man who had ventured too far and gotten lost. The man, pictured
    here, said she was "the most beautiful woman" he'd ever seen and that he "dreams of seeing her again someday".
    `,
  },
  {
    images: ['yellowcar'],
    date: 'Mar 7, 2021',
    headline: 'Fashion Icon Emily Jing Spotted Cruising Around San Francisco',
    body: `Embarcadero police received multiple calls from people claiming to have seen a supernatural occurence late Sunday afternoon, with
    one report describing a "floating head driving a car". Much to their delight, when authorities arrived it turned out to be Emily
    wearing a new piece from her Spring-With-Jing collection.`,
  },
];

export default function NewsPage(): React.MixedElement {
  return (
    <div id="NewsBody">
      {STORIES.map((article, idx) => (
        <Article key={idx} {...article} />
      ))}
    </div>
  );
}

type ArticleProps = {
  images: Array<string>,
  date: string,
  headline: string,
  body: string,
};
function Article(props: ArticleProps): React.MixedElement {
  return (
    <div className="Article">
      <div className="Image">
        {props.images.length > 0 ? (
          <RotatingImage names={props.images} />
        ) : (
          <Image name={props.images[0]} />
        )}
      </div>
      <div className="Text">
        <div className="Date">{props.date}</div>
        <div className="Headline">{props.headline}</div>
        <div className="Body">{props.body}</div>
      </div>
    </div>
  );
}
