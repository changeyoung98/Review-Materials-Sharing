<template>
  <el-row :gutter="20">
    <div class="myBanner">
      <h1>和袁老板抢生意¯\_(ツ)_/¯</h1>
    </div>
  <el-col :span="8"><div class="block-mains">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>基础课程</span>
      <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div v-for="o in list1" class="text item">
        <router-link :to="{ name: 'Cirriculums', params: {id: o} }">
          {{ o }}
      </router-link>
      </div>
    </el-card>
  </div></el-col>
  <el-col :span="8"><div class="block-mains">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>文史两课</span>
      <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div v-for="o in list2" class="text item">
        <router-link :to="{ name: 'Cirriculums', params: {id: o} }">
          {{ o }}
        </router-link>
      </div>
    </el-card>
  </div></el-col>
  <el-col :span="8"><div class="block-mains">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
      <span>其他资料</span>
      <el-button style="float: right; padding: 3px 0" type="text">更多</el-button>
      </div>
      <div v-for="o in list3" class="text item">
        <router-link :to="{ name: 'Cirriculums', params: {id: o} }">
          {{ o }}
        </router-link>
      </div>
    </el-card>
  </div></el-col>
  </el-row>
</template>

<script>
export default {
  name: 'index-main',
  data () {
    return {
      list1: [
        '高等数学',
        '大学物理',
        '线性代数',
        '概率统计'
      ],
      list2: [
        '毛概',
        '马原',
        '近纲',
        '思修'
      ],
      list3: [
        '水平考',
        'TOEFL单词',
        '...',
        '...'
      ]
    }
  }
}
</script>

<style>
a:link, a:visited{
  text-decoration: none;
  color: #409EFF;
}
a:hover{
  text-decoration: none;
  color: #63B8FF;
}
.myBanner{
  height: 300px;
  background : #fafafa;
  width: 100%;
}
.myBanner h1{
  text-align: left;
  margin-left: 32px;
  padding-top: 200px;
  height: 300px;
  font-size:300%;
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
