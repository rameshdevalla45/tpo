import React, { useRef } from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';

const VideoContainer = styled.div`
  ${tw`relative`}
`;

const Video = styled.video`
  ${tw`max-w-full rounded-t sm:rounded relative z-20`}
`;

const VideoPlayer = ({ videoUrl }) => {
    debugger;
    const videoRef = useRef(null);

    const playVideo = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const pauseVideo = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };
    return (
        <VideoContainer>
            <Video src={videoUrl} controls />
            <div>
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
            </div>
        </VideoContainer>
    );
};

export default VideoPlayer;
