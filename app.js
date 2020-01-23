new Vue({
  el:"#vue-app",
  data:{
    newData:{
      empName:'',
      salary:0,
    },
    empGroup:[
      {
        empName:"สมพร",
        salary: 5000,
      },
      {
        empName:"สมศรี",
        salary: 4000,
      },
    ]
/*
    like:false,
    product:['ผงซักฟอก','แปรงสีฟัน','สบู่','ผ้าขนหนู','กางเกง','เสื้อ'],
    employee:[
      {name:'พงษ์ศักดิ์',age:25,status:true},
      {name:'สมพงศ์',age:30,status:false},
    ]

    name:"Kasemsin Supsukbaworn",
    job:"",
    age:27,
    status:false,
    count:0,
    foods:[],
    gender:'',
    website:'https://www.youtube.com/watch?v=WiaNYcbCHFw&list=PLEE74DyIkwEnQ3fqgLNRnBHdGONErIKzL&index=8',
*/
  },
  methods:{

    addEmp:function(){
      this.empGroup.push({
        empName: this.newData.empName,
        salary: this.newData.salary
      });
      this.newData.empName = '';
      this.newData.salary = 0;
    }
    /*
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
    */
  }
})
