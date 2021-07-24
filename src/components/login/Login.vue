<template>
	<p>아이디 :</p>
	<input type="text" @input="nameChange" />
	<p>비밀번호 :</p>
	<input type="password" />
	<br /><br />
	<button @click="loginCheck">로그인</button>
	<div ref="hi" @click="test">{{ $store.getters['login/data'] }}</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	Events,
	onMounted,
	onUnmounted,
	reactive,
	toRefs,
} from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios, { AxiosPromise } from 'axios';

const router = useRouter();
const store = useStore();

const loginCheck = () => {
	axios.get('https://reqres.in/api/users?page=2').then(res => console.log(res));
};

export default defineComponent({
	setup() {
		console.log('created');

		//store.dispatch('setRootData', 'test');

		//store.dispatch('moduleB/setRootData', 'test');

		//store.dispatch('moduleA/setRootData', 'test');

		const state = reactive({
			name: '',
			password: '',
		});
		const nameChange = (e: InputEvent) => {
			const target = e.target as HTMLInputElement;
			state.name = target.value;
		};

		const test = async () => {
			await store.dispatch('test'); //action
			//store.commit('TEST_DATA');        //mutation
			//           computed(() => store.getters.nameLength); //getters
			state.name = computed(() => store.state.name).value; //state
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
		};
	},
});
</script>

<style scoped></style>
