import { State } from '@/store/modules/error/state';

export const getters = {
	Validations: (state: State) => state.validations,
};
