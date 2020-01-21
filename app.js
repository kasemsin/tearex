new Vue({
  el:"#vue-app",
  data:{
    name:"MAX TEAREX",
    job:"Electrical Engineer",
    part:3,
    status:false,
    website:'https://www.youtube.com/watch?v=xgAuekvDqYo&list=PLEE74DyIkwEnQ3fqgLNRnBHdGONErIKzL&index=3',

  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(n){
      return this.name=n
    }
  }
})
