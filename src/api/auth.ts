import http from '../utils/http';

export async function login(email: string, password: string) {
	return http.post('/api/login', {
		email,
		password,
	});
}
