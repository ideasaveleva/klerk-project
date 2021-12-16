import _filter from 'lodash/filter';

export default {
    computed: {
        postsBuild() {
            return _filter(this.posts, e => {
                if (!this.$store.state.check.checked) {
                    if (e.children && e.children.length > 0) {
                        return e;
                    } else if (!e.children) {
                        return e;
                    } else {
                        if (this.$store.state.count.data.includes(e.id)) {
                            this.$store.dispatch('count/countChange', {
                                id: e.id,
                                count: e.count
                            });
                        };
                    };
                } else {
                    return e;
                };
            });
        }
    }
};