<template>
  <div class="all">
    <div class="ri-d1">
      <p class="ri-d1-p">
        <span class="ri-span">
          <strong>入库管理</strong>
        </span>
      </p>
    </div>
    <div class="list1">
      <div class="list-first">
        <div class="list-first2">
          <h4>
            <span>数据筛选</span>
          </h4>
        </div>
        <div class="list-first3">
         <a> <el-button circle="heightsearch" type="text" @click="dialogFormVisible = true">高级搜索</el-button></a>

          <el-dialog title="高级搜索" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-col :span="12"><div class="grid-content bg-purple">
                <el-form-item label="入库单号"  :label-width="formLabelWidth" class="heiso">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="供应商编号"  :label-width="formLabelWidth" class="heiso">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="供应商编号名称"  :label-width="formLabelWidth" class="heiso">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
                </div></el-col>
              
              <el-col :span="12"><div class="grid-content bg-purple">
                <el-form-item label="单据类型"  :label-width="formLabelWidth" class="heiso">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="采购收货入库" value="shanghai"></el-option>
                  <el-option label="销售退货入库" value="beijing"></el-option>
                  <el-option label="生产产品入库" value="se1"></el-option>
                  <el-option label="领用退还入库" value="se2"></el-option>
                  <el-option label="借货入库" value="se3"></el-option>
                  <el-option label="借出还入" value="se4"></el-option>
                </el-select>
              </el-form-item>
              
              <el-form-item label="入库单状态"  :label-width="formLabelWidth" class="heiso">
                <el-select v-model="form.region" placeholder="请选择">
                  <el-option label="全部" value="shanghai"></el-option>
                  <el-option label="待审核" value="beijing"></el-option>
                  <el-option label="审核成功" value="se1"></el-option>
                  <el-option label="审核失败" value="se2"></el-option>
                </el-select>
              </el-form-item>
              
              <el-form-item label="起始时间"  :label-width="formLabelWidth" class="heiso">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
                </div></el-col>
              
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
      <div class="list-input">
        <ul>
          <li>
            <p>
              <span>产品编号:</span>
              <el-input class="input1" v-model="input" placeholder="请输入内容"></el-input>
            </p>
          </li>
          <li>
            <p>
              <span>产品名称:</span>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </p>
          </li>
          <li>
            <p>
              <span>仓库:</span>
              <el-select v-model="value2" placeholder="请选择">
                <el-option
                  v-for="item in options2"
                  :key="item.value2"
                  :label="item.label2"
                  :value="item.value2"
                ></el-option>
              </el-select>
            </p>
          </li>
          <li>
            <el-button type="primary" icon="el-icon-search">查询</el-button>
          </li>
          <li>
            <el-button plain icon="el-icon-switch-button">重置</el-button>
          </li>
        </ul>
      </div>
      <div class="list-from">
        <div class="li-fr-fir-le">
          <h4>
            <span>数据列表</span>
          </h4>
        </div>
        <div class="li-fr-fir-ri">
          <ul>
            <li>
              <el-button class="input2" icon="el-icon-folder-add" plain>新增</el-button>
            </li>
            <li>
              <el-button class="input2" icon="el-icon-edit" plain>编辑</el-button>
            </li>
            <li>
              <el-button class="input2" icon="el-icon-delete-solid" plain>删除</el-button>
            </li>
            <li>
              <el-button class="input2" icon="el-icon-refresh" plain>刷新</el-button>
            </li>
            <li>
              <el-button class="input2" icon="el-icon-upload2" plain>导出</el-button>
            </li>
          </ul>
        </div>
      </div>
      <div class="list-table">
        <el-table
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          border="ture"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column label="订单号" width="104" prop="ding"></el-table-column>
          <el-table-column label="设备名称" width="104" prop="sebei"></el-table-column>
          <el-table-column prop="bianhao" label="产品编号" width="104"></el-table-column>

          <el-table-column prop="pici" label="批次" width="80"></el-table-column>
          <el-table-column prop="guige" label="规格" width="60"></el-table-column>
          <el-table-column prop="number" label="数量" width="65"></el-table-column>
          <el-table-column prop="kuwei" label="库位" width="79"></el-table-column>
          <el-table-column prop="ruku" label="入库类型" width="104"></el-table-column>
          <el-table-column prop="gongyin" label="供应商" width="80"></el-table-column>
          <el-table-column prop="zidan" label="制单人" width="70"></el-table-column>
          <el-table-column prop="zhuangtai" label="状态" width="75"></el-table-column>
          <el-table-column prop="shenhe" label="审核人" width="70"></el-table-column>
          <el-table-column prop="shenhedata" label="审核时间" width="95"></el-table-column>

          <el-table-column prop="caozuo" label="操作" width="170" show-overflow-tooltip>1111</el-table-column>
        </el-table>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ruku",
  data() {
    return {
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
      options2: [
        {
          value2: "选项1",
          label2: "全部"
        },
        {
          value2: "选项2",
          label2: "待审核"
        },
        {
          value2: "选项3",
          label2: "审核成功"
        },
        {
          value2: "选项4",
          label2: "审核失败"
        }
      ],
      label2: "",
      value2: "",
      value: "",
      input: "",
      tableData: [
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        },
        {
          ding: "RKD100001",
          sebei: "设备箱",
          bianhao: "000184",
          pici: "20190518",
          guige: "台",
          number: "3250",
          kuwei: "默认正式库位",
          ruku: "销售退货入库",
          gongyin: "华为科技",
          zidan: "李明喜",
          zhuangtai: "等待审核",
          shenhe: "刘晓雯",
          shenhedata: "2019-05-29 10:10"
        }
      ]
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>
<style scoped>
.all {
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
.list1 {
  margin: 20px 0px 0 20px;
  background-color: #ffffff;
}
.list-first {
  width: 1177px;
  height: 50px;
  border: 1px solid #e9e9e9;
}
.list-first2 > h4 {
  float: left;
  padding: 10px;
  line-height: 30px;
  color: #666666;
}
.list-first3 > a {
  float: right;
  line-height: 50px; 
  color: #1a87fe;
  margin-right: 5px;
}
.list-first3 > a:hover {
  color: #3394fe;
  cursor: pointer;
}
.list-input {
  border: 1px solid #e9e9e9;
  height: 80px;
}
.list-input > ul > li {
  list-style: none;
  display: inline-block;
  margin: 0px 10px;
  line-height: 80px;
}
.input1 {
  width: 180px;
  height: 35px;
}
.list-from {
  background-color: #ffffff;
  height: 60px;
  margin-top: 20px;
  border: 1px solid #e9e9e9;
}
.li-fr-fir-le > h4 {
  float: left;
  padding: 10px;
  line-height: 30px;
  color: #666666;
}
.li-fr-fir-ri {
  float: right;
}
.li-fr-fir-ri ul li {
  list-style: none;
  display: inline-block;
  margin: 0 5px;
  line-height: 60px;
}
.input2 {
  background-color: #f5f5f5;
}
.list-table {
  border: 1px solid #e9e9e9;
}
.list-first3 a{
  float: right;
  font-weight: 900;
}
.heightsearch {
  float: right;
}
.heiso{
  width: 100%;
}
</style>