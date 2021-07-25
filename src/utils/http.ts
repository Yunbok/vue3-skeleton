import axios, { AxiosResponse } from 'axios';
import store from '@/store';

const instance = axios.create({
	baseURL: process.env.VUE_APP_API_URL,
	timeout: 2500,
});

instance.interceptors.response.use(
	//상태코드 200일때 넘기는 부분
	(response: AxiosResponse<any>) => {
		return response;
	},
	//상태코드가 200이 아닐때
	errors => {
		if (errors.response.status == 400) {
			store.commit('error/setValidationError', errors.response.data.error);
		} else {
			return Promise.reject(errors);
		}
	},
);

export default instance;
