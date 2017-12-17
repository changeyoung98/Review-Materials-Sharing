<template>
  <el-container>
    <el-header>
      <el-row>
      <el-col :span="15"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="3">
        <div class="grid-content bg-purple-light">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-submenu index="2">
          <template slot="title">我的工作台</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <el-button>注册</el-button>
          <el-button>登录</el-button>
        </div>
      </el-col>
      </el-row>
    </el-header>
    <el-container>
    <el-aside width="200px">Aside</el-aside>
    <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'MainPageFrame',
  data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }

}
</script>

<style>
.el-header, .el-footer {
   background-color: #FFFFFF;
   color: #333;
   text-align: center;
   line-height: 60px;
 }

 .el-aside {
   background-color: #F8F8FF;
   color: #333;
   text-align: center;
   line-height: 600px;
   hight: 600px;
 }

 .el-main {
   background-color: #FAFAFA;
   color: #333;
   text-align: center;
   line-height: 160px;
   height: 600px;
 }

 body > .el-container {
   margin-bottom: 40px;
 }

 .el-container:nth-child(5) .el-aside,
 .el-container:nth-child(6) .el-aside {
   line-height: 260px;
 }

 .el-container:nth-child(7) .el-aside {
   line-height: 320px;
 }

 .el-row {
   margin-bottom: 0px;
   &:last-child {
     margin-bottom: 0;
   }
 }
 .el-col {
   border-radius: 4px;
 }
 .bg-purple-dark {
   background: #FFFFFF;
 }
 .bg-purple {
   background: #FFFFFF;
 }
 .bg-purple-light {
   background: #FFFFFF;
 }
 .grid-content {
   border-radius: 4px;
   min-height: 60px;
 }
 .row-bg {
   padding: 10px 0;
   background-color: #f9fafc;
 }
</style>
