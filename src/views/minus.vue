<template>
  <el-row>
    <el-col :offset="2" :span="20">
      <el-card class="box-card">
        <h3 class="line">支出</h3>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="分类">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="日常购物" value="normal"></el-option>
              <el-option label="衣服饰品" value="cloth"></el-option>
              <el-option label="食品酒水" value="food"></el-option>
              <el-option label="居家物业" value="house"></el-option>
              <el-option label="休闲娱乐" value="game"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动区域">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="活动时间">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
            <el-col class="line" :span="2">-</el-col>
            <el-col :span="11">
              <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="即时配送">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质">
            <el-checkbox-group v-model="form.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" v-own="form.desc">
            <el-radio-group v-model="form.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" >
            <el-input type="textarea" v-model="form.desc"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </el-col>
  </el-row>  
</template>
<script>
export default {
  name:'minus',
  data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        testshow:true,
        searchText:'',
        filterList:[
          {name:'c1',id:1},
          {name:'c2',id:2},
          {name:'a1',id:3}
        ]
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>
<style scoped>

</style>
