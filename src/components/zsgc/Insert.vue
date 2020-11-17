<template>
  <div class="body">
    <div class="ri-d1">
      <p class="ri-d1-p">
        <span class="ri-span">
          <strong>新增入库</strong>
        </span>
      </p>
    </div>
    <div class="cen">
      <div class="cen-he">
        <p class="lep">
          <strong>新增入库单</strong>
        </p>
        <p class="rip">
          <span style="color: red">*</span> 为必填项
        </p>
      </div>
      <el-row :gutter="20">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <p></p>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>入库单号:</p>
            <el-input v-model="input" placeholder="可不填写，自动生成" class="inputwe"></el-input>
            <p><span style="color: red">*</span>供应商编号:</p>
            <el-input v-model="input" placeholder="请输入关键词搜索或者双击选择" class="inputwe"></el-input>
            <p><span style="color: red">*</span>供应商联系方式:</p>
            <el-input v-model="input" placeholder="" class="inputwe"></el-input>
          </div>
          
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>
              <span style="color: red">*</span> 入库单类型:
            </p>
            <el-select v-model="value" placeholder="请选择入库类别" class="inputwe">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <p><span style="color: red">*</span>供应商名称:</p>
            <el-input v-model="input" placeholder="可不填写，自动生成" class="inputwe"></el-input>
            <p><span style="color: red">*</span>制单人:</p>
            <el-input v-model="input" placeholder="张丽" class="inputwe"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p>关联订单号:</p>
            <el-input v-model="input" placeholder="" class="inputwe"></el-input>
            <p>供应商联系人:</p>
            <el-input v-model="input" placeholder="" class="inputwe"></el-input>
            <p>制单时间:</p>
            <el-input v-model="input" placeholder="2019-05-25" class="inputwe"></el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  name: "insert",
  data() {
    return {
      input: "",
      input2: "",
      options: [{
          value: '选项1',
          label: '采购收货入库'
        }, {
          value: '选项2',
          label: '销售退货入库'
        }, {
          value: '选项3',
          label: '生产产品入库'
        }, {
          value: '选项4',
          label: '领用退还入库'
        }, {
          value: '选项5',
          label: '借货入库'
        }, {
          value: '选项6',
          label: '借出还入'
        }],
        value: ''
    };
  }
};
</script>
<style scoped>
.body {
  margin-left: 150px;
}
.ri-d1 {
  padding: 15px 0 10px 0;
  background-color: #ffffff;
}
.ri-d1-p {
  margin-left: 30px;
  color: #999999;
}
.ri-span {
  border-left: 5px solid #0079fe;
}
.ri-span > strong {
  margin-left: 10px;
}
.cen {
  width: 1000px;
  height: 1000px;
  background-color: #ffffff;
  margin: 20px 100px;
  border: 1px solid #e9e9e9;
}
.cen-he {
  width: 100%;
  height: 38px;
  border: 1px solid #e9e9e9;
  color: #666666;
}
.lep {
  float: left;
  line-height: 38px;
  margin-left: 20px;
  color: #666666;
}
.rip {
  float: right;
  line-height: 38px;
  margin-right: 20px;
  color: #999999;
  font-size: 12px;
}
.grid-content:nth-of-type(1){
    margin-left: 50px;
}
.inputwe{
    width: 300px;
    height: 20px;
}
</style>