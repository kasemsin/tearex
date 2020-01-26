new Vue ({
  el:"#app",
  data:{
    image:''
  },
  methods:{
    onFileChange(e){
      var files =e.target.files || e.dataTransfer.files;
      if(!files.length)
        return;
      this.createImage(file[0]);
      console.log("เลือกไฟล์แล้ว");
    },
    onF(e){

      console.log("เลือกไฟล์แล้ว");
    },

    createImage(file){
        var image=new Image();
        var reader=new FileReader();
        var vm=this;
        reader.onload=(e)=>{
          vm.image=e.target.result;
        };
        reader.readAsDataURL(file);
    }

  }
})
