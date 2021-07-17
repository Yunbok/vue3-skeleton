<template>
  <div ref="hi">Hello</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";

const store = useStore();

export default defineComponent({
  name: "Login",
  methods: {
    test() {
      console.log(this.$refs.hi);
    },
  },
  mounted() {
    this.test();
  },
});
</script>

<style scoped></style>
