<template>
  <div>
  <div class="slider__wrapper">
    <div>
        <h1>У тебя к этому талант</h1>
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
    <div class='round__block'>
      <div class="circle">
         <!-- slider name -->
         <div class="slider__name">
             <agile ref="carousel2" :options="optionsName">
                <div class="slide" v-for="item in items" :key="item.id">
                    <h3>{{item.NAME}}</h3>
                </div>    
            </agile>
        </div>
       <!-- slider job -->
        <div class="slider__position">
          <agile ref="carousel3" :options="optionsName">
                <div class="slide" v-for="item in items" :key="item.id">
                    <h3>{{item.VACANSY_NAME}}<br/></h3>
                </div>
                     
            </agile>
        </div>
       <!-- slider image -->
        <div class="slider__asbolute">
            <agile ref="carousel" :options='imgSlider'>
              <div class="slide" v-for="item in items" :key="item.id" >
                <img v-bind:src="'http://aic.slim.technology/'+item.PICTURE" alt="">
              </div>
            </agile> 
        </div>
      </div>
    </div>
      
     
    </div> 


</div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
        
    },
    data(){
      return{
        items: null,
        optionsName:{
          navButtons: false,
          dots:false,
          centerMode:true,
          slidesToShow: 1,
          arrows:false
        },
        imgSlider:{
          navButtons: false,
          dots:false,
          centerMode:true,
          slidesToShow: 1,
          arrows:false
        }
      }
    },
    methods:{
      moveSlide(){
        this.$refs.carousel.goToNext();
        setTimeout(()=>this.$refs.carousel2.goToNext(),100)
        setTimeout(()=>this.$refs.carousel3.goToNext(),270)
      }
    },
    created() {
    axios
      .get('http://aic.slim.technology/api/get/banners/')
      .then(response => (this.items = response.data));
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
  .round__block{
    overflow:hidden;
  }
  .circle{
    height:600px;
    width:600px;
    border-radius:50% !important;
    position: relative;
    overflow: hidden;
    transform:translateY(-100px);
  }
  .slider__asbolute{
    position: absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    background: cadetblue;
    .agile{
      margin-top:100px;
    }
  }
  .round__svg{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    z-index:2;
    overflow: hidden;
    fill:@grey;
  }
  .slider__wrapper{
    background: @grey;
    height: 400px;
    padding:0 @ml;
    display: grid;
    grid-template-columns: 1fr minmax(600px, 2fr);
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
    left:15%;
    top:63%;
    .agile{
      width:80px;
    }
  }
  .slider__position{
    right: 17%;
    top: 24%;
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
    width: 100%;
    overflow: hidden;  
  }
  .img__slider{
    width: 100%;
    .agile{
      img{
          width: 100%;
        }
      }
  }
  h1{
    .thefontL;
    font-size: 66px;
    line-height: 55px;
    margin-bottom:@m;
    width: 250px;
  }
  @media screen and (max-width:768px){
    .slider__wrapper{
      padding:0 0 0 45px;
      grid-template-columns: 1fr 1fr;
    }
    .slider__position{
      right:auto;
      left:27%;
    }
  }
  @media screen and (max-width:375px){
    .slider__wrapper{
      padding:0;
      grid-template-columns: 1fr;
      height: auto;
    }
    .top__slider__btns{
      display: none;
    }
    .round__block{
      height: 400px;
    }
    .round__block{
      align-items: flex-start;
    }
    .slider__asbolute{
      .agile{
        margin-top:0;
      }
    }
    h1{
      width: auto;
      margin:50px @m;
      font-size: 40px;
      line-height: 40px;
    }
    .circle{
      transform:translateX(-150px);
    }
    .slider__position {
    right: 25%;
    left: auto;
    top: 10%;
    }
    .slider__name {
    left: 30%;
    top: 50%;
  }
  }
</style>