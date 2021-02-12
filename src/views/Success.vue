<template>
  <div class="success__wrapper">
    
      <div class="success__text__block">
        <h1>Ждём тебя!</h1>
        <p>
          В 2020 году самыми востребованными умениями и качествами на рынке труда станут: 
        </p>
        <div class='flex that__p__block'>
          <svg width="3" height="60" viewBox="0 0 3 54" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="3" height="54" fill="#FFDF31"/>
          </svg>
          <p>Умение ставить цели, планировать свое время, инициативность, настойчивость, высокая мотивация, умение эффективно общаться, любознательность.</p>
        </div>
        <p>А профессиональным навыкам можно научить любого человека.</p>
      </div>

    
      <div class="have__q">
        <p>Остались вопросы?</p>
        <a href="tel:+79264331416">
          <div class='phone__link'>
            +7(926)433-14-16  
          </div>
        </a>
      </div>
    
</div>
</template>

<script>
export default {

}
</script>

<style lang="less">
@import '~@/assets/css/styles.less';

.phone__link{
    width: 100%;
    background: #F5F5F5;
    height: 73px;
    display: flex;
    align-items: center;
    justify-content: center;
  .t5;
  &:hover{
    background: @ye;
  }
  a{
    &:hover{
      color:@bl;
    }
  }
}

  .success__wrapper{
    margin:0 @ml 150px;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap:175px;
  }
  h1{
    font-size: 72px;
    margin-bottom:60px;
    .w100;
  }
  p{
    margin-bottom:35px;
    margin-top:0;
    text-align: left;
  }
  .that__p__block{
    svg{
      margin-right:10px;
      width: 7px;
      height: 60px;

    }
  }
  .success__text__block{
    .column;
  }
  .have__q{
    .column;
    justify-content: flex-end;
    padding-bottom:100px;
    p{
      font-size: 32px;
    }
    a{
      &:hover{
        color:@bl;
      }
    }
  }
  @media screen and (max-width:768px){
    .success__wrapper{
      margin:0 40px;
      grid-template-columns: 1fr;
      grid-gap:75px;
      
    }

  }
  @media screen and (max-width:375px){
    h1{
      font-size: 48px;
    }
    .success__wrapper{
      margin:0 10px;
    }
    .that__p__block svg{
      height:120px;
    }
    p{
      font-size: 18px;
    }
    .that__p__block p{
      font-size: 14px;
    }
    .success__wrapper{
      grid-gap:60px;
    }
    .that__p__block svg{
      width: 13px;
      height: 70px;
    }
  }
</style>