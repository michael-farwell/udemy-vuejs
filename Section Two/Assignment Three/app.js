const app = Vue.createApp({
  data () {
    return {
      counter: 0,
    };
  },
  watch: {
    counter (value) {
      const _this = this;

      setTimeout(() => {
        _this.counter = 0;
      }, 5000);
    },
  },
  computed: {
    message () {
      if (this.counter <= 37) {
        return "Not there yet!";
      }

      return "Too much!";
    },
  },
  methods: {
    add (quantity) {
      this.counter += quantity;
    },
  },
});

app.mount("#assignment");
