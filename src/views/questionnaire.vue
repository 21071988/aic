<template>
  <div class='quests'>
    <h1>Работа твоей мечты</h1>
    <div class="quests__wrapper">
      
      <div class="quests__form mr">
        <form @submit='checkAndSubmit'>
          <label for="vacancy">
            
            <span>Вакансия*<img class='checked' src="@/assets/images/checked.svg" alt=""></span>
            <div class="select__block">
              <div class='select__arrow'>
              </div>
              <select 
                class='checkers'
                v-model='nv.vacancy' 
                v-bind:class="{ redSelect: isRedSelect }"
                >
                <option disabled value="">Выберите вакансию</option>
                <option v-bind:value="vac.NAME" v-for="vac in vacs" :key="vac.id">{{vac.NAME}}</option>
              </select>
              
            </div>
          </label>
          <span v-if='isRedSelect' class='redSelectText'>Заполните это поле</span>
          

          <label for="fio">
            
            <span>ФИО*<img class='checked' src="@/assets/images/checked.svg" alt=""></span>
            <input
              type="text"
              class='req checkers'
              v-model="nv.fio"
              @blur='fioCheck'>
            
          </label>
          <span class='red'>{{fiomsg}}</span>

          <div class="flex flex__block">
            <div class='m40 half'>
              <label for="dob" class='half'><span>Дата рождения*<img class='checked'  src="@/assets/images/checked.svg" alt=""></span>
                <input 
                type="date"
                class='req checkers'
                max="2005-01-01"
                v-model="nv.dob"
                @blur='dobCheck'>
              </label>
              <span class='red'>Заполните это поле</span>
            </div>
            <div class='half'>
              <h3><span>Пол</span><img class='checked__male' v-if='checkedMale' src="@/assets/images/checked.svg" alt=""></h3>
              <div class="male__type flex">
                      
                    <input 
                      type="radio" 
                      class='w27' 
                      id="one" 
                      value="Мужской" 
                      v-model="nv.sex"
                      hidden>
                    <label for="one" @click='showMale' class='m20'>
                      <div class="big__circle"><div class="small__circle" v-if='showDot==1'></div></div>
                      Мужской</label>
                     
                    <input 
                      type="radio"
                      id="two" 
                      class='w27' 
                      value="Женский" 
                      v-model="nv.sex"
                      hidden>
                    <label for="two" @click='showFemale'>
                      <div class="big__circle" ><div class="small__circle" v-if='showDot==2'></div></div>
                      Женский</label>
                
      

            </div>
          </div>
        </div>
          <div class="flex flex__block">
            <div class='m40 half'>
              <label for="phone" class='half'><span>Телефон*<img class='checked phone__checked' src="@/assets/images/checked.svg" alt=""></span>
                <masked-input 
                  v-model="nv.phone" 
                  class='mr req checkers'
                  mask="\+\7 (111) 111-1111"
                  placeholder="+7("
                  type="tel"
                  ref="MaskedInput"
                   />
              </label>
              <span class='red phone__red'>Заполните это поле</span>
            </div>
            <div class='half'>
              <label for="mail mr half"><span>Электронная почта*<img v-if='!error3' src="@/assets/images/checked.svg" alt=""></span>
                <input type="text"
                  class='mr req checkers'
                  v-model="nv.email"
                  @blur='mailCheck'
                  >
                </label>    
                <span class='red'>Поле заполнено некорректно</span>
            </div>
          </div>
          <h3>Резюме</h3>
          <textarea 
            id="" n
            rows="10"
            v-model='nv.rezumetext'>
          </textarea>
          <label for="file" class='file__label'>
            <span>
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V17C12 19.757 9.757 22 7 22C4.243 22 2 19.757 2 17V5C2 3.346 3.346 2 5 2C6.654 2 8 3.346 8 5V14C8 14.551 7.551 15 7 15C6.449 15 6 14.551 6 14V6H4V14C4 15.657 5.343 17 7 17C8.657 17 10 15.657 10 14V5C10 2.239 7.761 0 5 0C2.239 0 0 2.239 0 5V17C0 20.866 3.134 24 7 24C10.866 24 14 20.866 14 17V5H12Z" fill="black"/>
              </svg>
               Выберите или перетащите файл
            </span>
          </label>
          {{file.name}}
          <input
            type="file" 
            class='inputfile' 
            id="file" ref="file" 
            placeholder="выберете или перетащите файл" 
            v-on:change="handleFileUpload()"/>
          
          <h3>Капча</h3>
          <div v-if='anothershow'>
            
          <span v-if='isRobot' class='robot'>Давайте убедимся что вы не робот </span>
          </div>
          <div class="" v-else>
            <Captcha id="recaptchaDiv" :siteKey='siteKey'
              :show="1" 
              render='explicit'
              size="normal" 
              theme="light"
              :tabindex="0"
              @verify="recaptchaVerified"
              @expire="recaptchaExpired"
              @fail="recaptchaFailed"
              ref="vueRecaptcha">
            </Captcha>
          </div>        
          <div class="flex checkThis__block">
            <div class="checkShow" @click='checkAgree'>
              <svg v-if='showAgree' width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <p v-bind:class='{red__text : redText}'>я подтверждаю согласие на обработку персональных <br> данных и принимаю условия рассмотрения обращений*</p>
          </div>
          <button class='submit' v-bind:class="{yelloBtn : isYellowBtn} ">
            Отправить
            </button>
        </form>
      </div>


 

      <div class="quests__text">
        <h2>Наша суперцель</h2>
        <p>&mdash;&nbsp;стать любимым магазином для каждой российской семьи. Сотни тысяч наших сотрудников ежедневно работают над её достижением. Мы&nbsp;уверены, что в&nbsp;ближайшие годы достигнем этого и&nbsp;будет здорово, если вместе с&nbsp;тобой.</p>
        <div class='phone__link'><a href="tel:+79264331416">+7(926)433-14-16</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import MaskedInput from 'vue-masked-input'
import Captcha from 'vue3-recaptcha2';



export default {
  components:{
    MaskedInput,
    Captcha
    
  },
  data(){
    return{
      errors:[],
      vacs:null,
      rezumeFile:'',
      isYellowBtn:false,
      isRedSelect:false,
      show:false,
      fiomsg:"Заполните это поле",
      siteKey:'6Lf7kVgaAAAAAOnJyLpEVludrOO74RL4Qzz2xljo',
      nv:{
        vacancy:'',
        fio:'',
        dob:'',
        sex:'Male',
        phone:'',
        email:'',
        rezumetext:'',
      },
        file:'',
        error3:true,
        showDot:0,
        checkedMale:false,
        checkedAgreement:false,
        showAgree:false,
        redText:false,
        redirect:false,
        cRes:false,
        isRobot:false
    }
  },
  beforeCreate(){
    this.show=1
    console.log(this.show)
  },
  created(){
    this.show=1
    
    
  },
  beforeMount(){
    console.log(this.show)
  },

  beforeDestroy(){
    console.log(this.show)
  },
  mounted(){
      this.show=1
      axios
      .get('http://aic.slim.technology/api/get/vacansys/')
      .then(response => {(
        this.vacs = response.data);
        this.loading = false
      })
      
      let checkers = Array.from(document.querySelectorAll('.checkers'));
      let checkIcon = Array.from(document.querySelectorAll('.checked'));
      for(let i=0;i<checkIcon.length;i++){
        checkers[i].addEventListener('blur',()=>{
          (checkers[i].value !='' ? checkIcon[i].style.opacity='1' : 1)  
        })
      }
      
      //phone mask input check
      const maskedInput = this.$refs.MaskedInput;
      const input = maskedInput.$refs.input;
      let phoneErrorText = document.querySelector('.phone__red');
      let phoneErr=document.querySelector('.phone__red');
      let phoneCheck=document.querySelector('.phone__checked');
      
      input.addEventListener("blur", function() {
        if(this.value[16]=='_'||this.value==''){
              input.style.background = '#f8d3d2'
              phoneErr.style.display = 'block'
              phoneCheck.style.opacity = '0'
            if(this.value[4]!=='_'){
              phoneErrorText.innerText = 'Поле не заполнено до конца';
            }else{
              phoneErrorText.innerText = "Заполните это поле";
            }
        }
        else{
          input.style.background = '#F5F5F5'
          phoneErr.style.display = 'none'
          phoneCheck.style.opacity = '1'
        }
      });
    
  },
  methods:{
    recaptchaVerified(response) {
      if(response){
        this.cRes = true
      }
      return response
      
    },
    recaptchaExpired() {
      this.$refs.vueRecaptcha.reset();
    },
    recaptchaFailed() {
    },
    checkingFunction(condition,num){
      let red='#f8d3d2';
      let grey='#F5F5F5';
      let errsIn = Array.from(document.querySelectorAll('.req'));
      let errs = Array.from(document.querySelectorAll('.red'));

      if(condition){
        errs[num].style.display='block';errsIn[num].style.background=`${red}`;
        this.errors.push(1);
        }
      else{
        if(this.nv.fio.match(/[0-9]/) !== null){
          errs[0].style.display='block';errsIn[0].style.background=`${red}`;
          this.errors.push(1);
          this.fiomsg='Фамилия может содержать только буквы'
        }
        else if(this.nv.fio==' '){
          errs[0].style.display='block';errsIn[0].style.background=`${red}`;
          this.errors.push(1);
        }
        else{
          errs[num].style.display='none';errsIn[num].style.background=`${grey}`;
          if(this.errors.length>0){this.errors.pop(1);}
        }
      }

        
    },

    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },

    checkErrors(){
      this.checkingFunction(this.nv.fio=='', 0);
      this.checkingFunction(this.nv.dob=='', 1);
      this.checkingFunction(this.nv.phone=='', 2);
      this.checkingFunction(!this.validEmail(this.nv.email), 3);      
    },
    checkSelect(){
      if(this.nv.vacancy==''){
        this.isRedSelect = true;
        window.scrollTo(0,250);
      }else{
        this.isRedSelect = false;
      }
    },
    upload() {
      let formData = new FormData();
      formData.append('vacancy', this.nv.vacancy);
      formData.append('fio', this.nv.fio);
      formData.append('dob', this.nv.dob);
      formData.append('sex', this.nv.sex);
      formData.append('phone', this.nv.phone);
      formData.append('email', this.nv.email);
      formData.append('rezumetext', this.nv.rezumetext);
      formData.append('file', this.file);
      formData.append('filename', this.file.name);
      axios.post('http://aic.slim.technology/api/post/form/', formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })      
    },

    //THIS IS YOUR MAIN FUNCTION !!!!!!!!!!!!!!!!!!!!!
    checkAndSubmit(e){
      this.errors=[];
     if(this.checkedAgreement==false){
        this.redText = true
        e.preventDefault()
      }
      this.checkSelect();
      if(this.isRedSelect == true){e.preventDefault()}
      this.checkErrors();
      if(this.errors.length==0){
        if(this.cRes == true){
          this.upload();
          this.redirect = true;
          this.$router.push('Success');
          return true;
        }
        else{
          this.isRobot = true
          e.preventDefault();
        }
      }
    },


    handleFileUpload(){
      this.file = this.$refs.file.files[0];
    },
    checkAgree(){
      this.showAgree = !this.showAgree,
      this.checkedAgreement = !this.checkedAgreement
      this.checkErrors()
      if(this.errors.length==0){this.isYellowBtn = true;}
      if(this.redText == true){this.redText = false}
      
    },
    showMale(){
      this.showDot = 1
      this.checkedMale = true
    },
    showFemale(){
      this.showDot = 2
      this.checkedMale = true
    },
    
    fioCheck(){
      this.checkingFunction(this.nv.fio=='', 0);      
    },
    dobCheck(){
      this.checkingFunction(this.nv.dob=='', 1);
    },

    mailCheck(){
      this.checkingFunction(!this.validEmail(this.nv.email), 3);
      (!this.validEmail(this.nv.email) ? this.error3 = true : this.error3 = false);
    }
  },
  computed:{
    showTrue: function(){
      return console.log('true');
    },
   
  },
}
</script>

<style scoped lang='less'>
@import '~@/assets/css/styles.less';
.submit{
  a{
    &:hover{
      color:@bl !important;
    }
  }
}
.male__type{
  label{
    margin-top:0 !important;
  }
}
.cap{
  width: 200px;
  height: 100px ;
}
.m20{
  margin-right: 20px;
}
.robot{
  font-size: 12px;
  color:@red;
}
.red__text{
  color:@red !important;
}
.select__block{
  position:relative;
  height:47px;
  margin-top:20px;
}
select {
  padding-right: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position:absolute;
  background: url(http://aic.slim.technology/images/ar.svg) no-repeat right @grey  !important;
  background-position-x: calc(100% - 22px) !important;
  top:0;
  left:0;
  margin:0 !important;
}
.redSelect{
  background: url(http://aic.slim.technology/images/ar.svg) no-repeat right rgb(248, 211, 210)  !important;
    background-position-x: calc(100% - 22px) !important;
}
.select__arrow{
  position:absolute;
  z-index:2;
  bottom:15px;
  right:10px;
}

.flex__block{
  h3{
    margin-top:40px;
  }
}
.checkThis{
  width: 30px;
  background: @grey;
  position: relative;
}
.checkShow{
  background:@grey;
  width: 30px;
  height: 30px;
  z-index:2;
  .allcenter;
  margin-bottom:35px;
}
.checkThis__block{
  .flex;
  align-items: center;
  p{
    margin-left:10px;
  }
}
.inputfile {
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.file__label{
  width: calc(100% - 20px);
  margin-bottom:20px;
  background:@grey;
  height: 50px;
  .flex;
  align-items: flex-start;
  color:#c7c7c7;
  justify-content: center;
  padding-left:20px;
  .t5;
  &:hover{
    .cp;
  }
  span{
    .flex;
    justify-content: center;
  }
  svg{
    path{fill:#c7c7c7;}
    margin-right:10px;
  }
}
.checked{
  width: 10.5px;
  margin-left:10px;
  opacity: 0;
}
.checked__male{
  width: 10.5px;
  margin-left:10px;
}
#male, #female{
  .flex;
  margin-right:20px;
  font-size: 14px;
}
.big__circle{
  width: 24px;
  height:24px;
  margin-right: 5px;
  border-radius:50%;
  background:@grey;
  position: relative;
}
.small__circle{
  width: 10px;
  height: 10px;
  overflow: auto;
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  background: @bl;
  border-radius:50%;
}
.w27{
  width:27px;
}

.phone__link{
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
h2{
  margin-left:0;
}
.mr{
  margin-right:125px;
}
.m40{
  margin-right: 40px;
}
.half{
  flex:1;
} 
h3{
  text-align: left;
  margin-top:40px;
}
input, textarea{
  width: calc(100% - 20px);
}
textarea{
  margin-top: 0 !important;
}
.male__type{
  height: 47px;
  margin-top:0 !important;
  label{
    flex-direction: row !important;
  }

  input{
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
    margin-right: 20px;
  }
}
.quests{
    margin:0 @ml 80px;
    h1{
      font-size: 72px;
      text-align: left;
      width: fit-content;
    }
  }
  .quests__wrapper{
    display:grid;
    grid-template-columns: 3fr minmax(350px, 2fr);
  }
  .red{
    color:#FF6666;
    display: none;
  }
  .redSelectText{
    color:#FF6666;
  }
  .quests__form{
    .mr;
    flex:1;
    form{
      text-align: left;
      label{
        margin-top:40px;
      }
      button{
        height: 47px;
        .w100;
        border:none;
        background:@grey;
        .t5;
      }
      input, select, textarea, option{
        background:@grey;
        border:none;
        border-radius: 8px;
        margin-top: 15px;
        padding:10px;
        
      }
      input, select, option{
        height:27px;
      }
      label{
        .column;
        text-align: left;
        margin-top:40px;
        
      }
      select{
        width: 100%;
        height: 47px;
      }
    }
  }
  .yelloBtn{
  .t5;
  background: @ye !important;
}
  .quests__text{
    flex:1;
    text-align: left;
    h2{
      .f1;
    }
    p{
      .f2;
      width: 80%;
    }
    div{
      width: 100%;
      background:@grey;
      height: 73px;
      .allcenter;
      a{
        margin:auto;
        font-size: 24px;
      }

    }  
  }
  @media screen and(max-width:1112px){
    .m20{
      margin-right:100px;
    }
    .quests__wrapper{
      display: block;
    }
    .quests{
      margin:0 40px 80px;
      padding-bottom:49px;
    }
    .quests__form{
      margin-right:0;
    }
  }
  
  @media screen and(max-width:768px){
    .quests__form form label{
      width: auto;
      margin-top:0;
    }
    .flex__block{
      .column;
    }
    .m40{
      margin-right: 0;
    }
    h1{
      font-size: 48px !important;
      margin:0;
    }
    .quests{
      margin:0 15px;
    }
    .checkThis__block{
      font-size: 14px;
    }
  }
</style>