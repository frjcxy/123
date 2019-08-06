<template>
  <div>
  <tophead></tophead>
   <!-- 内容区域 -->
    <div class="content">
   <!-- 左边 -->
      <div class="nav">
        <div class="nav-item" @click="setRightData(index)" :class="{active:selectedIndex==index}" v-for="(item,index) in dataList " :key='index'>{{item.cat_name}}</div>
      </div>
      <!-- 右边 -->
      <div class="goods">
        <image class="topimg" src="https://img.alicdn.com/simba/img/TB1WhQTO7voK1RjSZPfSutPKFXa.jpg" mode="aspectFill"></image>
        <div class="list" v-for="(item,index) in rightList" :key='index'>
          <div class="title">
            <span>/</span> {{item.cat_name}}
            <span>/</span>
          </div>
          <div class="item-list">
            <a  :href="'/pages/searchlist/main?query=' + subitem.cat_name" class="item" v-for="(subitem, subindex) in item.children" :key="subindex">
              <image :src="'https://itjustfun.cn/'+subitem.cat_icon" mode="aspectFill"></image>
              <span>{{subitem.cat_name}}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tophead from '../../components/tophead.vue'
import request from '../../utils/request.js'
export default {
  data(){
    return{
      dataList:[],
      selectedIndex:0,
      rightList:[]

    }
  },
  methods: {
    setRightData(index){
      this.selectedIndex=index
      // 右边数据
      this.rightList=this.dataList[index].children
    },
    //列表数据
   async getmeun(){
     let url= 'https://itjustfun.cn/api/public/v1/categories'
      let res= await request(url)
      this.dataList=res.data.data;
      // 右边数据默认值
      this.rightList=this.dataList[this.selectedIndex].children
      // console.log(this.dataList)
    }
  },
  components:{
    tophead
  },
  mounted() {
     this.getmeun()
  },
}
</script>

 
<style lang="less">
@import "./index.less";

</style>
