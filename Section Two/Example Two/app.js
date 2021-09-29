const app = Vue.createApp({
  data () {
    return {
      counter: 9,
      name: "",
      confirmedName: "",
    };
  },
  computed: {
    fullname () {
      if (this.confirmedName === "") {
        return;
      }
      return this.confirmedName + " Farwell";
    },
  },
  watch: {
    counter (value) {
      if (value > 50) {
        const that = this;
        setTimeout(() => {
          that.counter = 0;
        }, 2000);
      }
    },
  },
  methods: {
    submitForm () {
      alert("Submitted!");
    },
    confirmInput () {
      this.confirmedName = this.name;
    },
    add (num) {
      this.counter += num;
    },
    reduce (num) {
      this.counter -= num;
    },
    resetInput () {
      this.name = "";
      this.confirmedName = "";
    },
  },
});

app.mount("#events");
