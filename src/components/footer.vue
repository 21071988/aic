<template>
<div class="footer__wrapper">
  <div id='footer'>
    <div class="half">
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="logo">
        <span>гросс маркет</span>
      </div>
    </div>
    <div class="half between">
      <p v-if='!showPhone'>Поделиться</p>
      <div class="social__links">
        <a href="http://www.facebook.com/sharer/sharer.php?s=100&p%5Btitle%5D=[TITLE]&p%5Bsummary%5D=[TEXT]&p%5Burl%5D=[LINK]&p%5Bimages%5D%5B0%5D=[IMAGE]"><img src="@/assets/images/facebook.svg" alt="facebook"></a>
        <a href="https://vk.com/share.php?url=[LINK]"><img src="@/assets/images/vk.svg" alt="vk"></a>
        
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="half">
      @Гросс маркет 2020
    </div>
    <div class="half">
      <p @click='showSome' >Политика обработки персональных данных</p>
    </div>
  </div> 
  <Worksheet/>
</div>
</template>

<script>
import Worksheet from '@/components/Worksheet.vue';
export default {
  components: {
      Worksheet
    },
  data(){
      return{
        bodyWidth:'',
        showPhone:false
    }
  },
  mounted(){
      this.bodyWidth = document.body.clientWidth
      if(this.bodyWidth<375){this.showPhone = true}
    },
    methods:{
      showSome(){
        let dataModal = document.getElementById('modal__wrapper');
        dataModal.style.display='block';
        dataModal.classList.add('showModal');
      }
    }
}
</script>

<style scoped lang='less'>
@import '~@/assets/css/styles.less';
.footer__wrapper{
  padding:75px @ml 0;
  background: @grey;
  border-radius: 0;
}
.modal__wrapper{
  display:none;
}
  #footer{
    padding:0 @m;
    .flex;
    background: #ffffff;
    height:89px;
    .allcenter;
    .f1;
  }
  .half{
    flex:1;
    .allcenter;
    &:first-child{
      justify-content: flex-start;
    }
    &:last-child{
      justify-content: space-between;
    }
  }
  .logo{
    .allcenter;
    img{
      margin-right:20px;
    }
  }
  .social__links{
    img{
      &:last-child{
        margin-left:10px;
      }
    }
  }
  .footer__bottom{
    .fs;
    .flex;
    height:75px;
    p{
      &:hover{
        .cp;
      }
    }
  }
  @media screen and (max-width:768px){
    .footer__wrapper{
      padding:40px;
    }
  }
  @media screen and (max-width:768px){
    .footer__wrapper{
      padding:20px 0px;
    }
    #footer{
      flex-direction: column;
      padding:40px 20px;
    }
    .half{
      .w100;
    }
    .footer__bottom{
      .column;
      padding:40px 20px;
      p{
        text-align: left;
      }
    }
   }
</style>