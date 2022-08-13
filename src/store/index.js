import Vuex from "vuex";
import Vue from "vue";
// 引入，解决vuex数据不能持久化问题
import createPersistedState from 'vuex-persistedstate';
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 任务列表
        allList: [], 
        // 
        isSel:'all'
    },
    mutations: {
        // 增加任务
        ADD_TASK (state, taskObj) {
            const flag = state.allList.some(item => item.task === taskObj.task)
            if (!flag) {
            state.allList.unshift(taskObj)
            } else {
                alert('不能添加相同任务~')
            }
        },
        // 删除
        DELETE_TASK (state, task) {
            state.allList =  state.allList.filter(item=>item.task!==task)
        },
        // 改变状态
        CHANGE_DONE (state,task) {
            state.allList.forEach(item => {
                if (item.task === task) {
                    item.done = !!item.done
                }
            })
        },
        // 判断
        CHANGE_LIST (state, str) {
             if (str === 'all') {
                state.isSel ='all'
            }else if(str === 'no'){
                state.isSel ='no'
            }else{
                state.isSel ='finish'
            } 
        },
        // 清楚已完成
        REMOVE_FINISH_TASK (state) {
            state.allList = state.allList.filter(item=>!item.done)
        },
        // 全选
        IS_ALL (state, isAll) {
            state.allList.forEach(item => {
                item.done = isAll
            })
        }
     },
    actions: { 
        // 增加任务
        add_task (context,taskObj) {
            setTimeout(() => {
                context.commit('ADD_TASK',taskObj)
            }, 100);
        },
        // 删除任务
        delete_task (context, task) {
            setTimeout(() => {
            context.commit('DELETE_TASK',task) 
            }, 100);
        },
        // 改变状态
        change_done (context, task) {
            setTimeout(() => {
                context.commit('CHANGE_DONE',task)
            }, 100);
        },
       
    },
    getters: { 
        // 未完成任务数量
        NoFinishTaskNum: (state) => {
            return state.allList.filter(item=>!item.done).length
        },
        // 未完成任务列表
        NoFinishTask:(state) => {
            return state.allList.filter(item=>!item.done)
        },
        // 已完成
        FinishTask:(state) => {
            return state.allList.filter(item=>item.done)
        },
    },
    plugins: [ createPersistedState({}) ]
}) 