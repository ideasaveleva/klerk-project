export default {
    methods: {
        countChange(item) {
            this.$store.dispatch('count/countChange', {
                id: item.id,
                count: item.count
            });
        }
    }
};