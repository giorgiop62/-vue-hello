const {createApp} = Vue;

createApp({

  data(){
    return {
    message:'hello vue',
    coloreTesto: "",
  }
},


methods: {
  cambiaColore(){
    this.coloreTesto = "red"
  }
}

}).mount('#app')


