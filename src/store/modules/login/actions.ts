import { ActionContext } from 'vuex';
import { State } from '@/store/modules/login/state';
import { State as RootState } from '@/store';

export const actions = {
	// vuex 안에있는 ActionContext 를 타입으로 지정하고 <S,R>
	// S : 내가 사용할 State
	// R : 전체가 사용하는 RootState
	setRootData: (context: ActionContext<State, RootState>, data: string) => {
		context.commit('setData', data);
	},
};
