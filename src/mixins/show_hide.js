export default {
    data() {
        return {
            show_hide: [1]
        };
    },
    methods: {
        ShowHide(id) {
            if (!this.show_hide.includes(id)) {
                this.show_hide.push(id);
            } else {
                let index = this.show_hide.indexOf(id);
                this.show_hide.splice(index, 1);
            }
        }
    }
};