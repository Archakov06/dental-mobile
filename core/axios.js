import axios from 'axios';
import Constants from 'expo-constants';
const { manifest } = Constants;

axios.defaults.baseURL =
  'http://' +
  (typeof manifest.packagerOpts === `object` && manifest.packagerOpts.dev
    ? manifest.debuggerHost
        .split(`:`)
        .shift()
        .concat(`:6666`)
    : `api.example.com`);

console.log(axios.defaults.baseURL);

export default axios;
