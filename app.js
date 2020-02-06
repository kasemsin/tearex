

new Vue ({
el:'#app',
data:{
message1:"test1",
message2:"test2",
isMe : true,
users :[{
  id:1,
  name:'John Cena'
},{
  id:2,
  name:'What Thefuck'
},{
  id:3,
  name:'Maxxy Roligez'
}
]
},
methods:{
  hello:function(){
    this.message1='Thank you for click on me '
    this.message2='FUCK YOU '
  }
}


})
