import posts_data from '@/app.js';

export const posts = {
    namespaced: true,
    state: {
        posts: posts_data
    }
};