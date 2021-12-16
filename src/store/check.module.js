export const check = {
    namespaced: true,
    state: {
        checked: false
    },
    actions: {
        checkChange({ commit }) {
            commit('check_change');
        }
    },
    mutations: {
        check_change(state) {
            state.checked = !state.checked;
        }
    }
};