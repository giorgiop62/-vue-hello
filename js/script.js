const {createApp} = Vue;

createApp({

  data(){
    return {
    message:'hello vue',
    coloreTesto: "",
    img: "fabio.jpg",
    path:"../img/",
    show:false


  }
},


methods: {
  cambiaColore(){
    this.coloreTesto = "red"
  },

  cambiaImg(newImg){
  this.img = newImg
  },
  
  toggle(){
    this.show = !this.show;
  }
}



}).mount('#app')


