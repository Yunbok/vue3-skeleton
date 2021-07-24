import { Module } from 'vuex';
import { state, State } from './state';
import mutations from './mutations';
import { actions } from './actions';
import { getters } from './getters';
import { State as RootState } from '@/store';

export const login: Module<State, RootState> = {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,
};
