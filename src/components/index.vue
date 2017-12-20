<template>
  <el-container>
    <el-header>
      <nav-bar></nav-bar>
    </el-header>
    <el-container>
      <el-main>
      <index-main></index-main>
      </el-main>
    </el-container>
    <el-footer>
      <footer-content></footer-content>
    </el-footer>
  </el-container>
</template>

<script>
import IndexMain from './index-main'
import FooterContent from './footer'
import NavBar from './navbar'
export default {
  name: 'index-page',
  components: {
    NavBar,
    IndexMain,
    FooterContent
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
   height: 650px;
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
 }
 .row-bg {
   padding: 10px 0;
   background-color: #ffffff;
 }
 .inline-input{
   margin-right: 0px;
 }
</style>
