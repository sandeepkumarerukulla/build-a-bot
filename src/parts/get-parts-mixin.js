export default {
    created() {
        return this.$store.displatch('robots/getParts');
    },
    computed: {
        parts() {
            return this.$store.state.robots.parts || {
                heads: [],
                arms: [],
                torsos: [],
                bases: [],
            };
        },
    },
};
