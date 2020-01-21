new Vue({
  el:"#vue-app",
  data:{
    name:"MAX TEAREX",
    job:"Electrical Engineer",
    age:27,
    status:false

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
