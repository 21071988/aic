<template>
  <div class="slider__wrapper">
    <div class="half">
        <h1>У тебя к этому <br> талант</h1>
        <div class='top__slider__btns'>
          <div class="slider__btn">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/>
            </svg>
          </div>
          <div class="slider__btn">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/>
            </svg>

          </div>
        </div>
    </div>
    <div class="half allcenter">
      <div class="round__border">
          <img src="@/assets/images/image10.png" alt="">
          
          <svg width='0' height='0'>
            <defs>
              <clipPath id='myClip'>
                <path class="cls-1" d="M449.5,158.5a223.8,223.8,0,0,1-67,160h-315a224.5,224.5,0,0,1-2-318h319A223.78,223.78,0,0,1,449.5,158.5Z"/>
              </clipPath>
            </defs>
          </svg> 
          
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
  .slider__wrapper{
    background: @grey;
    height: 400px;
    padding:0 @ml;
    .flex;
    overflow: hidden;
  }
  .slider__btn{
    width: 44px;
    height: 44px;
    .allcenter;
    &:first-child{
      border-radius:8px 0 0 8px;
      path{
        fill:#cccccc;
        
      }
    }
    &:last-child{
      border-radius:0 8px 8px 0;
    }
    background:@w;
  }
  .top__slider__btns{
    .flex;
  }
  .slider__img__border{
    height: 100%;
    fill:none;
    overflow:hidden;
    position:absolute;
    top:0;
    left:0;
    z-index:2;
  }
  .round__border{
    position: relative;
    height: 100%;
    clip-path:url(#myClip);
    img{
      position:absolute;
      top:0;
      left:0;
      z-index:1;
    } 
  }
  .half{
    width: 50%;
  }
  h1{
    font-size: 72px;
    line-height: 66px;
  }
</style>