import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]); //including external input solves stale data references

    // setSelectedVideo(response.data.items[0]);

    const search = async term => {
        const response  = await youtube.get('/search', {
            params: {
                q: term,
            }
        })

        setVideos(response.data.items);
        
    }

    // return {videos, onTermSubmit}; //javascript convention
    return [videos, search];
};

export default useVideos;