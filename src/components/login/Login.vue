<template>
	<p>아이디 :</p>
	<input type="text" @input="nameChange" />
	<p>비밀번호 :</p>
	<input type="password" />

	<div ref="hi" @click="test">Hello</div>
	<p>{{ name }}</p>
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

export default defineComponent({
	setup() {
		const router = useRouter();
		const store = useStore();

		console.log('created');

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
		};
	},
});
</script>

<style scoped></style>
