# vue-loading

加载页

#### 安装

```
npm install @lydxwj/vue-loading --save
```

#### 使用

```
import Loading from '@lydxwj/vue-loading';
Vue.use(Loading);
<template>
    <Loading class="myloading" :srcList="srcList">
        <template v-slot="obj">
          <div>{{obj.progress}}%</div>
        </template>
    </Loading>
</template>
export default {
  name: 'app',
  data () {
    return {
      number: 0,
      srcList: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559738559098&di=c8c212941da82e85fdc49f06272da023&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F32fa828ba61ea8d3fcd2e9ce9e0a304e241f5803.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559738559098&di=fcfa50a3fed4b01438ac9d93ee644039&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2F4610b912c8fcc3cef70d70409845d688d53f20f7.jpg',
      ],
    };
  }
};
</script>
```

#### 属性

- srcList 资源数组

  静态资源需要使用require处理

  支持格式`.png .jpg .jpeg .gif`， `.css`，`.js`

- time 自定义时间，毫秒，定义时间时不会等待资源加载完

#### 方法

- percent百分比更新回调

  参数percent：当前百分数0~100

- complete完成回调，加载完或者加载失败或者加载时间结束等情况下执行

  参数res:加载过的资源对象

- fail失败回调

  参数e：失败对象，src：失败的资源地址，idx：当前失败是第几项

**属性和方法都是可选的**