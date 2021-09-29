const app = Vue.createApp({
  data () {
    return {
      userClass: "",
      userColor: "",
      showParagraph: true,
    };
  },
  computed: {
    paragraphClasses () {
      return `${ this.userClass } ${ this.showParagraph ?
                                     "visible" :
                                     "hidden" }`;
    },
  },
  methods: {
    toggleParagraph () {
      this.showParagraph = !this.showParagraph;
    },
  },
});

app.mount("#assignment");