<template>
  <div id="app">
    <el-row>
      <el-col :span="4">
        <div class="el-menu--horizontal h-60 text-center">
          <img src="./assets/logo.png" height="60px"/>
        </div>
      </el-col>
      <el-col :span="20">
        <elmenu></elmenu>
      </el-col>
    </el-row>
    <el-row>
      <router-view/>
    </el-row>
  </div>
</template>

<script>
import elmenu from './components/menu.vue'
export default {
  name: 'app',
  components: {
    elmenu
  },
  mounted () {
    console.log(this.$route)
  }
}
</script>


<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.h-60 {
  height: 60px;
}
.position-fixed{
  position: fixed;
  left: 0;
  right: 0;
}
.margin-60{
  margin-top:60px;
}
</style>
