import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import Logo from './Logo.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import VueAppend from 'vue-append'

Vue.use(VueAppend)
Vue.use(BootstrapVue)

Vue.component('logo', {
  components: { Logo },
  template: '<Logo/>'
});

Vue.component('listimage', {
  props: { num: Number,item: String},
  template: '<div><h3>{{TrueIndex}}</h3><img :src="item" class="img-fluid"><h3>長：{{imageheight}} 寬：{{imagewidth}}</h3></div>',
  data: function () {
    let img = new Image();
    img.src = this.item;
    return {
      imageheight:img.height,
      imagewidth:img.width,
      TrueIndex:this.num+1
    }
  }
});

new Vue({
  el: '#app',
  data: {
    isNotImage: false,
    userinput: '',
    imagetag: '',
    images:[],
    myStyle: {
      color: 'red',
      fontSize: '30px'
    }
  },
  watch: {
    userinput: function (newURL, oldURL) {
      if (newURL.endsWith('.jpg') || newURL.endsWith('.png')) {
        this.isNotImage = false;
        this.AddImage(newURL);
      }
      else {
        this.isNotImage = true;
      }
    }
  },
  methods: {
    AddImage: function (url) {
      this.imagetag = url;
      this.images.push(this.imagetag);
    }
  }
})



