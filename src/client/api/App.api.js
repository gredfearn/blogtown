import Constants from '../constants/App.constants';
import Dispatcher from '../dispatcher/App.dispatcher';
import request from 'superagent';

const API_URL = 'http:localhost:8000';
const TIMEOUT = 10000;

function makeUrl(part) {
    return API_URL + part;
}

function getBlogs(url) {
    return request
        .get(url)
        .query({db:'test'})
        .timeout(TIMEOUT)
}

var Api = {
    getBlogPosts: function() {
        var url = "/blog/getBlogs/";
        getBlogs(url)
            .then( result => {
                console.log('RESULT', result.body.data);
               Dispatcher.dispatch({actionType: Constants.GET_BLOGS, data: result.body.data});
            })
            .catch(err => {
                console.log('ERR:!', err)
            })
    }
};

module.exports = Api;
