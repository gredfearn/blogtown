import Api from '../api/App.api';

const AppActions = {
    getBlogPosts: function() {
        return Api.getBlogPosts();
    },
}

module.exports = AppActions;
