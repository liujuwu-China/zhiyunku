<template>
    <div  id="body">
        <div class="cen">
            <div class="cen2">
                <div class="img"><img src="../assets/logo1.png" alt="" height="20%" width="40%"></div>
                <div class="font">
                    <p>和智云仓储管理系统</p>
                <p>HeZi Cloud Warehouse Management System</p>
                </div>
            </div>
            <div class="cen3">
                <p><el-input placeholder="请输入用户名称" v-model="admin" clearable  prefix-icon="el-icon-user-solid" ></el-input></p>
                <p><el-input placeholder="请输入登录密码" v-model="password" show-password prefix-icon="el-icon-lock"></el-input></p>
                <p><el-button type="primary" icon="el-icon-arrow-right" @click.native="kong()" round></el-button></p>
            </div>
            <div class="cen4 " v-bind:class="{dis:noe}">
                <el-alert title="用户名不能为空" type="warning" center show-icon> </el-alert>
            </div>
            <div class="cen4" v-bind:class="{dis2:noe2}">
                <el-alert title="密码不能为空" type="warning" center show-icon> </el-alert>
            </div>
            <div class="cen4" v-bind:class="{dis3:noe3}">
                <el-alert title="用户名或者密码不正确" type="warning" center show-icon> </el-alert>
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'Logintem',
    data() {
      return {
        admin: '',
        password:'',
        noe:true,
        noe2:true,
        noe3:true
      }
    },
    methods:{
        kong:function(){
            if(this.admin==""||this.admin==" "){
                this.noe=false
                this.noe2=true
                this.noe2=true
            }
            if(this.admin==""||this.admin==" "){
                this.noe=false
                this.noe2=true
                this.noe2=true
            }else if(this.password==""||this.password==" "){
                this.noe1=true
                this.noe2=false
                this.noe2=true
            }else if(this.password!="admin"&&this.password!="sa1234"){
                this.noe1=true
                this.noe2=true
                this.noe3=false
            }else if(this.admin==="admin"&&this.password==="sa1234"){
                this.$router.push({path: '/zhiyun/zhu'});
            }
        }
    }
  }
</script>
<style scoped>
    #body{
        background-image: url("../assets/logoback.jpg");
        background-repeat: no-repeat;
        background-size: 100% ;
        width: 100%;
        height: 100%;
        position: fixed;
    }
    .cen{
        margin: 12% 0 0 0;
        background-color: black;
        opacity: 0.7;
        width: 100%;
        height: 50%;
    }
    .cen2{
        padding: 1% 0 0 0;
    }
    .cen3 p{
        text-align: center;
        display: inline-block;
    }
    .cen3 p:nth-of-type(1){
        margin: 3% 0 0 25%;
        width: 25%;

    }
    .cen3 p:nth-of-type(2){
        margin: 3% 0 0 2%;
        width: 25%; 
    }
    .cen3 p:nth-of-type(3){
        margin: 3% 0 0 2%;
    }
    .img{
        height: 20%;
        float: left;
        margin: 1% 0 0 15%;
        padding:0;
        text-align: right;
    }
    .font{
        float: right;
        color: #ffffff;
        font-size: 200%;
        margin:1% 19% 0 0;
    }
    .cen4{
        width: 20%;
        margin: 3% 0 0 25%; 
    }
    .dis{
        display: none;
    }
    .dis2{
        display: none;
    }
    .dis3{
        display: none;
    }
</style>