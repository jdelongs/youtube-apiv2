import React from 'react'; 
import youtube from '../apis/youtube'; 
import SearchBar from './SearchBar'; 
import VideoList from './VideoList'; 
import VideoDetail from './VideoDetail'; 
class App extends React.Component {
    state = { 
        videos: [], 
        selectedVideo: null 
    }; 
    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        }); 
        this.setState({ 
            videos: response.data.items, 
            selectedVideo: null 
        
        });
    } 
    
    removeSelectedVideo = () => {
        console.log(this.state.videos); 
    }
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video});  
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onSearchSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className={!this.state.selectedVideo ? 'not formated' : 'eleven wide column'}>
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList selectedVideo={this.state.selectedVideo} onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }; 
}

export default App; 