import React, { Component } from 'react';
import Link from 'gatsby-link';
import ReactPlayer from 'react-player';

import './music.css';
import Duration from '../assets/Duration';

import luc2 from '../assets/luc2.png';
import mll from '../assets/mll.png';
import trap from '../assets/trapnanana.png';

const music = [
  {
    albumName: 'Martin Luther Luciano',
    cover: mll,
    songs: [
      { name: '', ft: '', url: '' }
    ]
  },
  {
    albumName: 'Luciano 2.0',
    cover: luc2,
    songs: [
      { name: '', ft: '', url: '' }
    ]
  },
  {
    albumName: 'Trapnanana',
    cover: trap,
    songs: [
      { name: '', ft: '', url: '' }
    ]
  }
];

export default class Music extends Component {
  state = {
    url: music[0].songs[0].url,
    playing: false,
    volume: 0.8,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    currentAlbum: 0,
    currentSong: 0,
    currentView: 'songList',
    playStyle: undefined
  }
  load = url => {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }
  playPause = (ev) => {
    this.setState({ playing: !this.state.playing });
  }
  stop = () => {
    this.setState({ url: null, playing: false })
  }
  toggleLoop = () => {
    this.setState({ loop: !this.state.loop })
  }
  setVolume = e => {
    this.setState({ volume: parseFloat(e.target.value) })
  }
  toggleMuted = () => {
    this.setState({ muted: !this.state.muted })
  }
  setPlaybackRate = e => {
    this.setState({ playbackRate: parseFloat(e.target.value) })
  }
  onPlay = () => {
    console.log('onPlay')
    this.setState({ playing: true })
  }
  onPause = () => {
    console.log('onPause')
    this.setState({ playing: false })
  }
  onSeekMouseDown = e => {
    this.setState({ seeking: true })
  }
  onSeekChange = e => {
    this.setState({ played: parseFloat(e.target.value) })
  }
  onSeekMouseUp = e => {
    this.setState({ seeking: false })
    this.player.seekTo(parseFloat(e.target.value))
  }
  onProgress = state => {
    console.log('onProgress', state)
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onEnded = () => {
    console.log('onEnded')
    this.setState({ playing: this.state.loop })
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  ref = player => {
    this.player = player
  }
  render() {
    const album = music[this.state.currentAlbum];
    const song = album.songs[this.state.currentSong];
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate } = this.state;

    return (
      <div className="music">
        <ReactPlayer
          url={this.state.url}
          ref={this.ref}
          className='react-player'
          width='100%'
          height='100%'
          playing={playing}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => console.log('onReady')}
          onStart={() => console.log('onStart')}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onBuffer={() => console.log('onBuffer')}
          onSeek={e => console.log('onSeek', e)}
          onEnded={this.onEnded}
          onError={e => {
            console.log('onError', e);
            // alert('There seems to be an issue with the player and it might not work as intended');
          }}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />


        <div className="music__list">
          {/*Here, have function that renders the list view based on view state*/}
          {/*for albumLength render a list item and click listeners *or* just */}
          {/*Maybe every song <span> is a component with data about song*/}
          <div className="listWrap">
            {music.map(el => {
              return (
                <div className="listWrap__item">
                  <div>
                    <img src={el.cover} />
                    <h5>{el.albumName}</h5>
                  </div>
                  <div>
                    <span>Song name ft. person</span>
                    <span>Song name ft. person and guy</span>
                    <span>hank hill ft. guy</span>
                    <span>Bill don't move m' track'r</span>
                    <span>Rick Swanson</span>
                    <span>Luciano</span>
                    <span>Song name ft. person & bill & rick</span>
                    <span>Song name ft. person</span>
                    <span>Song name ft. person</span>
                    <span>Song name 2 ft. person</span>
                    <span>Song name ft. person</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>


        <div className="music__nav">
          <img src={album.cover} />
          <div>
            <h3>Title</h3>
            <p>ft. someone</p>
          </div>
          <div>
            {/* <span style={{ marginRight: '.5rem' }}>
              <Duration seconds={duration * played} /> / <Duration seconds={duration} />
            </span> */}
            <input
              type='range' min={0} max={1} step='any'
              value={played}
              onMouseDown={this.onSeekMouseDown}
              onChange={this.onSeekChange}
              onMouseUp={this.onSeekMouseUp}
            />
          </div>
          <div>
            <button>back</button>
            <button>playpause</button>
            <button>forward</button>
          </div>
        </div>
      </div>
    )
  }
}