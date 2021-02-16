<template>
  <div>
    <h2>Мы в инстаграме</h2>
    <div class="inst__block">
      <div class="half inst__images" >
        <img v-for='ins in inst.slice(0,5)' :key='ins.id' v-bind:src="'http://aic.slim.technology/'+ins.PICTURE" :alt="ins.TITLE">
      </div>
    </div>
    <div class="inst__more" v-if='showMore'>
          <img v-for='ins in inst.slice(5,inst.length)' :key='ins.id' v-bind:src="'http://aic.slim.technology/'+ins.PICTURE" :alt="ins.TITLE">
    </div>
    <button class='show__more__btn' @click="showMore = true">показать еще</button>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      showMore:false,
      inst:[]
    }
    
  },
  created(){
    axios
      .get('http://aic.slim.technology/api/get/instagram/')
      .then(response => {(
        this.inst = response.data);
        this.loading = false;
      });
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
    background:@grey;
    .t5;
    &:hover{
      background: @ye;
    }
  }

  @media screen and (max-width:1112px) {
    .inst__block{
      margin:0 @m;
    }
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
    
    .inst__more{
      grid-template-columns: repeat(1,1fr);
      margin:0 15px;
      grid-gap:12px;
    }
    .inst__images{
      grid-template-columns: repeat(1,1fr);
    }
  
  .inst__images{
    display:block;
    img{
      margin-bottom:12px;
    }  
  }
  .inst__block{
    margin:0 15px;
  }
  h2{
    margin-left:15px;
  }
}
</style>