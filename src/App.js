import React, { useEffect } from 'react';

import './App.css';
const { ipcRender } = window.require('electron');

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <p>
          Edit <code>src/Afilips</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/* desktopCapturer.getSources({ types: ['screen'] }).then(async (sources) => {
  console.log(sources);
  for (const source of sources) {
    if (source.name === 'Screen 1') {
      try {
        navigator.mediaDevices
          .getUserMedia({
            audio: {
              mandatory: {
                chromeMediaSource: 'desktop',
              },
            },
            video: false,
          })
          // eslint-disable-next-line no-loop-func
          .then((mediaStream) => {
            const recorder = new MediaRecorder(mediaStream);
            var chunks = [];
            recorder.onstart = (e) => {
              chunks = [];
            };
            recorder.ondataavailable = (e) => {
              chunks.push(e.data);
            };
            recorder.onstop = (e) => {
              var blob = new Blob(chunks, { type: 'audio/mpeg3' });
              socket.emit('radio', blob);
            };

            recorder.start();

            setTimeout(function () {
              recorder.stop();
            }, 5000);
          });
      } catch (e) {
        handleError(e);
      }
      return;
    }
  }
}); */
