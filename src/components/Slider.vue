<template>
  <div>

  <div class="slider__wrapper">
    <div class="half">
        <h1>У тебя к этому <br> талант</h1>
        <div class='top__slider__btns'>
          
          <div class="slider__btn">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/>
            </svg>
          </div>
          
          <div class="slider__btn" @click="moveSlide">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/>
            </svg>
          </div>

        </div>
    </div>
    
      
      <div class="round__border">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 318" class='round__svg'><g id="Слой_2" data-name="Слой 2"><g id="Слой_1-2" data-name="Слой 1"><path class="cls-1" d="M19,158A223.8,223.8,0,0,0,86,318H0V0H84A223.78,223.78,0,0,0,19,158Z"/><path class="cls-1" d="M488,0V318H401A224.5,224.5,0,0,0,403,0Z"/></g></g></svg> 
       <div class="slider__name">
             <agile ref="carousel2" :options="optionsName">
                <div class="slide">
                    <h3>Ivan</h3>
                </div>
                    
                <div class="slide">
                    <h3>Stepan</h3>
                </div>    
            </agile>
        </div>
        <div class="slider__position">
          <agile ref="carousel3" :options="optionsName">
                <div class="slide">
                    <h3>Pekar'</h3>
                </div>
                    
                <div class="slide">
                    <h3>Shmekar'</h3>
                </div>    
            </agile>
        </div>
        <div class='img__slider'>
          <agile ref="carousel">
            <div class="slide">
              <img src="@/assets/images/image10.png" alt="">
            </div>
            <div class="slide">
              <img src="@/assets/images/image10.png" alt="">
            </div>
        </agile>
        </div>
         
          
          
          <!-- <svg width='0' height='0'>
            <defs>
              <clipPath id='myClip'>
                <path class="cls-1" d="M449.5,158.5a223.8,223.8,0,0,1-67,160h-315a224.5,224.5,0,0,1-2-318h319A223.78,223.78,0,0,1,449.5,158.5Z"/>
              </clipPath>
            </defs>
          </svg>  -->
          
      </div>
    </div>
  
 

</div>
</template>

<script>
import { VueAgile } from 'vue-agile'
export default {
  components: {
        agile: VueAgile 
    },
    data(){
      return{
        optionsName:{
          navButtons: false,
          dots:false,
          centerMode:true,
          slidesToShow: 1,
        }
      }
    },
    methods:{
      moveSlide(){
        this.$refs.carousel.goToNext();
        setTimeout(()=>this.$refs.carousel2.goToNext(),100)
        setTimeout(()=>this.$refs.carousel3.goToNext(),270)
      }
    }
}
</script>

<style lang='less'>
@import '~@/assets/css/styles.less';
  .agile{
    h3{
      margin:0;
      text-align: center !important;
    }
    
  }
  .round__svg{
    position: absolute;
    top:0;
    left:0;
    height:400px;
    z-index:2;
    overflow: hidden;
    fill:@grey;
  }
  .slider__wrapper{
    background: @grey;
    height: 43vh;
    padding-left:@ml;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    overflow: hidden;
    margin-bottom:90px;
  }
  .slider__name, .slider__position{
    position:absolute;
    padding:12px 16px;
    background: @w;
    z-index:3;
    border-radius:1000px;
  }
  .slider__name{
    left:10%;
    top:50%;
    .agile{
      width:80px;
    }
  }
  .slider__position{
    right:10%;
    top:10%;
    width:120px;
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
    width: fit-content;
    
  }
  .img__slider{
    .agile{
          width: 65vh;
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