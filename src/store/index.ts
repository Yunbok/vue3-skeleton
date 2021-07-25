import Vuex, { createStore, StoreOptions } from 'vuex';
import { error } from './modules/error/error';
import { login } from './modules/login/login';
import { State as LoginState } from '@/store/modules/login/state';
import { State as ErrorState } from '@/store/modules/error/state';

export type State = {
	user: LoginState;
	error: ErrorState;
};

const store = createStore({
	modules: {
		login,
		error,
	},
});
export default store;

// axios 연결 .env 파일
