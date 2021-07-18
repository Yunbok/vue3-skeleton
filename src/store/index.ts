import { createStore } from 'vuex';

export default createStore({
	state: {
		name: '',
	},
	getters: {
		nameLength: state => state.name.length,
	},
	mutations: {
		TEST_DATA: (state, payload: string) => {
			state.name = payload;
		},
	},
	actions: {
		test: async ({ commit }) => {
			await alert('g');
			commit('TEST_DATA', '안녕하세요');
		},
	},
	modules: {},
});
