import React, { Component } from 'react';
import Link from 'gatsby-link';
import ReactPlayer from 'react-player';

import './music.css';
import Duration from '../assets/Duration';

const music = [
  {
    albumName: '',
    cover: '',
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
  componentDidMount() {

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
        <div className="music__nav">
          <div>
            <span>songs</span>
            <span>albums</span>
            <span>videos</span>
          </div>
          <div>
            <span>
              title ft. someone
            </span>
          </div>
        </div>

      </div>
    )
  }
}