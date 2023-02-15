<script
  lang="ts"
  setup
>
import { computed } from 'vue';

type Props = {
  content: string,
};

const props = defineProps<Props>();

const parts = computed(() => props.content.split(/\r\n|\n|\r/));
</script>

<template>
  <template
    v-for="(part, index) in parts"
    :key="index"
  >
    <br v-if="index !== 0">
    {{ part }}
  </template>
</template>
