new Vue({
  el:"#vue-app",
  data:{
    name:"Kasemsin Supsukbaworn",
    job:"Electrical Engineer",
    age:20,
    status:false,
    count:0,
    foods:[],
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
    },
    addCount:function(){
      this.count++;
      console.log(this.age);
    }
  }
})
