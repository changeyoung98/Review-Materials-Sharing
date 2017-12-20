<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-container>
      <aside-main></aside-main>
    </el-container>
    <el-footer>
      <footer-content></footer-content>
    </el-footer>
  </el-container>
</template>

<script>
import NavBar from './navbar'
import AsideMain from './asideMain'
import FooterContent from './footer'

export default {
  name: 'MainPageFrame',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  components: {
    NavBar,
    AsideMain,
    FooterContent
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
.footer-block {
  background: #000000;

}

.el-header {
   background-color: #ffffff;
   color: #333;
   text-align: center;
   line-height: 60px;
 }

 .el-footer {
    background-color: #696969;
  }


 .el-aside {
   background-color: #ffffff;
   color: #333;
   height: 800px;
 }

 .el-main {
   background-color: #FAFAFA;
   color: #333;
   height: 800px;
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
   background: #ffffff;
 }
 .bg-purple {
   background: #ffffff;
 }
 .bg-purple-light {
   background: #ffffff;
   margin-right: 0px;
 }
 .grid-content {
   border-radius: 4px;
   min-height: 60px;
 }
 .row-bg {
   padding: 10px 0;
   background-color: #ffffff;
 }
 .inline-input{
   margin-right: 0px;
 }
</style>
