import Api from '../api/App.api';

const AppActions = {
    getBlogPosts: function() {
        Api.getBlogPosts();
    },
}

module.exports = AppActions;
