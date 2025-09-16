import React from 'react';
import { useRef } from 'react';
import './VideoPlayer.css';
import video from '../../assets/graduation.mp4';
import x_symbol from '../../assets/x-symbol.png'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }

    return(
        <div className={`video-player ${playState? '' : 'hide'}`} onClick={closePlayer}>
            <video src={video} autoPlay muted controls></video>
            <img src={x_symbol} alt="cancel" className="cancel" ref={player} onClick={closePlayer} />
        </div>
    )
}

export default VideoPlayer