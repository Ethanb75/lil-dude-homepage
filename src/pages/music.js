import React, { Component } from 'react';
import Link from 'gatsby-link';
import ReactPlayer from 'react-player';

import './music.css';
import '../assets/range.css';
import '../assets/fontawesome-all.min.js';

import luc2 from '../assets/luc2.png';
import mll from '../assets/mll.png';
import trap from '../assets/trapnanana.png';

const music = [
  {
    albumName: 'Martin Luther Luciano',
    cover: mll,
    songs: [
      { name: 'Beni', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/01 - Beni.mp3' },
      { name: 'D.O.S', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/02 - DOS.mp3' },
      { name: 'Blue Cheese', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/03 - Blue Cheese.mp3' },
      { name: 'Diablo', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/04 - Diablo.mp3' },
      { name: 'Take Down', ft: 'Hoodrich Pablo Juan, Goonew', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/05+-+Take+Down+Feat+Hoodrich+Pablo+Juan+Goonew.mp3' },
      { name: 'They Aint Street', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/06 - They Aint Street.mp3' },
      { name: "We Don't Lose", ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/07 - We Dont Lose.mp3' },
      { name: 'On Dat BS', ft: 'Goonew', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/08 - On Dat BS Feat Goonew.mp3' },
      { name: 'Mobbin', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/09 - Mobbin.mp3' },
      { name: '30 Shots', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/10 - 30 Shots.mp3' },
      { name: 'Smokin in La', ft: 'Goonew', url: 'https://d2psppiu1rk1et.cloudfront.net/martinLutherLuciano/11 - Smokin In La Feat Goonew.mp3' }
    ]
  },
  {
    albumName: 'Luciano 2.0',
    cover: luc2,
    songs: [
      { name: 'Limpin Prod By Good Intent', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/01 - Lil Dude-Limpin Prod By Good Intent.mp3' },
      { name: 'Hot Boys', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/02 - Lil Dude-Hot Boys.mp3' },
      { name: 'Everywhere I Go Prod By Digital Nas', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/03 - Lil Dude-Everywhere I Go Prod By Digital Nas.mp3' },
      { name: 'Only Option Prod By Spiffy Global', ft: 'Hoodrich Pablo Juan', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/04 - Lil Dude-Only Option Feat Hoodrich Pablo Juan Prod By Spiffy Global.mp3' },
      { name: 'Wish You Would Prod By Richie Souf', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/05 - Lil Dude-Wish You Would Prod By Richie Souf.mp3' },
      { name: 'Hatin Skit', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/06 - Lil Dude-Hatin Skit.mp3' },
      { name: 'TNT Prod By Good Intent', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/07 - Lil Dude-TNT Prod By Good Intent.mp3' },
      { name: 'Hoodrich Prod By Cheecho', ft: 'Goonew', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/08 - Lil Dude-Hoodrich Feat GooNew Prod By Cheecho.mp3' },
      { name: 'Looking Thru The Curtains Prod By Richie Souf', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/09 - Lil Dude-Looking Thru The Curtains Prod By Richie Souf.mp3' },
      { name: 'First Day Of School Prod By DJ Bandz', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/10 - Lil Dude-First Day Of School Prod By DJ Bandz.mp3' },
      { name: 'Out The Way Prod By Spiffy Global', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/11 - Lil Dude-Out The Way Prod By Spiffy Global.mp3' },
      { name: 'What U Gonna Do Wit It Prod By Stukkboy Tweak', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/12 - Lil Dude-What U Gonna Do Wit It Prod By Stukkboy Tweak.mp3' },
      { name: 'Stuntin Prod By Supa Statiq', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/luciano2/13 - Lil Dude-Stuntin Prod By Supa Statiq.mp3' }
    ]
  },
  {
    albumName: 'Trapnanana',
    cover: trap,
    songs: [
      { name: 'Intro 55 Bars Prod By Twin Que Ace Lex', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/01 - Intro 55 Bars Prod By Twin Que Ace Lex.mp3' },
      { name: 'No Hiding Prod By Spiffy Global', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/02 - No Hiding Prod By Spiffy Global.mp3' },
      { name: 'Bu On The Rip Prod By Spizzledoe', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/03 - Bu On The Rip Prod By Spizzledoe.mp3' },
      { name: 'Bodies', ft: 'Hoodrich Pablo Juan', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/04 - Bodies Feat Hoodrich Pablo Juan Prod By Danny Wolf.mp3' },
      { name: 'Off White Prod By Spizzledoe', ft: 'A AP Ant', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/05 - Off White Feat A AP Ant Prod By Spizzledoe.mp3' },
      { name: 'Ceiling Fan Prod By Danny Wolf', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/06 - Ceiling Fan Prod By Danny Wolf.mp3' },
      { name: 'Boowop Prod By Based Chink', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/07 - Boowop Prod By Based Chink.mp3' },
      { name: 'On The Dribble', ft: 'Baby Ahk', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/08 - On The Dribble feat Baby Ahk.mp3' },
      { name: 'Sunny Prod By Spiffy Global', ft: '', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/09 - Sunny Prod By Spiffy Global.mp3' },
      { name: 'Non Factor Prod By Sega', ft: 'Drugrixh Hect', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/10 - Non Factor Feat Drugrixh Hect Prod By Sega.mp3' },
      { name: 'Came In', ft: 'Dolla $igns Big Flock, Baby Ahk', url: 'https://d2psppiu1rk1et.cloudfront.net/trapnanana/11 - Came In Feat Dolla igns Big Flock Baby Ahk Prod By Young Clip.mp3' }
    ]
  }
];

export default class Music extends Component {
  state = {
    url: music[0].songs[0].url,
    playing: false,
    volume: 0.5,
    muted: false,
    played: 0,
    loaded: 0,
    duration: 0,
    playbackRate: 1.0,
    loop: false,
    currentAlbum: 0,
    currentSong: 0,
    currentView: 'albums',
    playStyle: 'album',
    onBackShouldRestart: false,
    loadingSong: true
  }
  // on load, set url, played to 0, loaded to 0, and currentSong / Album
  load = (songNum, albumNum, playAfter) => {
    let url = music[albumNum].songs[songNum].url;

    if (songNum === this.state.currentSong && albumNum === this.state.currentAlbum) {
      return;
    } else {
      this.setState({ loadingSong: true });

      if (playAfter === true) {
        return this.setState({
          url,
          played: 0,
          loaded: 0,
          currentSong: songNum,
          currentAlbum: albumNum,
          playing: true,
          playStyle: 'album'
        })
      } else {
        return this.setState({
          url,
          played: 0,
          loaded: 0,
          currentSong: songNum,
          currentAlbum: albumNum,
          loadingSong: false
        })
      }
    };
  }
  //return load based on current song and playStyle
  next = () => {
    const { currentAlbum, currentSong } = this.state;

    if (this.state.playStyle = 'album') {
      if (currentSong == music[currentAlbum].songs.length - 1) {
        return this.load(0, currentAlbum, true);
      } else {
        return this.load(currentSong + 1, currentAlbum, true);
      }
    }
  }
  back = () => {
    const { currentAlbum, currentSong, onBackShouldRestart } = this.state;

    if (onBackShouldRestart === false) {
      if (this.state.playStyle = 'album') {
        if (currentSong == 0) {
          return this.load(music[currentAlbum].songs.length - 1, currentAlbum, true);
        } else {
          return this.load(currentSong - 1, currentAlbum, true);
        }
      }
    } else {
      return this.player.seekTo(0);
    }
  }
  playPause = () => {
    console.log(this.state.playing);
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
    if (state.playedSeconds > 1.5) {
      this.setState({ onBackShouldRestart: true });
    } else {
      if (this.state.onBackShouldRestart === true) {
        this.setState({ onBackShouldRestart: false });
      }
    }
    if (!this.state.seeking) {
      this.setState(state)
    }
  }
  onEnded = () => {
    console.log('onEnded');
    if (this.state.playStyle === 'album') {
      let { currentAlbum, currentSong } = this.state;
      if (currentSong == music[currentAlbum].songs.length - 1) {
        return;
      } else {
        return this.load(currentSong + 1, currentAlbum, true);
      }
    } else {
      this.setState({ playing: this.state.loop })
    }
  }
  onDuration = (duration) => {
    console.log('onDuration', duration)
    this.setState({ duration })
  }
  ref = player => {
    this.player = player
  }
  componentDidMount() {
    document.getElementsByClassName('navBar')[0].classList.add('navBar--music');
    if (this.state.loadingSong === true) {
      this.setState({ loadingSong: false });
    }
  }
  componentWillUnmount() {
    document.getElementsByClassName('navBar')[0].classList.remove('navBar--music');
  }
  render() {
    const album = music[this.state.currentAlbum];
    const song = album.songs[this.state.currentSong];
    const { url, playing, volume, muted, loop, played, loaded, duration, playbackRate, currentView, loadingSong } = this.state;

    return (
      <div className="music">
        <ReactPlayer
          url={this.state.url}
          ref={this.ref}
          className='react-player'
          width='100%'
          height='100%'
          autoPlay='true'
          playing={playing}
          loop={loop}
          playbackRate={playbackRate}
          volume={volume}
          muted={muted}
          onReady={() => this.setState({ loadingSong: false })}
          onStart={() => console.log('onStart')}
          onPlay={this.onPlay}
          onPause={this.onPause}
          onBuffer={() => this.setState({ loadingSong: false })}
          onSeek={e => console.log('onSeek', e)}
          onEnded={this.onEnded}
          onError={e => {
            console.log('onError4', e);
            if (this.state.playing === false) {
              this.playPause();
            }
          }}
          onProgress={this.onProgress}
          onDuration={this.onDuration}
        />

        <div className="music__list">
          <div className="view">
            <span className={currentView === 'albums' ? 'currentView' : ''} onClick={() => this.setState({ currentView: 'albums' })}>ALBUMS</span>
          </div>
          <div className="listWrap">
            {music.map((el, albumNum) => {
              return (
                <div key={albumNum} className="listWrap__item">
                  <div>
                    <img src={el.cover} />
                    <h5>{el.albumName}</h5>
                  </div>
                  <div>
                    {el.songs.map((song, songNum) => {
                      //on click call load method with song number, url, and album num
                      return <span onClick={() => {
                        this.load(songNum, albumNum, true);
                        let iOS = !!window.navigator.platform && /iPad|iPhone|iPod/.test(window.navigator.platform)
                        if (iOS) {
                          console.log('iOs device')
                        }
                      }} key={song.name} style={this.state.currentAlbum === albumNum && this.state.currentSong === songNum ? { backgroundColor: "#3D3D3D", color: "whitesmoke" } : {}}>
                        {song.name}
                        {song.ft ? <div style={this.state.currentAlbum === albumNum && this.state.currentSong === songNum ? { color: "rgba(255,255,255,.6)" } : {}}> ft: {song.ft}</div> : ""}
                      </span>
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        <div className="music__nav">
          <img src={album.cover} />
          <div>
            {loadingSong ?
              (<h3>Loading...</h3>)
              :
              (<div className="songInfo">
                <h3>{song.name}</h3>
                {song.ft ? <p>Lil Dude ft: {song.ft}</p> : <p>Lil Dude</p>}
              </div>)
            }
            <div className="range">
              <input
                type='range' min={0} max={1} step='any'
                value={played}
                onMouseDown={this.onSeekMouseDown}
                onChange={this.onSeekChange}
                onMouseUp={this.onSeekMouseUp}
              />
            </div>
            <div className="controls">
              <button onClick={() => this.back()}><i className="fas fa-fast-backward"></i></button>
              <button onClick={() => this.playPause()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 16"><path className="playPause" d={playing === true ? "M.164.219H6V15.78H.164M8.918.22h5.836V15.78H8.918" : "M0 0l7 3.74v8.54L0 16M7 3.74L15 8l-8 4.28"} /></svg>
              </button>
              <button onClick={() => this.next()}><i className="fas fa-fast-forward"></i></button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}