<template>
	<p>아이디 :</p>
	<input type="text" @input="nameChange" />
	<p>비밀번호 :</p>
	<input type="password" v-model="password" />
	<br /><br />
	<button @click="loginCheck">로그인</button>
	<br />
	<br />
	<br />
	<div>{{ $store.state.error.validations }}</div>
	<br />
	<br />
	<br />
	<div ref="hi" @click="test">{{ log }}</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	onMounted,
	onUnmounted,
	reactive,
	toRefs,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import * as authApi from '@/api/auth';

const router = useRouter();
const store = useStore();
const state = reactive({
	name: '',
	password: '',
	log: {
		token: '',
	},
	validationsError: {},
});

const nameChange = (e: InputEvent) => {
	const target = e.target as HTMLInputElement;
	state.name = target.value;
};
const passwordChange = (e: InputEvent) => {
	const target = e.target as HTMLInputElement;
	state.password = target.value;
};
const loginCheck = () => {
	authApi
		.login(state.name, state.password)
		.then(res => {
			state.log = res.data;
			console.log(state.log);
		})
		.catch(error => {
			state.log = error;
		});
};

export default defineComponent({
	setup() {
		console.log('created');

		const test = async () => {
			//await store.dispatch('test'); //action
			//store.commit('TEST_DATA');        //mutation
			//           computed(() => store.getters.nameLength); //getters
			//state.name = computed(() => store.state.name).value; //state
			//await router.push('/');
		};

		onMounted(() => {
			console.log('mounted');
		});

		onUnmounted(() => {
			console.log('destroyed');
		});

		return {
			...toRefs(state),
			test,
			nameChange,
			loginCheck,
			passwordChange,
		};
	},
});
</script>

<style scoped></style>
