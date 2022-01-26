export default {
	state: {
		name: 'peter'
	},
	getters: {
		getName (state, getters, rootState) {
			console.loog(state, getters, rootState)
		}
	},
	mutations: {

	},
	actions: {
		updateName ({ state, commit, rootState }) {
			console.log(state, commit, rootState)
		}
	}
}