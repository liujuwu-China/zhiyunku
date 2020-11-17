<template>
  <div class="shouye">
    <div class="left">
      <el-col class="col" :span="10" unique-opened="true">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <span>工作台</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>快捷功能</span>
              </template>
              <el-menu-item index="1-1">
                <router-link tag="div" to="/zhiyun/zhu">数据概览</router-link>
              </el-menu-item>
              <el-menu-item index="1-2">
                <router-link tag="div" to="/zhiyun/zhu2">入库管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-3">
                 <router-link tag="div" to="/zhiyun/zhu3">出库管理</router-link>
              </el-menu-item>
              <el-menu-item index="1-4">
                <router-link tag="div" to="/zhiyun/zhu4">盘点管理</router-link>
              </el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>报表分析</span>
              </template>
              <el-menu-item index="1-5">
                <router-link tag="div" to="/zhiyun/zhu5">仓库台账</router-link>
              </el-menu-item>
              <el-menu-item index="1-6">库存预警</el-menu-item>
              <el-menu-item index="1-7">库存清单</el-menu-item>
              <el-menu-item index="1-8">财务记账</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <span>仓库管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>出入库管理</span>
              </template>
              <el-menu-item index="2-1">入库管理</el-menu-item>
              <el-menu-item index="2-2">出库管理</el-menu-item>
              <el-menu-item index="2-3">移库管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>盘点调拨管理</span>
              </template>
              <el-menu-item index="2-4">报损管理</el-menu-item>
              <el-menu-item index="2-5">盘点管理</el-menu-item>
              <el-menu-item index="2-6">调拨管理</el-menu-item>
              <el-menu-item index="2-7">盘点管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <span>业务管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>采购销售管理</span>
              </template>
              <el-menu-item index="3-1">采购管理</el-menu-item>
              <el-menu-item index="3-2">采购退货</el-menu-item>
              <el-menu-item index="3-3">销售管理</el-menu-item>
              <el-menu-item index="3-4">销售退货</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <span>财务管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>财务数据</span>
              </template>
              <el-menu-item index="4-1">财务类别</el-menu-item>
              <el-menu-item index="4-2">应收管理</el-menu-item>
              <el-menu-item index="4-3">应付管理</el-menu-item>
              <el-menu-item index="4-4">财务记账</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <span>报表管理</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>报表数据</span>
              </template>
              <el-menu-item index="5-1">库存清单</el-menu-item>
              <el-menu-item index="5-2">可出库存</el-menu-item>
              <el-menu-item index="5-3">期初期末</el-menu-item>
              <el-menu-item index="5-4">库存台账</el-menu-item>
              <el-menu-item index="5-5">库存预警</el-menu-item>
              <el-menu-item index="5-6">库存容量</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <span>基础资料</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>仓库资料</span>
              </template>
              <el-menu-item index="6-1">仓库管理</el-menu-item>
              <el-menu-item index="6-2">库位管理</el-menu-item>
              <el-menu-item index="6-3">设备管理</el-menu-item>
              <el-menu-item index="6-4">计量单位</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>供应商资料</span>
              </template>
              <el-menu-item index="6-5">供应商管理</el-menu-item>
              <el-menu-item index="6-6">客户管理</el-menu-item>
              <el-menu-item index="6-7">产品类别</el-menu-item>
              <el-menu-item index="6-8">产品管理</el-menu-item>
              <el-menu-item index="6-9">承运商管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <span>系统设置</span>
            </template>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item index="7-1">员工管理</el-menu-item>
              <el-menu-item index="7-2">角色管理</el-menu-item>
              <el-menu-item index="7-3">部门管理</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template slot="title">
                <i class="el-icon-date"></i>
                <span>权限管理</span>
              </template>
              <el-menu-item index="7-4">权限分配</el-menu-item>
              <el-menu-item index="7-5">资源管理</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </div>
    <div class="right">
      
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import Dataoverview from '../components/workbench/Dataoverview'
export default {
  name: "zhiyun",
  components:{
    Dataoverview
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-menu-item {
  min-width: 0px;
}
.el-menu {
  float: left;
  position: fixed;
  top: 0;
  left: 0;
  height: 624px;
  width: 150px;
}
.right {
  width: 100%;
  height: 1345px;
  background-color: #f0f2f5;
}


</style>