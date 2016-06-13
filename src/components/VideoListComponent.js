/*
 *   This is VideoListComponent
 * */

import React from "react";
import VideoListItem from "./VideoListItemComponent";


class VideoListComponent extends React.Component {
    render() {
        const videoItems = this.props.videos.map((video)=> {
            return (
                <VideoListItem
                    onVideoSelect={this.props.onVideoSelect}
                    key={video.etag}
                    video={video}
                />
            );
        });
        
        return (
            <ul className="col-md-4 list-group">
                {videoItems}
            </ul>
        )
    }
}

export default VideoListComponent;