import axios from 'axios';

const KEY = 'AIzaSyCslsm1C7uzSO-vSw-JlExdjhyzx7Y1Q-s';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});