//custom tag
Vue.component('max',{

data:function() {

  return{
    count:0
  }
},
template:'<button @click="count++">Click : {{count}}</button>'

});

Vue.component('post',{
  template:'<h3>Next chapter 17</h3>'
});

new Vue({
  el:"#vue-app"
});

// var post=new Vue({
//   el:"#post",
//   data:{
//     title:'ส่งโปรเจค',
//     message:'รายละเอียดโปรเจค'
//   }
// });
//
// var comment=new Vue({
//   el:"#comment",
//   data:{
//     text:'อากาศดีมาก',
//   }
// });
//
// var likeSystem=new Vue({
//   el:"#likeSystem",
//   data:{
//     like:false
//   },
//   methods:{
//     changeLike:function(){
//       console.log("like");
//     }
//   }
// });














// new Vue({
//   el:"#vue-app",
//   data:{
//     newData:{
//       empName:'',
//       salary:0,
//     },
//     empGroup:[
//       {
//         empName:"สมพร",
//         salary: 5000,
//       },
//       {
//         empName:"สมศรี",
//         salary: 4000,
//       },
//     ]
// /*
//     like:false,
//     product:['ผงซักฟอก','แปรงสีฟัน','สบู่','ผ้าขนหนู','กางเกง','เสื้อ'],
//     employee:[
//       {name:'พงษ์ศักดิ์',age:25,status:true},
//       {name:'สมพงศ์',age:30,status:false},
//     ]
//
//     name:"Kasemsin Supsukbaworn",
//     job:"",
//     age:27,
//     status:false,
//     count:0,
//     foods:[],
//     gender:'',
//     website:'https://www.youtube.com/watch?v=WiaNYcbCHFw&list=PLEE74DyIkwEnQ3fqgLNRnBHdGONErIKzL&index=8',
// */
//   },
//   methods:
//   {
//
//     addEmp:function()
//     {
//       this.empGroup.push({
//         empName: this.newData.empName,
//         salary: this.newData.salary
//       });
//       this.newData.empName = '';
//       this.newData.salary = 0;
//     },
//     // summation:function(a,b)
//     // {
//     //   var sum=a+b;
//     //   return sum;
//     // }
//   // },
//     showMessage:function() {
//       // console.log("บันทึกข้อมูลเรียบร้อย");
//       alert("Complete");
//       console.log("Send data...");
//     }
// },
//   computed:
//   {
//
//       // แยกมาจัดการด้านการคำนวณ
//     summation:function()
//       {
//         var sum = this.empGroup.reduce(function(value,data){
//         return value + Number(data.salary);},0);
//       return sum;
//     },
//     avg:function()
//     {
//       var sum = this.empGroup.reduce(function(value,data){
//       return value + Number(data.salary);},0);
//     return sum/this.empGroup.length;
//     }
//
//   },
//   watch: {//เอาไว้ส่งข้อมูลให้ database เป็นการกระทำหลังจากที่ทำอย่างอื่นเสร็จ
//     //หลังจากที่ summation ทำงานเสร็จ
//     summation: function() {
//       //ทำอะไร
//        this.showMessage(); //methods
//
//     },
//
//   }
//     /*
//     getName:function(){
//       return this.name
//     },
//     setName:function(n){
//       return this.name=n
//     },
//     addAge:function(){
//       this.age++;
//       console.log(this.age);
//     },
//     SubtractAge:function(){
//       this.age--;
//       console.log(this.age);
//     },
//     addCount:function(){
//       this.count++;
//       console.log(this.age);
//     }
//     */
//
// })
