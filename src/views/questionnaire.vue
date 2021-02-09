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
            <input type="text" name='fio' class='w100'>
          </label>

          <div class="flex">
            <label for="dob" class='half m40'>Дата рождения*
              <input type="date" name='dob' class=' w100'>
            </label>
            <div class='half'>
              <h3>Пол</h3>
              <div class="male__type w100 flex">
               <input type="radio" name='sex' value='male'>Мужской
               <input type="radio" name='sex' value='female'>Женский 
            </div>
            </div>
            
          </div>

          <div class="flex">
            <label for="phone" class='half m40'>Телефон*
              <input type="text" name='phone' class='mr'>
            </label>

           <label for="mail mr half">Электронная почта*
              <input type="text" name='mail' class='mr'>
            </label>    
          </div>
          <h3>Резюме</h3>
          <textarea name="" id="" rows="10" class='w100'></textarea>
          <input type="file" class='w100' placeholder="выберете или перетащите файл">
          <h3>Капча</h3>
          <div class="flex">
            <input type="checkbox">
            <p>я подтверждаю согласие на обработку персональныхданных и принимаю условия рассмотрения обращений*</p>
          </div>
          <button class='submit w100'>Отправить</button>
        </form>
      </div>

      <div class="quests__text">
        <h2>Наша суперцель</h2>
        <p>&mdash;&nbsp;стать любимым магазином для каждой российской семьи. Сотни тысяч наших сотрудников ежедневно работают над её достижением. Мы&nbsp;уверены, что в&nbsp;ближайшие годы достигнем этого и&nbsp;будет здорово, если вместе с&nbsp;тобой.</p>
        <div><a href="tel:+79264331416">+7(926)433-14-16</a></div>

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
    .flex;
  }
  .quests__form{
    .mr;
    flex:1;
    form{
      button{
        height: 47px;
        border:none;
      }
      input, select, textarea, option{
        background:@grey;
        border:none;
        border-radius: 8px;
        margin-bottom:40px;
        margin-top: 15px;
        padding:10px 0 10px 10px;
        
      }
      input, select, option{
        height:27px;
      }
      label{
        .column;
        text-align: left;
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
</style>