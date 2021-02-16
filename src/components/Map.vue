<template>
<div>
  <div v-if='loading'></div>
  <div v-else class="map__wrapper">
    <div class="btns">
      <button @click='showUr'>юрлица</button>
      <button @click='showFiz'>физлица</button>
      <button @click='showAll' class='show__all'>показать все</button>
    </div>
    <div class="zooming__btns">
      <div @click='zoomIn'>
        <svg width="28" height="36" viewBox="0 0 28 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="13" width="2" height="14" rx="1" transform="rotate(-90 5 13)" fill="black"/>
        <rect x="13" y="19" width="2" height="14" rx="1" transform="rotate(180 13 19)" fill="black"/>
        <line x1="-2.18557e-08" y1="35.5" x2="28" y2="35.5" stroke="#F5F5F5"/>
        </svg>
      </div>
      <div @click='zoomOut'>
        <svg width="14" height="2" viewBox="0 0 14 2" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="2" width="2" height="14" rx="1" transform="rotate(-90 0 2)" fill="black"/>
        </svg>
      </div>
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
        controls:[]
        
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
        imageHref: 'http://aic.slim.technology/img/logo.aa6d86e2.svg',
        
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
      

    },
    zoomIn(){
      this.zoom = this.zoom + 1
    },
    zoomOut(){
      this.zoom = this.zoom - 1
    }
  },

  mounted(){
    axios
      .get('http://aic.slim.technology/api/get/maps/')
      .then(response => {
        (this.markers = response.data);
        this.loading=false
        });
  },

}
</script>

<style lang='less'>
@import '~@/assets/css/styles.less';
[class*="ymaps-2-1"][class*="-ground-pane"]{
  -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
}
.ymaps-2-1-78-gototech, .ymaps-2-1-78-controls__control, .ymaps-2-1-78-traffic, .ymaps-2-1-78-listbox, .ymaps-2-1-78-float-button, .ymaps-2-1-78-gotoymaps__container, .ymaps-2-1-78-copyright__wrap, .ymaps-2-1-78-searchbox__input-cell, .ymaps-2-1-78-controls__control_toolbar{
  display: none  !important;
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
.zooming__btns{
  position: absolute;
  right:20px;
  bottom:20px;
    z-index:10;
  .column;
  background: #ffffff;
  padding:10px;
  div{
    &:last-child{
      height:25px
    }
  }


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
.ymap-markers{
  div{
    z-index:20;
  }
}
@media screen and (max-width:1112px){
  .map__wrapper{
    margin:0 40px;
    width: calc(100% - 80px);
  }
}
@media screen and (max-width:768px){
  .map__wrapper{
    margin:0 10px;
    width: calc(100% - 20px);
  }
}
</style>