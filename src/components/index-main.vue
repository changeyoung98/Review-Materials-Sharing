<template>
  <el-row :gutter="20">
    <div class="myBanner">
      <h1>和袁老板抢生意</h1>
    </div>
  <el-col :span="8"><div class="block-mains">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div></el-col>
  <el-col :span="8"><div class="block-mains">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div></el-col>
  <el-col :span="8"><div class="block-mains">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
      {{'列表内容 ' + o }}
      </div>
    </el-card>
  </div></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index-main'
}
</script>

<style>
.myBanner{
  height: 300px;
  background : #fafafa;
  width: 100%;
}
.block-mains{
  height: 250px;
  width: 100%;
  background: #fafafa;
}
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 90%;
    margin-left: 5%;
  }
</style>
