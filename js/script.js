const {createApp} = Vue;

createApp({

  data(){
    return {
    message:'hello vue',
    coloreTesto: "",
    img: "fabio.png",
    path:"./img/"


  }
},


methods: {
  cambiaColore(){
    this.coloreTesto = "red"
  },

cambiaImg(newImg){
  this.img = newImg
}

}



}).mount('#app')


