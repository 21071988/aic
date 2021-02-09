<template>
  <div>
    <h2>Мы в инстаграме</h2>
    <div class="inst__block">
      <div class="half inst__images">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
      </div>
    </div>
    <div class="inst__more" v-if='showMore'>
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
          <img src="@/assets/images/inst.jpg" alt="">
    </div>
    <button class='show__more__btn' @click="showMore = true">показать еще</button>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      showMore:false
    }
    
  }
}
</script>

<style lang='less'>
@import '~@/assets/css/styles.less';
  .inst__block{
    margin:0 @ml;
    .flex;
  }
  .half{
    flex:1;
    
  }
  .inst__block{
img{
      .w100;
    }
  }
  .inst__images{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap:@m;
    margin-left:@m;
  }
  .inst__more{
    margin:@m @ml;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap:@m;
    img{
      .w100;
    }
  }
  .show__more__btn{
    padding:10px 40px;
    border-radius:8px;
    border:none;
    margin:calc(@m *2) auto;
  }
</style>