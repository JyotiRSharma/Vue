const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Finish the course and learn Vue!',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const num = Math.random();
            return num > 0.5 ? "learn Vue..." : "master Vue!";
        }
    }
});

app.mount('#user-goal');
