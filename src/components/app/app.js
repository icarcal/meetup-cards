// @flow

import React from 'react';
import logo from '../../images/logo.svg';
import './app.css';
import MeetupCard from '../meetup-card/meetup-card';

const eventConfiguration = require('../../config.json');

function App() {
  const renderMeetupEvent = () => {
    const { event, speakers } = eventConfiguration;

    return (
      <MeetupCard event={event} speaker={speakers[0]} />
    );
  };

  const renderMeetupSpeakers = () => {
    const { event, speakers } = eventConfiguration;

    return speakers.map(speaker => <MeetupCard event={event} speaker={speaker} />);
  };

  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="app-title">Meetup cards</h1>
      </header>
      {/* { renderMeetupEvent() } */}
      { renderMeetupSpeakers() }
      <footer>
        <div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank" rel="noopener noreferrer">CC 3.0 BY</a></div>
      </footer>
    </div>
  );
}

export default App;
