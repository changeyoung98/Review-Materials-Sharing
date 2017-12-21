<template>
  <div class="hello">
    <h2>test</h2>
    <ul>
      <li class="glyphicon glyphicon-plus"><a  href="https://github.com/yssjtu/prac-12/blob/master/%E6%BA%90.cpp" download="test">下载</a></li>
      //将展示用的ppt放到github上，直接引用其路径即可
      <br>
      <li><input type="file" id="test_file" ref="input1" @change="test1"></li>
      <input v-model="newitem" type="text"><li @click="add"> add</li>
      //这是一个假的上传，一个选择本地文件的输入标签
      <br>
      <li v-for="(item,index) in items" >
        <span>{{index+1}}</span><i>{{item}}</i></li>
      <br>
      <li @click="del">del</li>
    </ul>

  </div>
</template>

<script>
  import Store from './windowstore'
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      items: Store.fetch(),
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {},
  methods: {
      test1: function (e) {
        this.result1=e.currentTarget.files[0].path;
        console.log(this.result1);
      },
    add: function () {
          this.items.push(this.newitem);
          Store.save(this.items);
    },
    del: function () {
      this.items=[];
      Store.save(this.items);
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
