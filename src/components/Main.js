require('normalize.css/normalize.css');
require('styles/App.css');
require('bootstrap/dist/css/bootstrap.css');


import React from "react";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./SearchBarComponent";
import VideoList from "./VideoListComponent";
import VideoDetail from "./VideoDetailComponent";


const API_KEY = 'AIzaSyCeSTU83QiKTMKKAR8aPg5jVfDWGGNGwpM';

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            videos: [],
            selectedVideo: null
        };
        
        this.videoSearch('angular');
    }
    
    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos)=> {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render() {
        const videoSearch = _.debounce((term)=> {
            this.videoSearch(term)
        }, 400);
        
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={(selectedVideo)=> this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        
        );
    }
}

AppComponent.defaultProps = {};

export default AppComponent;
