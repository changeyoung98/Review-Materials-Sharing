<template>
  <el-container>
  <el-aside width="200px">
    <el-menu :default-openeds="['1', '3']">
    <el-submenu index="1" v-show="now === ''">
      <template slot="title"><i class="el-icon-message"></i>历年试卷</template>
      <el-menu-item-group>
        <template slot="title">期中</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="期末">
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title"><i class="el-icon-menu"></i>复习提纲</template>
      <el-menu-item-group>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项4-1</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title"><i class="el-icon-setting"></i>作业答案</template>
      <el-menu-item-group>
        <template slot="title">分组一</template>
        <el-menu-item index="3-1">选项1</el-menu-item>
        <el-menu-item index="3-2">选项2</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="3-3">选项3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
  </el-aside>
  <el-main><dis-play></dis-play></el-main>
</el-container>
</template>

<script>
import Display from './display'
export default {
  name: 'aside-main',
  components: {
    Display
  },
  data () {
    return {
      now: this.$route.params.id
    }
  }
}
</script>
