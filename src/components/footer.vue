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
      <p>Поделиться</p>
      <div class="social__links">
        <img src="@/assets/images/facebook.svg" alt="facebook">
        <img src="@/assets/images/vk.svg" alt="vk">
      </div>
    </div>
  </div>
  <div class="footer__bottom">
    <div class="half">
      @Гросс маркет 2020
    </div>
    <div class="half">
      <p>Политика обработки персональных данных</p>
    </div>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped lang='less'>
@import '~@/assets/css/styles.less';
.footer__wrapper{
  padding:75px @ml 0;
  background: @grey;
  border-radius: 0;
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
  }
</style>