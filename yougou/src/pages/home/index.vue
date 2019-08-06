<template>
  <div>
   <tophead></tophead>
    <!--轮播图  -->
    <div class="loop">
      <swiper indicator-dots autoplay circular>
        <block v-for="(iten,index) in imgList" :key="index"> 
          <swiper-item>
            <!-- < :src="iten.image_src"> -->
              <image :src="iten.image_src" mode="aspectFit"></image>
            <!-- {{iten}} -->
          </swiper-item>
        </block>
      </swiper>
    </div>
    <div class="cate">
      <div class="item" v-for="(item,index) in cateList" :key="index">
        <image :src="item.image_src" mode="aspectFit"></image>
      </div>
    </div>
    <!-- 楼层区 -->
    <div class="tower" v-for="(item,index) in tower" :key='index'>
       <div class="title">
        <image mode="aspectFit" :src="item.floor_title.image_src"></image>
      </div>
      <div class="con">
        <div class="left">
          <image :src="item.product_list[0].image_src" mode="aspectFit"></image>
        </div>
        <div class="right">
          <image  v-if="subindex != 0 " v-for="(subitem,subindex) in item.product_list" :key="subindex" :src="subitem.image_src" mode="aspectFill" ></image>
          <!-- <image :src="item.product_list[2].image_src" mode="aspectFill" ></image>
          <image :src="item.product_list[3].image_src" mode="aspectFill" ></image>
          <image :src="item.product_list[4].image_src" mode="aspectFill" ></image> -->
         
        </div>
      </div>
    </div>
   


  </div>
</template>

<script>
//导入request 
import request from "../../utils/request.js"
//
import tophead from "../../components/tophead.vue"
export default {
  data(){
    return{
      imgUrl:[1,2,3],
      imgList:[],
      // 楼层数据
      tower:[],
      //分类数据
      cateList:[]
    }
  },
  methods: {
    // 轮播图数据
   async getimgList(){
    let url="https://itjustfun.cn/api/public/v1/home/swiperdata"
    let res= await request(url)
    // console.log(res)
    this.imgList=res.data.data
    },
    //楼层数据
    async gettower(){
      let url='https://itjustfun.cn/api/public/v1/home/floordata'
      let res= await request(url)
      // console.log(res)
      this.tower=res.data.data
    },
    //分类数据
    async getcate(){
         let url='https://itjustfun.cn/api/public/v1/home/catitems'
        let res= await request(url)
      // console.log(res)
      this.cateList=res.data.data
    }
  },
 async mounted() {
   this.getimgList()
   this.gettower()
   this.getcate()
   
  },
  components:{
    tophead
  }
};
</script>

<style lang='less'>
// 引入css
@import url(./index.less);
</style>
