<template>
<div class="map__wrapper">
  <div v-for='marker in markers' :key="marker.NAME">[{{marker.GEO}}]</div>
  <div class="btns">
    <button @click='showUr'>юрлица</button>
    <button @click='showFiz'>физлица</button>
    <button @click='showAll' class='show__all'>показать все</button>
  </div>
  <yandex-map :coords="coords" :zoom='zoom'>
    
    <div v-for="marker in markers" :key="marker.id">
      <ymap-marker 
        v-if='urlizo'
        :marker-id="marker.NAME" 
        :coords="[marker.GEO]"
        :icon="markerIcon"
      />
    </div>
    
  </yandex-map>
</div>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps'
import axios from 'axios'
export default {
  components: { yandexMap },
data(){
  return{
        markers:null,
        fiz:true,
        urlizo:true,
        settings: {
        apiKey: '8a5b1025-d7dd-4b21-916e-9a927df033cc',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1',
        
      },
      coords: [
      54.82896654088406,
      39.831893822753904,
      ],
      zoom:12,
      coords2: [
      54.84,
      39.831893823,
      ],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'https://image.flaticon.com/icons/png/512/33/33447.png',
        imageSize: [43, 43],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [0, 15],
        contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    }
  }
},
  methods: {
    showFiz(){
      this.fiz=true;
      this.urlizo = false;
    },
    showUr(){
      this.fiz=false;
      this.urlizo=true;

      
    },
    showAll(){
      this.fiz=true;
      this.urlizo=true;

    }
  },
  mounted(){
    axios
      .get('http://aic.slim.technology/api/get/maps/')
      .then(response => (this.markers = response.data));
  }
}
</script>

<style lang='less'>
@import '~@/assets/css/styles.less';
button{
  font-size: 18px;
  padding:10px 15px;
  border-radius: 8px;
  background: @w;
  border:none;
  margin-bottom:20px;
  width:fit-content;
}
.btns{
  position:absolute;
  bottom:20px;
  left:20px;
  z-index:10;
  .column;
}
.show__all{
  background: @ye;
}
.ymap-container{
  .w100;
  height:100%;
}
.map__wrapper{
  position:relative;
  margin:0 @ml 80px;
  width:calc(100% - 165px * 2);
  height: 540px;

}
.ymap-container{
  position:absolute;
}
</style>