import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos])

    // useEffect(() => {
    //     onTermSubmit('buildings');
    // }, []);

    // const onTermSubmit = async term => {
    //     const response  = await youtube.get('/search', {
    //         params: {
    //             q: term,
    //         }
    //     })
    
    //     setVideos(response.data.items);
    //     setSelectedVideo(response.data.items[0]);
    // }

    return (
        <div className="ui container">
            <SearchBar onFormSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

/*

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
    };

    onTermSubmit = async (term) => {
        console.log("searchString: " + term);
        const response = await youtube.get('/search', {
            params: { q: term }
        });

        // console.log("response", response);
        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0],
        });
    };

    onVideoSelect = (video) => {
        console.log("video: ", video);
        this.setState({ selectedVideo: video })
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.onTermSubmit("Default");
    }
}

*/