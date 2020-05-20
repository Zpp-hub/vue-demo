<template>
  <div class="footer">
    <h1>{{copyright}} {{title}}</h1>
  </div>
</template>>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      copyright: "CopyRight"
    };
  }
};
</script>

<style scoped>
.footer {
  background: rgb(212, 210, 75);
  padding: 6px;
}
p {
  color: #222;
  text-align: center;
}
</style>