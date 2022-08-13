<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" @click="$store.commit('IS_ALL',!isAll)" v-model="isAll">
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      @keyup.enter="addTask(content)"
      v-model="content"
      autofocus
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      content:'',
      isAll:false
    }
  },
  computed:{
  },
methods:{
  // 增加
  addTask(content){
    this.$store.dispatch('add_task',{task:content,done:false})
    // 清空
    this.content=''
  },
}
}
</script>
