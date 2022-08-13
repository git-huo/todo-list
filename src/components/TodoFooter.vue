<template>
  <footer class="footer">
    <span class="todo-count">剩余<strong>{{NoFinishTaskNum}}</strong></span>
    <ul class="filters">
      <li>
        <a :class="{selected:isSel==='all'}" href="javascript:;" @click="clickFn('all')">全部</a>
      </li>
      <li>
        <a :class="{selected:isSel==='no'}" href="javascript:;" @click="clickFn('no')">未完成</a>
      </li>
      <li>
        <a :class="{selected:isSel==='finish'}" href="javascript:;" @click="clickFn('finish')">已完成</a>
      </li>
    </ul>
    <button class="clear-completed" @click="$store.commit('REMOVE_FINISH_TASK')">清除已完成</button>
  </footer>
</template>

<script>
import{mapGetters,mapState} from 'vuex';
export default {
computed:{
  ...mapState(['isSel']),
  ...mapGetters(['NoFinishTaskNum'])
},
methods:{
  clickFn(str){
    this.$store.commit('CHANGE_LIST',str)
  },
}
}
</script>
