<template>
  <div id='header'>
    <div class="logo">
      <img src="@/assets/images/logo.svg" alt="">
      <span>гросс маркет</span>
    </div>
    <div class="phone__and__button">
      <a href="tel:+79264331416">+7(926)433-14-16</a>
      <button>Заполнить анкету</button>
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
    }
    button{
      width: 187px;
      height: 47px;
      background:@ye;
      border-radius:8px;
      border:none;
      font-size: 18px;
    }
  }
</style>