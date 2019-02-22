import React from 'react'; 

const VideoDetail = ({video}) => {
    if(!video) {
        return <div></div>
    } 

    if (video.id.kind === "youtube#channel") {
        return (
            <div>
                <img className="ui medium circular image" alt={video.snippet.channelTitle} src={video.snippet.thumbnails.medium.url}/>
                <h3>{video.snippet.channelTitle}</h3>
            </div>
        );
       
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`; 
    return (
        <div>
            <div className="ui embed">
                <iframe title="video player" src={videoSrc} />
            </div>
            <div className="ui segment">
                <h3>{video.snippet.title}</h3>
                <h4 className="ui header">Title: {video.snippet.title}</h4>
                <p>Description: {video.snippet.description}</p>
            </div>
            
        </div>
    );  
};

export default VideoDetail; 

 
