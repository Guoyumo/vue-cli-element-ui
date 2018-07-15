<template>
  <el-row>
    <el-col :span="20" :offset="2">
      <el-card class="box-card" >
        <h3 class="line">资产概况</h3>
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
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
      activeIndex: '1'
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style scoped>
.box-card{
  margin:3rem auto;
}
.line{
  border-bottom: 1px solid #eee;
}
</style>

