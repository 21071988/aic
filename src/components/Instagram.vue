<template>
  <div>
    <h2>Мы в инстаграме</h2>
    <div class="inst__block">
      <div class="half inst__images">
        <img src="@/assets/images/inst.jpg" alt="">
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
  h2{
    margin-left:@ml;
  }
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
    grid-template-columns: repeat(4,1fr);
    grid-gap:@m;
    img{
      &:first-child{
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 4;
      }
    }
  }
  .inst__more{
    margin:0 @ml;
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

  @media screen and (max-width:768px) {
    .inst__images{
      margin-bottom:@m;
      grid-template-columns:repeat(12,1fr);
      img{
      &:first-child{
        grid-column-start: 1;
        grid-column-end: 7;
        grid-row-start: 1;
        grid-row-end: 2;
      }
       &:nth-child(2){
        grid-column-start: 7;
        grid-column-end: 13;
        grid-row-start: 1;
        grid-row-end: 2;
      }
       &:nth-child(3){
        grid-column-start: 1;
        grid-column-end: 5;
      }
      &:nth-child(4){
        grid-column-start: 5;
        grid-column-end: 9;
      }
      &:nth-child(5){
        grid-column-start: 9;
        grid-column-end: 13;
      }
    }
    }
    .inst__more{
      grid-template-columns: repeat(3,1fr);
    }
  }

@media screen and (max-width:768px) {
    body{
      background: red;
    }
    .inst__more{
      grid-template-columns: repeat(1,1fr);
    }
  }
  .inst__images{
    display:block;
  }
  .inst__block{
    margin:0 10px;
  }
  h2{
    margin-left:10px;
  }
</style>