<template>
  <div id='header'>
    <router-link to='/'>
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="">
        <span>гросс маркет</span>
      </div>
    </router-link>
    <div class="phone__and__button" v-if='!showPhone'>
      <a href="tel:+79264331416">+7(926)433-14-16</a>
      <router-link to='/questionnaire'>
        <button>Заполнить анкету</button>
      </router-link>  
    </div>
    <a 
      href="tel:+79264331416"
      v-if="showPhone"
    >
      <img 
        class='little__phone'
        src="@/assets/images/phone.svg"
        alt="phone"
      >
    </a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      bodyWidth:'',
      showPhone:false
    }
  },
  mounted(){
      this.bodyWidth = document.body.clientWidth
      if(this.bodyWidth<768){this.showPhone = true}
  }
}
</script>

<style scoped lang='less'>
@import '~@/assets/css/styles.less';
.little__phone{
  width: 16px;
}
  #header{
    margin:0 @ml;
    .allcenter;
    justify-content: space-between;
    height:110px;

    
  }
  .logo{
    .allcenter;
    span{
      font-size: 32px;
      .sc;
    }
    img{
      margin-right:20px;
    }
  }
  .phone__and__button{
    a{
      color:@bl;
      text-decoration: none;
      font-size: 18px;
      .sc;
      &:first-child{
        margin-right:35px;
      }
    }
    button{
      margin-bottom:0;
      height: 47px;
      background:@ye;
      border-radius:8px;
      border:none;
      font-size: 18px;
      .cp;
    }
  }
  @media screen and(max-width:1112px){
    #header{
      margin:0 40px;    
    }
  }
  @media screen and(max-width:768px){
    .logo img{
      margin-right:10px;
    }
    #header{
      margin:0 35px 0 15px;  
    }
  }
</style>