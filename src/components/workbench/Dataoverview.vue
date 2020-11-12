<template>
  <div>
    <div class="ri-d1">
      <p class="ri-d1-p">
        <span class="ri-span">
          <strong>数据概览</strong>
        </span>
      </p>
    </div>
    <div class="ri-d2">
      <div class="ri-d3">
        <div class="ri-d3-d1">
          <p>数据总览</p>
        </div>
        <div class="ri-d3-d1">
          <p>仓库作业</p>
        </div>
      </div>
      <div class="div1">
        <ul>
          <li>
            <p>
              <span>库存总量</span>
            </p>
            <p>
              <strong>76,763,424.80</strong>
            </p>
            <p>
              <span>库存成本</span>
            </p>
            <p>
              <strong>3,665,745,933.54</strong>
            </p>
          </li>
          <li>
            <p>
              <span>本年销售总额</span>
            </p>
            <p>
              <strong>16,349.00</strong>
            </p>
            <p>
              <span>本年销售毛利</span>
            </p>
            <p>
              <strong>2,660.31</strong>
            </p>
          </li>
          <li>
            <p>
              <span>本周销售总额</span>
            </p>
            <p>
              <strong>349.00</strong>
            </p>
            <p>
              <span>本周销售毛利</span>
            </p>
            <p>
              <strong>660.31</strong>
            </p>
          </li>
          <li>
            <p>
              <span>本年采购额</span>
            </p>
            <p>
              <strong>2,815,102,175.90</strong>
            </p>
            <p>
              <span>本月采购额</span>
            </p>
            <p>
              <strong>1,400,990,823.71</strong>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Dataoverview"
};
</script>
<style scoped>
.ri-d1 {
  padding: 15px 0 10px 0;
  background-color: #ffffff;
}
.ri-d1-p {
  margin-left: 200px;
  color: #999999;
}
.ri-span {
  border-left: 5px solid #0079fe;
}
.ri-span > strong {
  margin-left: 10px;
}

.ri-d3 {
  margin-top: 3px;
  margin-left: 550px;
}
.ri-d3-d1{
  height: 30px;
  width: 200px;
  background-color: #ffffff;
  display: inline-block;
}
.ri-d3-d1>p:hover {
  border-bottom: 4px solid #3d84e7;
  color: #3d84e7;
  cursor: pointer;
}
.ri-d3-d1>p {
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: 4px solid #797979;
}
.div1{
  margin-top: 10px;
  background-color: #fff;
  margin-left: 160px;
  height: 170px;
}
ul>li {
  list-style: none;
}
.div1>ul>li {
  margin-top: 10px;
  display: inline-block;
  width: 280px;
  height: 50px;
  line-height: 35px;
}
.div1>ul>li>p{
  text-align: center;
color: #666666;
}

</style>