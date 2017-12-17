<template>
  <el-container>
    <el-header>
      <el-row>
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="5">
        <div class="grid-content bg-purple-light">
            <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="Infinite World! xD" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
        </div>
      </el-col>
      <el-col :span="1">
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
    <el-aside width="200px">
      <el-menu :default-openeds="['1', '3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-menu"></i>导航二</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-setting"></i>导航三</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    </el-aside>
    <el-main></el-main>
    </el-container>
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
      querySearch (queryString, cb) {
      var Mines = this.Mines
      var results = queryString ? Mines.filter(this.createFilter(queryString)) : Mines
      // 调用 callback 返回建议列表的数据
      cb(results)
    },
    createFilter (queryString) {
      return (Mines) => {
        return (Mines.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
      }
    },
    loadAll () {
      return [{
        'value': 'Minecraft',
        'address': 'Minecraft Official Website'
      },
      {
        'value': '我的世界',
        'address': '我的世界国服'
      }
      ]
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
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
   height: 700px;

 }

 .el-main {
   background-color: #FAFAFA;
   color: #333;
   height: 700px;
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
   margin-right: 0px;
 }
 .grid-content {
   border-radius: 4px;
   min-height: 60px;
 }
 .row-bg {
   padding: 10px 0;
   background-color: #f9fafc;
 }
 .inline-input{
   margin-right: 0px;
 }
</style>
