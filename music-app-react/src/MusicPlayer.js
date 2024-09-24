import React, { useState, useEffect, useRef } from 'react';

const tracks = [
    { title: "rain-sound 15minutes.mp3", src: "./media/rain-sound 15minutes.mp3" },
    { title: "DoanXuanCa", src: "./media/DoanXuanCa.mp3" },
    { title: "NgayXuanLongPhungSumVay", src: "./media/NgayXuanLongPhungSumVay.mp3" },
];

function MusicPlayer() {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    //   const [isPlaying, setIsPlaying] = useState(false);
    //   const [isLooping, setIsLooping] = useState(false);
    const audioRef = useRef();

    const playMusic = () => {
        audioRef.current.play();
    }
    const stopMusic = () => {
        audioRef.current.pause();
    }

    const nextMusic = () => {
        setCurrentTrackIndex(s => {
            s = s + 1;
            if (s > tracks.length - 1) {
                s = 0;
            }
            return s;
        })
    }
    const songs = tracks => {
        let content = [];
        for (let idx in tracks) {
            const item = tracks[idx];
            content.push(<li key={item.src}>{item.title}</li>);
        }
        return content;
    };

    useEffect(() => {
        //// Hành động thực hiện khi component vừa load xong
        // console.log(122);
        // if (audioRef.current) {
        //     audioRef.current.play().catch((err)=>{
        //         console.log(err);
        //     });
        // }
    }, []);

    // Render component
    return (
        <div>
            <div> Bài đang phát : {tracks[currentTrackIndex].title}  </div>
            <audio style={{width:"600px"}} ref={audioRef} src={tracks[currentTrackIndex].src} controls autoPlay  />
            <div className="btn-pause" onClick={stopMusic}>Pause</div>
            <div className="btn-play" onClick={playMusic}>Play</div>
            <div className="btn-next" onClick={nextMusic}>Next</div>
            <div className="list-song">Danh sach bai hat
                <ul>
                    {songs(tracks)}
                </ul>
            </div>
        </div>
    );
}

export default MusicPlayer;