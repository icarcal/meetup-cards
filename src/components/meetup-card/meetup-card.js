// @flow

import React from 'react';

type Props = {
  event: {
    name: string,
    backgroundImage: string,
  },
  speaker: {
    name: string,
    bio: string,
    picture: string,
    talk: {
      title: string,
      datetime: string,
      description: string,
    }
  }
};

function MeetupCard(props: Props) {
  const { event, speaker } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={speaker.picture} alt={speaker.name} />
      </div>
      <div className="card-content">
        <h2>{event.name}</h2>
        <h1>{speaker.name}</h1>
        <h3>{speaker.talk.title}</h3>
        <p>{speaker.talk.description}</p>
      </div>
    </div>
  );
}

export default MeetupCard;
