app = Vue.createApp({
    data() {
        return {
            userInput: "",
            confirmedInput: "",
        };
    },
    methods: {
        showAlert() {
            alert("You clicked the [Show Alert] button!");
        },
        handleUserInput(e) {
            this.userInput = e.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.userInput;
        },
    },
});

app.mount("#assignment");
