<template>
  <div>
    <div v-show="isImage">
      <a href="#" class="buttonOne" v-on:click="nextImage"><img src="./assets/next.jpg"></a>
      <div v-for="(item,index) in imgsArr" class="center">
        <img :src="item.url" class="image" v-show="selectIndex==index">
      </div>
      <a href="#" class="buttonTwo" v-on:click="previousImage"><img src="./assets/previous.jpg"></a>
    </div>
    <div class="center" v-show="isPDF">
      <pdf src="./static/PDF/hw-10.pdf"> </pdf>
    </div>
  </div>
</template>

<script>
  import pdf from "vue-pdf"

export default {
  name: 'app',
  data (){
      return{
          selectIndex:0,
          imgsArr:[
            {url:"./static/image/1.jpg"},
            {url:"./static/image/2.jpg"},
            {url:"./static/image/3.jpg"},
            {url:"./static/image/4.jpg"},
          ],
        isImage:false,
        isPDF:true
      }
  },
  methods:{
      nextImage:function(){
          if (this.selectIndex == this.imgsArr.length - 1){
              this.selectIndex = 0;
          }
          else{
              this.selectIndex += 1;
          }
      },
    previousImage:function(){
      if (this.selectIndex == 0){
        this.selectIndex = this.imgsArr.length - 1;
      }
      else{
        this.selectIndex -= 1;
      }
    }
  },
  components:{
      pdf
  }
}
</script>

<style>
.center{
  text-align: center;
}
  .image{
    width:360px;
    height:540px;
  }
  .buttonOne{
    position: absolute;
    top:220px;
    right:450px;
  }
  .buttonTwo{
    position: absolute;
    top:220px;
    left:450px;
  }
</style>
