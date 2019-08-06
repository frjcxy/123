let request=function (url,method='get',data={},header={}) {
  
    return new Promise((resolve,reject)=>{
        wx.showToast({
            title:'加载中',
            icon:'loading'
        })
        wx.request({
            url:url,
            method:method,
            data:data,
            header:header,
            success:function (res) {
                resolve(res)
                wx.hideLoading()
              },
              fail:function(res){
                  reject(res)
              }
        })
    })

  }
  //宽展封装get方法
  request.get=function (url,data) {
      return request(url,'get',data,{})
    }
  //暴露
  export default request