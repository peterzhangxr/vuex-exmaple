import Vue from 'vue'
import Vuex from 'vuex'
import { INCREMENT } from './mutation-types'
import user from './modules/user'
Vue.use(Vuex)

const myPlugin = (store) => {
	store.subscribe((mutation, state) => {
		console.log('store subscribe', mutation, state)
	})
}
export default new Vuex.Store({
	plugins: [myPlugin],
	state: {
		count: 0,
		todos: [{
			id: 1, text: 'text1', done: true
		}, {
			id: 2, text: 'text2', done: false
		}]
	},
	getters: {
		doneTodos: state => {
			return state.todos.filter(todo => todo.done)
		}
	},
	mutations: {
		[INCREMENT] (state) {
			//必须是同步函数
			state.count++
		}
	},
	actions: {
		//context 或者解构
		increment ({ commit }) {
			commit('increment')
		}
	},
	modules: {
		user
	}
})