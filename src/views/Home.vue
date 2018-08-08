<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-card class="box-card" >
        <h3 class="line">资产概况</h3>
        <el-row>
          <el-col :span="8">
            <h5>资产</h5>
            <div class="red money-label">¥{{zc | money}}</div>
          </el-col>
          <el-col :span="8">
            <h5>负债</h5>
            <div class="green money-label">¥{{fz | money}}</div>
          </el-col>
          <el-col :span="8" class="text-right">
            <h5>净资产</h5>
            <div class="red money-label">¥{{jzc | money}}</div>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>

</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
    
  },
  data() {
    return {
      zc: 10000,
      fz: 5000
    };
  },
  computed:{
    jzc () {
      return this.zc - this.fz
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>



.text-right{
  text-align: right;
}


</style>

