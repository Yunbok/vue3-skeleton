import Vuex, { createStore, StoreOptions } from 'vuex';

import { login } from './modules/login/login';
import { State as LoginState } from '@/store/modules/login/state';

export type State = {
	user: LoginState;
};

const store = createStore({
	modules: {
		login,
	},
});
export default store;

// axios 연결 .env 파일
