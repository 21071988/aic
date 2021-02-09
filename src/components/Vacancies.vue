<template>
  <div id='vacancies'>
    <div class="h__block">
      <h2>Вакансии в гросс маркете</h2>
      <div class="slider__btns">

      </div>
    </div>
    <div class="vacancies__slider">
      <div class="vacancy">
        <img class='layer1' src="@/assets/images/worker.png" alt="worker">
        
        <div class="layer2">
          <p class="description">
            товаровед ведет учет товара и еще какой-нибудь текст подлиннее
          </p>
        </div>

        <span class='layer3'>товаровед</span>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='less'>
@import '~@/assets/css/styles.less';
#vacancies{
  margin-left:@ml;
  margin-bottom: @mb;
}
.h__block{
  .between;
}
.vacancy{
  height:33.47vw;
  position: relative;
  width: 24.3vw;
  background: @grey;
}
.layer1, .layer2{
  position: absolute;
  left:0;
  .w100;
  
}
.layer1{
  z-index:1;
  bottom:0;
}
.layer2{
  top:0;
  z-index:2;
  opacity: 0;
  background: @ye;
  height: 100%;
  transition:.5s;
  .flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover{
    opacity: 1;
  }
  p{
    margin:@m;
    text-align:left;
  }
}
.layer3{
    z-index: 3;
    position: absolute;
    top:20px;
    left:20px;
    border-radius: 1000px;
    width: 40%;
    background:#ffffff;
    padding:10px 5px;
}
</style>