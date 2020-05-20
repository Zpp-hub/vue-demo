<template>
  <div class="users">
    <ul>
      <li @click="user.show = !user.show" v-for="(user, index) in users" :key="index">
        <h2>姓名：{{user.name}}</h2>
        <h3 v-show="user.show">密码：{{user.mima}}</h3>
      </li>
    </ul>
    <!-- 传引用 -->
    <button @click="deleteUser">deleteUser</button>
  </div>
</template>>

<script>
export default {
  // props: ["users"],
  props: {
    users: {
      type: Array,
      required: true
    }
  },
  data() {
    return {};
  },
  methods: {
    test() {
      console.log(this.users);
    },
    deleteUser() {
      this.users.pop();
    }
  }
};
</script>
<style>
</style>