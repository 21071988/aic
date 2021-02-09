<template>
  <div id='header'>
    <router-link to='/'>
      <div class="logo">
        <img src="@/assets/images/logo.svg" alt="">
        <span>гросс маркет</span>
      </div>
    </router-link>
    <div class="phone__and__button">
      <a href="tel:+79264331416">+7(926)433-14-16</a>
      <router-link to='/questionnaire'>
        <button>Заполнить анкету</button>
      </router-link>
      
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
@import '~@/assets/css/styles.less';
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
      margin-right:35px;
      color:@bl;
      text-decoration: none;
      font-size: 18px;
      .sc;
    }
    button{
      width: 187px;
      height: 47px;
      background:@ye;
      border-radius:8px;
      border:none;
      font-size: 18px;
      .cp;
    }
  }
</style>