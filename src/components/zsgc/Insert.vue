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
            <p class="input-p">入库单号:</p>
            <el-input v-model="input" placeholder="可不填写，自动生成" class="inputwe"></el-input>
            <p class="input-p">
              <span style="color: red">*</span>供应商编号:
            </p>
            <el-input v-model="input" placeholder="请输入关键词搜索或者双击选择" class="inputwe"></el-input>
            <p class="input-p">
              <span style="color: red">*</span>供应商联系方式:
            </p>
            <el-input v-model="input" placeholder class="inputwe"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p class="input-p">
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
            <p class="input-p">
              <span style="color: red">*</span>供应商名称:
            </p>
            <el-input v-model="input" placeholder="可不填写，自动生成" class="inputwe"></el-input>
            <p class="input-p">
              <span style="color: red">*</span>制单人:
            </p>
            <el-input v-model="input" placeholder="张丽" class="inputwe"></el-input>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <p class="input-p">关联订单号:</p>
            <el-input v-model="input" placeholder class="inputwe"></el-input>
            <p class="input-p">供应商联系人:</p>
            <el-input v-model="input" placeholder class="inputwe"></el-input>
            <p class="input-p">制单时间:</p>
            <el-input v-model="input" placeholder="2019-05-25" class="inputwe"></el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple"></div>
        </el-col>
      </el-row>
      <div class="cen-text">
        <p>备注:</p>
        <el-input
          type="textarea"
          class="text1"
          :autosize="{ minRows: 5, maxRows: 6}"
          placeholder="请输入内容"
          v-model="textarea1"
        ></el-input>
      </div>
      <div class="cen-he">
        <div class="cen-le">
          <p>
            <strong>入库产品信息</strong>
          </p>
        </div>
        <div class="cen-ri">
          <el-button type="text" icon="el-icon-plus" @click="dialogFormVisible = true">新增产品</el-button>

          <el-dialog width="60%" title="选择产品" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-row :gutter="0">
                <el-form-item class="input-we" label="产品编号" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入编号"></el-input>
                </el-form-item>
                <el-form-item class="input-we" label="产品名称" :label-width="formLabelWidth">
                  <el-input v-model="form.name" autocomplete="off" placeholder="请输入名称"></el-input>
                </el-form-item>
                <el-button class="so" type="primary" size="mini">搜 索</el-button>
              </el-row>
              <el-table
                class="bor"
                ref="multipleTable"
                :data="tableData"
                border
                tooltip-effect="dark"
                style="width: 100%"
                @selection-change="handleSelectionChange"
              >
                <el-table-column class="bor" type="selection" width="55"></el-table-column>
                <el-table-column class="bor" label="产品编码" width="80" prop="cpid"></el-table-column>
                <el-table-column class="bor" prop="name" label="姓名" width="80"></el-table-column>
                <el-table-column class="bor" prop="guige" label="规格" width="80"></el-table-column>
                <el-table-column class="bor" prop="leibie" label="类别" width="80"></el-table-column>
                <el-table-column class="bor" prop="chucun" label="储存单位" width="80"></el-table-column>
                <el-table-column class="bor" prop="baozhuangtype" label="包装类型" width="80"></el-table-column>
                <el-table-column class="bor" prop="danjia" label="单价" width="80"></el-table-column>
                <el-table-column class="bor" prop="kg" label="重量" width="72"></el-table-column>
                <el-table-column class="bor" prop="xiansiname" label="显示名" width="80" show-overflow-tooltip></el-table-column>
              </el-table>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "insert",
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  },
  data() {
    return {
      tableData: [
        {
          cpid: "000187",
          name: "设备箱",
          guige: "个",
          leibie: "数码产品",
          chucun: "件",
          baozhuangtype: "1",
          danjia: "50",
          zhongliang: "0",
          xiansiname: " "
        },
        {
          cpid: "000180",
          name: "J29B浩方移动电源",
          guige: "个",
          leibie: "数码产品",
          chucun: "件",
          baozhuangtype: "1",
          danjia: "15",
          zhongliang: "0",
          xiansiname: " "
        },
        {
          cpid: "000187",
          name: "设备箱",
          guige: "个",
          leibie: "数码产品",
          chucun: "件",
          baozhuangtype: "1",
          danjia: "200",
          zhongliang: "0",
          xiansiname: " "
        },
        {
          cpid: "000187",
          name: "设备箱",
          guige: "个",
          leibie: "数码产品",
          chucun: "件",
          baozhuangtype: "1",
          danjia: "253",
          zhongliang: "0",
          xiansiname: " "
        },
        {
          cpid: "000180",
          name: "J29B浩方移动电源",
          guige: "个",
          leibie: "数码产品",
          chucun: "件",
          baozhuangtype: "1",
          danjia: "152",
          zhongliang: "0",
          xiansiname: " "
        },
        {
          cpid: "000187",
          name: "设备箱",
          guige: "个",
          leibie: "数码产品",
          chucun: "件",
          baozhuangtype: "1",
          danjia: "152",
          zhongliang: "0",
          xiansiname: " "
        },
        {
          cpid: "000187",
          name: "设备箱",
          guige: "个",
          leibie: "数码产品",
          chucun: "件",
          baozhuangtype: "1",
          danjia: "222",
          zhongliang: "0",
          xiansiname: " "
        }
      ],
      multipleSelection: [],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px",
      input: "",
      input2: "",
      options: [
        {
          value: "选项1",
          label: "采购收货入库"
        },
        {
          value: "选项2",
          label: "销售退货入库"
        },
        {
          value: "选项3",
          label: "生产产品入库"
        },
        {
          value: "选项4",
          label: "领用退还入库"
        },
        {
          value: "选项5",
          label: "借货入库"
        },
        {
          value: "选项6",
          label: "借出还入"
        }
      ],
      value: ""
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
.grid-content:nth-of-type(1) {
  margin-left: 50px;
}
.inputwe {
  margin: 20px 0 0 20px;
  width: 200px;
  height: 50px;
}
.input-p {
  margin: 20px 0 0 20px;
}
.cen-text > p {
  margin: 10px 0 0 70px;
}
.text1 {
  width: 800px;
  margin: 20px 0 0 70px;
}
.cen-he {
  height: 50px;
  width: 800px;
  border: 1px solid #e9e9e9;
  margin: 20px 0 0 70px;
}
.cen-le {
  float: left;
  line-height: 50px;
  margin-left: 10px;
}
.cen-ri {
  float: right;
  line-height: 50px;
  height: 20px;
  margin-right: 10px;
}
.bg-purple-light {
  float: right;
}
el-col {
  padding-left: 0px;
}
.input-we {
  float: left;
  width: 300px;
  margin: 0px;
  padding: 0px;
}
.so {
  margin-left: 50px;
}
.bor{
  
}
</style>