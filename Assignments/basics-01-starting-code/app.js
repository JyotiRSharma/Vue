const app = Vue.createApp({
    data() {
        return {
            name: "Jyoti Ranjan Sharma",
            age: 23,
            img: "https://media.giphy.com/media/GAeH0yZbyggdq/giphy.gif",
        };
    },
    methods: {
        calcAge() {
            return this.age + 5;
        },
        randomNum() {
            return Math.random();
        },
        submitValue() {
            if (this.randomNum() < 0.5) {
                return "learn Vue";
            } else {
                return "master Vue";
            }
        }
    }
});

app.mount("#assignment");
