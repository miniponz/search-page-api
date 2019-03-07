import loadPatterns from './load-patterns.js';
import data from './sample-object.js';


const query = encodeURIComponent('ding dong');
const page = 1;
const username = 'read-4c64aafe518a851fe9f72f0fc442337b';
const password = 'l13ub39WAF6WkObCfRJ4k9D450cdrAcMWlRWfjir';
const url = 'https://cors-anywhere.herokuapp.com/https://api.ravelry.com/patterns/search.json?query=ding+dong';

fetch(url, {
    headers: {
        Authorization: `Basic ${Buffer.from(username + ':' + password).toString(
            'base64'
        )}`,
        Origin: null
    }
})
    .then(res => res.json())
    .then(results => console.log(results));

loadPatterns(data);