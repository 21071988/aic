<template>
  <div class='quests'>
    <h1>Работа твоей мечты</h1>
    <div class="quests__wrapper">
      
      <div class="quests__form mr">
        <form>
          <label for="vacancy">Вакансия*
            <select name="vacancy" class='w100'>
              <option value="tovaroved">Товаровец</option>
              <option value="tovaroved">другая</option>
            </select>
          </label>

          <label for="fio">ФИО*
            <input type="text" name='fio' class='w100 req' v-model="fio" @blur='fioCheck'>
            
          </label>
          <span class='red'>Заполните это поле</span>

          <div class="flex flex__block">
            <div class='m40'>
              <label for="dob" class='half'>Дата рождения*
                <input 
                type="date"
                name='dob'
                class='w100 req'
                v-model="dob"
                @blur='dobCheck'>
              </label>
              <span class='red'>Заполните это поле</span>
            </div>
            <div class='half'>
              <h3>Пол</h3>
              <div class="male__type w100 flex">
               <input type="radio" name='sex' value='male'>Мужской
               <input type="radio" name='sex' value='female'>Женский 
            </div>
            </div>
            
          </div>

          <div class="flex flex__block">
            <div class='m40'>
              <label for="phone" class='half'>Телефон*
                <masked-input 
                  v-model="phone" 
                  name='phone'
                  class='mr req'
                  mask="\+\7 (911) 111-1111"
                  placeholder="+7(9"
                  type="tel"
                  @blur='phoneCheck' />
              </label>
              <span class='red'>Заполните это поле</span>
            </div>
            <div>
              <label for="mail mr half">Электронная почта*
                <input type="text"
                  name='mail'
                  class='mr req'
                  v-model="email"
                  @blur='mailCheck'
                  >
                </label>    
                <span class='red'>Поле заполнено не корректно</span>
            </div>
          </div>
          <h3>Резюме</h3>
          <textarea name="" id="" rows="10" class='w100'></textarea>
          <input
            type="file"
            class='w100'
            placeholder="выберете или перетащите файл"
          >
          <h3>Капча</h3>
          <div class="flex">
            <input type="checkbox">
            <p>я подтверждаю согласие на обработку персональныхданных и принимаю условия рассмотрения обращений*</p>
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
      fio:'',
      dob:'',
      phone:'',
      email:''
    }
  },
  methods:{
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
      this.checkingFunction(this.phone.length<1, 2);
      this.checkingFunction(!this.validEmail(this.email), 3);

      e.preventDefault();
    },
    fioCheck(){
      this.checkingFunction(this.fio=='', 0);
    },
    dobCheck(){
      this.checkingFunction(this.dob=='', 1);
    },
    phoneCheck(){
      this.checkingFunction(this.phone.length<1, 2);
    },
    mailCheck(){
      this.checkingFunction(!this.validEmail(this.email), 3);
    }
    
  }
}
</script>

<style scoped lang='less'>
@import '~@/assets/css/styles.less';
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
  justify-content: space-around;
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
        padding:10px 0 10px 10px;
        
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