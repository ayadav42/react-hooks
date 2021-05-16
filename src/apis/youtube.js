import axios from 'axios';

const KEY = 'AIzaSyDI50yAwP1eL-t87BG_xJ2zuW03zw7gfTM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});