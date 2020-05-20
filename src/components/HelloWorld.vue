// 组件
<template>
  <!-- Html结构 只能有一个根标签 就是只能有一个div -->
  <div class="HelloWorld">
    <h1>{{ msg }}</h1>
    <p>{{ wechat }}</p>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
// js部分 逻辑部分
export default {
  name: "HelloWorld",
  // props: {
  //   msg: String
  // }
  data() {
    return {
      msg: "zpp",
      wechat: "1234567"
    };
  },
  methods: {
    greeting() {
      return `我叫: ${this.msg}, 微信是:${this.wechat}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* css样式和部分 */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
