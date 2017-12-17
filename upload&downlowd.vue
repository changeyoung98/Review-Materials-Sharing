<template>
  <div class="hello">
    <h2>test</h2>
    <ul>
      <li><a href="https://github.com/yssjtu/prac-12/blob/master/%E6%BA%90.cpp" download="test">下载</a></li>
      //将展示用的ppt放到github上，直接引用其路径即可
      <br>
      <li><input type="file"></li>
      //这是一个假的上传，一个选择本地文件的输入标签
      <br>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
