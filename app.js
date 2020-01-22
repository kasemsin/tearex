new Vue({
  el:"#vue-app",
  data:{
    name:"MAX TEAREX",
    job:"Electrical Engineer",
    age:20,
    status:false,
    website:'https://www.youtube.com/watch?v=xgAuekvDqYo&list=PLEE74DyIkwEnQ3fqgLNRnBHdGONErIKzL&index=3',

  },
  methods:{
    getName:function(){
      return this.name
    },
    setName:function(n){
      return this.name=n
    },
    addAge:function(){
      this.age++;
      console.log(this.age);
    },
    SubtractAge:function(){
      this.age--;
      console.log(this.age);
    }
  }
})
