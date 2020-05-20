<template>
  <div class="header">
    <p @click="changeTitle">{{title}}</p>
  </div>
</template>>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  // data() {
  //   return {
  //     title: "Vue Components Demo"
  //   };
  // }
  methods: {
    changeTitle() {
      // this.title = "change Title";
      // 注册事件， 参数1.事件名称  参数2.....值
      this.$emit("titleChange", "zpp 通过注册事件更改父组件的title值！");
    }
  },
  // 生命周期函数
  beforeCreate() {
    alert("这时实例还没有被创建， 所以无法知道data, 也不能用watch监听");
  },
  created() {
    alert("这时实例已经创建， 可以得到data，调用watch, 但是页面还是空白的");
  },
  beforeDestroy() {
    alert("页面挂载前，此时页面依然是空白的， 这时render函数首次被调用");
  },
  mounted() {
    alert("页面已经挂载了，这时你可以看到页面的内容， 也可以访问dom");
  },
  beforeUpdate() {
    alert(
      "数据更新前， 也就是虚拟Dom打补丁之前， 这时访问到的DOM还是原来的DOM"
    );
  },
  updated() {
    alert("数据已经更新完毕");
  },
  beforeDestroy() {
    alert("页面离开之前被调用的， 清除定时器， 或者三方的DOM结构");
  },
  destroyed() {
    alert("实例已经完全被销毁");
  }
};
</script>

<style scoped>
.header {
  background: lightpink;
  padding: 10px;
}
p {
  color: #222;
  text-align: center;
}
</style>