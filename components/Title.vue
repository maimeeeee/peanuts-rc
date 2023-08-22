<script setup lang="ts">
import { ref, PropType } from "vue";

const props = defineProps({
  caption: {
    type: String as PropType<string>,
    required: true,
  },
});

const caption = ref(props.caption);
</script>

<template>
  <div class="main">
    <span class="title"><slot /></span>
    <p>{{ caption }}</p>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.title {
  font-weight: 700;
  font-size: xxx-large;
  text-align: left;
}
</style>
