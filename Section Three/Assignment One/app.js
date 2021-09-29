const app = Vue.createApp({
  data () {
    return {
      enteredTask: "",
      showTasks: true,
      tasks: [],
    };
  },
  methods: {
    addTask () {
      this.tasks.push(this.enteredTask);
      this.enteredTask = "";
    },
  },
});

app.mount("#assignment");