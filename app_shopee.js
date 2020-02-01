new Vue({
  el:"#app",
  data:{
    items:[
      {
        name:"กาแฟ",
        price:15,
        url:"http://ustatic.priceza.com/img/productgroup/62011-1-l.jpg",
        active:false
      },
      {
        name:"เครื่องซักผ้า",
        price:500,
        url:"https://เครื่องใช้ไฟฟ้าลดราคา.com/wp-content/uploads/2019/05/%E0%B9%80%E0%B8%84%E0%B8%A3%E0%B8%B7%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%8B%E0%B8%B1%E0%B8%81%E0%B8%9C%E0%B9%89%E0%B8%B2%E0%B8%9D%E0%B8%B2%E0%B8%9A%E0%B8%99-PANASONIC-%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%88%E0%B8%B8-10-kg-%E0%B8%A3%E0%B8%B8%E0%B9%88%E0%B8%99-NA-F100A2-400x400.jpg",
        active:false
      },
      {
        name:"หนังสือการ์ตูน",
        price:250,
        url:"https://www.kledthai.com/media/catalog/product/cache/1/image/400x400/9df78eab33525d08d6e5fb8d27136e95/s/_/s__62144522.jpg",
        active:false
      },
    ]
  },
  methods:{
    selected:function(item){
      item.active=!item.active

    },
    total:function(){
      var total=0;
      this.items.forEach(function(item){
        if(item.active){
          total+=item.price;
        }
      });
return total;


    }
  }
})
