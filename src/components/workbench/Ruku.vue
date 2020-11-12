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
            <div class="list-first2"><h4><span>数据筛选</span></h4></div>
            <div class="list-first3">
                <a><strong>高级搜索</strong></a>
            </div>
        </div>
        <div class="list-input">
            <ul>
                <li><el-input class="input1" v-model="input" placeholder="请输入内容"></el-input></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ruku",
  data() {
      return {
        input: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          tag: '家'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          tag: '公司'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          tag: '家'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          tag: '公司'
        }]
      }
    },
    methods: {
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
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
        const property = column['property'];
        return row[property] === value;
      }
    }
};
</script>
<style scoped>
.all{
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
.list1{
    margin: 20px 0px 0 20px;
    background-color: #ffffff;  
}
.list-first{
    width: 1177px;
    height: 50px;
    border: 1px solid #E9E9E9;
}
.list-first2>h4{
    float: left;
    padding: 10px ;
    line-height: 30px;
    color: #666666;
}
.list-first3>a{
    float: right;
    line-height: 50px;
    color: #1A87FE;
    margin-right: 5px;
}
.list-first3>a:hover{
    color: #3394FE;
    cursor: pointer;
}
</style>