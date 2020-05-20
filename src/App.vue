<template>
  <!-- 根组件 -->
  <div id="app">
    <!-- 3. 调用组件 -->
    <!-- 属性传值： 值有两种情况： 1.传值 2.传引用（对象， 数组） -->
    <Header @titleChange="updateTitle" :title="title" />
    <Users :users="users" />
    <hr />
    <Users :users="users" />
    <Footer :title="title" />
  </div>
</template>

<script>
// 1. 局部组件的调用
import Header from "./components/Header";
import Users from "./components/Users";
import Footer from "./components/Footer";

export default {
  name: "App",
  data() {
    return {
      users: [
        { name: "zpp", mima: "123", show: false },
        { name: "zpp1", mima: "1234", show: false },
        { name: "zpp2", mima: "12345", show: false }
      ],
      title: "Vue Zpp"
    };
  },
  // 2. 注册组件
  components: {
    Header,
    Users,
    Footer
  },
  methods: {
    updateTitle(updatedTitle) {
      this.title = updatedTitle;
    }
  }
};
</script>

<style>
</style>
