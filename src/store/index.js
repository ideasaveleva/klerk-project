import { createStore } from 'vuex';

import _filter from 'lodash/filter';

import { posts } from './posts.module';
import { check } from './check.module';
import { count } from './count.module';

export default createStore({
    getters: {
        postBuild: state => {
            return _filter(state.posts.posts, e => {
                if (!state.check.checked) {
                    if (e.children && e.children.length > 0) {
                        return e;
                    } else if (!e.children) {
                        return e;
                    } else {
                        if (state.count.data.includes(e.id)) {
                            let index = state.count.data.indexOf(e.id);
                            state.count.data.splice(index, 1);
                            state.count.count = state.count.count - e.count;
                        };
                        console.log(e.id);
                    };
                } else {
                    return e;
                };
            });
        }
    },
    modules: {
        posts,
        check,
        count
    }
});