<template>
  <div>
  <el-row>
  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
  <el-col :span="2">
    <div class="grid-content bg-purple-light">
    </div>
  </el-col>
  <el-col :span="4">
    <div class="grid-content bg-purple-light">
      <el-autocomplete class="inline-input" v-model="state2" :fetch-suggestions="querySearch" placeholder="Infinite World! xD" :trigger-on-focus="false" @select="handleSelect"></el-autocomplete>
    </div>
  </el-col>
  <el-col :span="6">
    <div class="grid-content bg-purple">
      <el-button>注册</el-button>
      <el-button>登录</el-button>
    </div>
  </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>
