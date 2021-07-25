import { State } from '@/store/modules/error/state';

export default {
	setValidationError(state: State, error: string) {
		state.validations = error;
	},
};
