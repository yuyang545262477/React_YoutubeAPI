/*
 * This is VideoListItemComponent
 * */


import React from "react";

class VideoListItemComponent extends React.Component {
    render() {
        const {video, onVideoSelect} = this.props;
        const imageUrl = video.snippet.thumbnails.default.url;
        return (
            <li onClick={()=> onVideoSelect(video) } className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img src={imageUrl} alt="thumbnails" className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{video.snippet.title}</div>
                    </div>
                </div>
            </li>
        )
    }
}

export default VideoListItemComponent;