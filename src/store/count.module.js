export const count = {
    namespaced: true,
    state: {
        count: 0,
        data: []
    },
    actions: {
        countChange({ commit }, data) {
            commit('count_change', data);
        },
    },
    mutations: {
        count_change(state, data) {
            if (!state.data.includes(data.id)) {
                state.data.push(data.id);
                state.count = state.count + data.count;
            } else {
                let index = state.data.indexOf(data.id);
                state.data.splice(index, 1);
                state.count = state.count - data.count;
            };
        },
    }
};