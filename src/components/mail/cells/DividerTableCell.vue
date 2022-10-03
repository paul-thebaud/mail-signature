<script
  lang="ts"
  setup
>
import TableCell from './../TableCell.vue';

type Props = {
  color: string,
}

const props = defineProps<Props>();
</script>

<template>
  <table-cell :style="`border:none; border-bottom: 1px solid ${props.color};`">
    <div />
  </table-cell>
</template>
