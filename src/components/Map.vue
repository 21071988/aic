<template>
<div>
  <div v-if='loading'></div>
  <div v-else class="map__wrapper">
    <div class="btns">
      <button @click='showUr'>юрлица</button>
      <button @click='showFiz'>физлица</button>
      <button @click='showAll' class='show__all'>показать все</button>
    </div>
    <yandex-map :coords="coords" :zoom='zoom'>
      
      <div v-for="marker in markers" :key="marker.id">
        <div v-if='marker.TYPE==whichone'>
        <ymap-marker 
          :marker-id="marker.NAME" 
          :coords='[marker.lat,marker.lng]'
          :icon="markerIcon"
        />
      </div>
      <div v-else-if='showA'>
        <ymap-marker 
          :marker-id="marker.NAME" 
          :coords='[marker.lat,marker.lng]'
          :icon="markerIcon"
        />
      </div>
      </div>
      
    </yandex-map>
  </div>  
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
        loading:true,
        whichone:'ur',
        showA:false,
        settings: {
        apiKey: '8a5b1025-d7dd-4b21-916e-9a927df033cc',
        lang: 'ru_RU',
        coordorder: 'latlong',
        version: '2.1',
        
      },
      coords: [
      55.754579203359,37.582321777344,
      ],
      lat:55.754579203359,
      lng:37.582321777344,
      zoom:12,
      coords2: [
      54.84,
      39.831893823,
      ],
      markerIcon: {
        layout: 'default#imageWithContent',
        imageHref: 'http://aic.slim.technology/assets/images/marker.svg',
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
      this.whichone = 'fiz'
      this.showA = false

    },
    showUr(){
      this.whichone = 'ur'
      this.showA = false

      
    },
    showAll(){
      this.showA = true

    }
  },
  computed:{
  },
  mounted(){
    axios
      .get('http://aic.slim.technology/api/get/maps/')
      .then(response => {
        (this.markers = response.data);
        this.loading=false
        });
  }
}
</script>

<style lang='less'>
@import '~@/assets/css/styles.less';
.ymap-container{
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}
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