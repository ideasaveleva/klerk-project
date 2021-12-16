import _sumBy from 'lodash/sumBy';

export default {
    methods: {
        CountNumbers(count, children) {
            let string = '';
            let childrenCount = _sumBy(children, e => {
                if (this.$store.state.check.checked) {
                    return e.count;
                } else {
                    if (e.children && e.children.length > 0) {
                        return e.count;
                    };
                    if (!e.children) {
                        return e.count;
                    }
                };
            });
            string = childrenCount ? '(' + count + ', ' + childrenCount + ')' : '(' + count + ')';
            return string;
        }
    }
};