<template>
  <div id='vacancies'>

    <div class="h__block" id='qBtn'>
      <h2>Вакансии в гросс маркете</h2>
            <router-link to='/questionnaire' v-bind:class='{showBtn : showBtn}' >Заполнить анкету</router-link>
       <div class='top__slider__btns'>
          
          <div class="slider__btn" @click='moveVacancyBack'>
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path v-bind:class='{black : isBlackToo}' d="M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z" fill="black"/>
            </svg>
          </div>
          
          <div class="slider__btn" @click="moveVacancy">
            <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z" fill="black"/>
            </svg>
          </div>
          
        </div>
    </div>
    <div v-if='loading'></div>
    <div v-else class="vacancies__slider">

      <agile ref="vacancies" :options="optionsVacancies">                    
                <div class="slide" v-for="vac in vacs" :key="vac.id">
                    <div class="vacancy">
                        <img class='layer1' v-bind:src="'http://aic.slim.technology/'+vac.PICTURE" alt="worker">          
                      <div class="layer2">
                        <p class="description">
                          {{vac.DESC}}
                        </p>
                      </div>

                      <span class='layer3'>{{vac.NAME}}</span>

                    </div>
                </div>

                   
            </agile>

      
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
      data(){
      return{
        vacs:null,
        isBlackToo:false,
        loading:true,
        wW:null,
        showBtn:false,
        optionsVacancies:{
          navButtons: false,
          dots:false,
          centerMode:true,
          slidesToShow:3.5,
          responsive:[
            {
              breakpoint:1113,
              settings:{
                slidesToShow:3.5
              }
            },
            {
              breakpoint:500,
              settings:{
                slidesToShow:2.5
              }
            },
            {
              breakpoint:0,
              settings:{
                slidesToShow:1.25
              }
            }

          ]
        }
      }
    },
  methods:{
    moveVacancy(){
      this.$refs.vacancies.goToNext();
      this.isBlackToo = true;
    },
    moveVacancyBack(){
      this.$refs.vacancies.goToPrev();
    },
    
  },

  mounted() {
    this.wW = document.body.clientWidth
    axios
      .get('http://aic.slim.technology/api/get/vacansys/')
      .then(response => {(
        this.vacs = response.data);
        this.loading = false
      })
    },
    
  }
</script>

<style lang='less'>
@import '~@/assets/css/styles.less';
#vacancies{
  margin-left:@ml;
  margin-bottom: @mb;
  h2{
  margin-left:0 !important;
}
}
.h__block{
  .between;
  position: relative;
  padding-right:165px;
  a{
    position: absolute;
    background: @ye;
    height: 47px;
    border-radius:8px;
    border:none;
    font-size: 18px;
    .allcenter;
    width: calc(100% - 15px);
    bottom: -170%;
    z-index: 10;
    // display: none;
  }
}
.vacancy{
  height:33.47vw;
  position: relative;
  background: @grey;
  margin-right:30px;
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
  .h__block a{
    display: none;
  }
@media screen and (max-width:1112px){
  #vacancies{
    margin-left:@m;
  }
  .vacancy{
    height: 49.47vw;
  }
  .h__block{
    padding-right:40px;
  }
}
@media screen and (max-width:768px){
  #vacancies{
    margin-left:15px;
  }
  .vacancy{
    height: 104vw;
  }
  .h__block a{
    display: flex;
    opacity: 1;
  }

}
</style>