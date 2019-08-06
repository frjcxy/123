<template>
  <div>
    <!-- 搜索框 -->
    <div class="search">
      <div class="search-input">
        <input type="text" @confirm="search" v-model="query" placeholder="请输入要搜索的内容">
        <icon type="search" size="16"></icon>
      </div>
      <div v-if="query.length === 0 ? false: true" @click="ccancle" class="mybtn">取消</div>
    </div>
    <!-- 历史搜索 -->
    <div class="history">
      <div class="titile">
        <div class="left">历史搜索</div>
        <icon class="clear" type="clear" size="16"></icon>
      </div>
      <div class="his-item">
        <div class="item">小米</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: '',
      searchList: []
    }
  },
  methods: {
    ccancle() {
      this.query = ''
    },
    // 点击完成时的搜索方法：
    search() {
      // 1.0 获取当前输入框中输入的内容
      // 2.0 跳转到搜索页面
      wx.navigateTo({
        url: '/pages/searchlist/main?query=' + this.query
      })
      // 要将 搜索 的内容保存起来
      this.searchList.push(this.query)
      this.searchList=[...new Set(this.searchList)]
      // 存储到stroage
      wx.serStroageSync('')
      console.log(this.searchList)
    }
  }
}
</script>

<style scoped lang="less">
@import "./index.less";
</style>
