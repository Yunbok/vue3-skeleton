import { State } from '@/store/modules/login/state';

export default {
	setData(state: State, data: string) {
		state.data = data;
	},
};
