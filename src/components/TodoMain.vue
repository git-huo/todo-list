<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li :class="{completed:item.done}" v-for="(item,index) in newArr" :key="index" >
      <div class="view" >
        <input class="toggle" type="checkbox" v-model="item.done" @click="changeDone(item.task)"/>
        <label>{{item.task}}</label>
        <button class="destroy" @click="del(item.task)"></button>
      </div>
    </li>
  </ul>
  
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  data() {
  return {
    
  }
  },
  computed: {
  ...mapState(['allList','isSel']),
  ...mapGetters(['NoFinishTask','FinishTask']),
  newArr(){
    if(this.isSel==='all'){
      return this.allList
    }else if(this.isSel==='no'){
      return this.NoFinishTask
    }
    return this.FinishTask
  }
  },
  methods:{
     // 删除
  del(task){
    this.$store.dispatch('delete_task',task)
  },
  // 改变状态
  changeDone(task){
    this.$store.dispatch('change_done',task)
  }
  }
}
</script>
