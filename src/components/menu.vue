<template>
  <el-menu :default-active="activeIndex" router class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="/">概览</el-menu-item>
    <el-menu-item index="/plus">收入</el-menu-item>
    <el-menu-item index="/minus">支出</el-menu-item>
  </el-menu>
</template>
<script>
export default {
   data() {
    return {
      activeIndex: '/'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

