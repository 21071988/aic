<template>
  <div class='quests'>
    <h1>Работа твоей мечты</h1>
    <div class="quests__wrapper">
      
      <div class="quests__form mr">
        <form>
          <label for="vacancy">
            
            <span>Вакансия*<img class='checked' src="@/assets/images/checked.svg" alt=""></span>
            <div class="select__block">
              <div class='select__arrow'>
                <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.86601 9.5C6.48111 10.1667 5.51886 10.1667 5.13396 9.5L0.803833 2C0.418933 1.33333 0.900059 0.5 1.66986 0.5L10.3301 0.5C11.0999 0.5 11.581 1.33333 11.1961 2L6.86601 9.5Z" fill="black"/>
                 </svg>
              </div>
              <select name="vacancy" class='w100 checkers' v-model='vacancy'>
                
                <option value="tovaroved">Товаровец</option>
                <option value="tovaroved">другая</option>
              </select>
            </div>
          </label>

          <label for="fio">
            
            <span>ФИО*<img class='checked' src="@/assets/images/checked.svg" alt=""></span>
            <input type="text" name='fio' class='w100 req checkers' v-model="fio" @blur='fioCheck'>
            
          </label>
          <span class='red'>Заполните это поле</span>

          <div class="flex flex__block">
            <div class='m40 half'>
              <label for="dob" class='half'><span>Дата рождения*<img class='checked'  src="@/assets/images/checked.svg" alt=""></span>
                <input 
                type="date"
                name='dob'
                class='w100 req checkers'
                v-model="dob"
                @blur='dobCheck'>
              </label>
              <span class='red'>Заполните это поле</span>
            </div>
            <div class='half'>
              <h3><span>Пол</span><img class='checked__male' v-if='checkedMale' src="@/assets/images/checked.svg" alt=""></h3>
              <div class="male__type w100 flex">
              <div id='male' @click='showMale'>
                <div class="big__circle"><div class="small__circle" v-if='showDot==1'></div></div>
                <input
                  type="radio"
                  name='sex'
                  value='male'
                  class='w27'
                  v-model='sex'>Мужской
              </div>
              <div id='female'>
                <div class="big__circle" @click='showFemale'><div class="small__circle" v-if='showDot==2'></div></div>
                <input type="radio"
                  name='sex'
                  value='female'
                  class='w27'
                  v-model='sex'>Женский 
              </div>  
            </div>
          </div>
        </div>

          <div class="flex flex__block">
            <div class='m40'>
              <label for="phone" class='half'><span>Телефон*<img class='checked' src="@/assets/images/checked.svg" alt=""></span>
                <masked-input 
                  v-model="phone" 
                  name='phone'
                  class='mr req checkers'
                  mask="\+\7 (911) 111-1111"
                  placeholder="+7(9"
                  type="tel"
                   />
              </label>
              <span class='red'>Заполните это поле</span>
            </div>
            <div>
              <label for="mail mr half"><span>Электронная почта*<img v-if='!error3' class='checked' src="@/assets/images/checked.svg" alt=""></span>
                <input type="text"
                  name='mail'
                  class='mr req checkers'
                  v-model="email"
                  @blur='mailCheck'
                  >
                </label>    
                <span class='red'>Поле заполнено не корректно</span>
            </div>
          </div>
          <h3>Резюме</h3>
          <textarea name="" id="" rows="10" class='w100' v-model='rezumetext'></textarea>
          <label for="file" class='file__label'>
            <span>
              <svg width="14" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V17C12 19.757 9.757 22 7 22C4.243 22 2 19.757 2 17V5C2 3.346 3.346 2 5 2C6.654 2 8 3.346 8 5V14C8 14.551 7.551 15 7 15C6.449 15 6 14.551 6 14V6H4V14C4 15.657 5.343 17 7 17C8.657 17 10 15.657 10 14V5C10 2.239 7.761 0 5 0C2.239 0 0 2.239 0 5V17C0 20.866 3.134 24 7 24C10.866 24 14 20.866 14 17V5H12Z" fill="black"/>
              </svg>
               Выберите или перетащите файл
            </span>
          </label>
          <input
            type="file"
            name='file'
            class='w100 inputfile'
            placeholder="выберете или перетащите файл"
            id='file'
          >
          <h3>Капча</h3>
          <div class="flex checkThis__block">
            <input 
              type="checkbox"
              class='checkers checkThis'
              v-model='checkedAgreement'
              hidden
            >
            <div class="checkShow" @click='checkAgree'>
              <svg v-if='showAgree' width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.5L3.76768 8.9963C4.17134 9.50623 4.94668 9.50124 5.34375 8.98615L11.5 1" stroke="black" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <p>я подтверждаю согласие на обработку персональных <br> данных и принимаю условия рассмотрения обращений*</p>
          </div>
          <button class='submit w100' @click='checkErrors'>Отправить</button>
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

import MaskedInput from 'vue-masked-input'
export default {
  components:{
    MaskedInput
  },
  data(){
    return{
      errors:[],
      vacancy:'',
      fio:'',
      dob:'',
      sex:'',
      phone:'',
      email:'',
      rezumetext:'',
      rezumeFile:'',
      showDot:0,
      checkedMale:false,
      checkedAgreement:'',
      showAgree:false,
      error3:''
    }
  },
  mounted(){
      let checkers = Array.from(document.querySelectorAll('.checkers'));
      let checkIcon = Array.from(document.querySelectorAll('.checked'));
      
      for(let i=0;i<checkers.length;i++){
        checkers[i].addEventListener('blur',()=>{
          (checkers[i].value !='' ? checkIcon[i].style.opacity='1' : 1)  
        })
      }
    
  },
  methods:{
    checkAgree(){
      this.showAgree = !this.showAgree,
      this.checkedAgreement = !this.checkedAgreement
    },
    showMale(){
      this.showDot = 1
      this.checkedMale = true
    },
    showFemale(){
      this.showDot = 2
      this.checkedMale = true
    },
    checkingFunction(condition,num){
      
      let red='#f8d3d2';
      let grey='#F5F5F5';

      let errsIn = Array.from(document.querySelectorAll('.req'));
      let errs = Array.from(document.querySelectorAll('.red'));

      if(condition){errs[num].style.display='block';errsIn[num].style.background=`${red}`;}
      else{errs[num].style.display='none';errsIn[num].style.background=`${grey}`;}
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    checkErrors(e){
      this.checkingFunction(this.fio=='', 0);
      this.checkingFunction(this.dob=='', 1);
      this.checkingFunction(this.phone.length<17, 2);
      this.checkingFunction(!this.validEmail(this.email), 3);

      e.preventDefault();
    },
    fioCheck(){
      this.checkingFunction(this.fio=='', 0);
    },
    dobCheck(){
      this.checkingFunction(this.dob=='', 1);
    },
    someFunc(){
      console.log(2); 
    },
    mailCheck(){
      this.checkingFunction(!this.validEmail(this.email), 3);
      (!this.validEmail(this.email) ? this.error3 = true : (this.error3 = false));
     if(this.phone[16]=='_'){console.log(33)}
    }
  },
  computed:{
    showTrue: function(){
      return console.log('true');
    } 
  },
  watch:{
    function(){
      console.log(this.showDot)
    }
  }
  
}
</script>

<style scoped lang='less'>
@import '~@/assets/css/styles.less';

.select__block{
  position:relative;
  height:47px;
}
select {
  padding-right: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  position:absolute;
  top:0;
  left:0;
  margin:0 !important;
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
}
.big__circle{
  width: 24px;
  height:24px;
  margin-right: 10px;
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
}
input{
  .w100;
}
.male__type{
  height: 47px;

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
  .quests__form{
    .mr;
    flex:1;
    form{
      text-align: left;
      button{
        height: 47px;
        border:none;
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
        .w100;
      }
      select{
        width: calc(100% + 10px);
        height: 47px;
      }
    }
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
  @media screen and(max-width:768px){
    .quests__wrapper{
      display: block;
    }
    .quests{
      margin:0 40px 80px;
    }
    .quests__form{
      margin-right:0;
    }
  }
  
  @media screen and(max-width:375px){
    .flex__block{
      .column;
    }
  }
</style>