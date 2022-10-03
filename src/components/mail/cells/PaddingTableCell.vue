<script
  lang="ts"
  setup
>
import TableCell from './../TableCell.vue';

type Props = {
  width?: string,
  height?: string,
}

const props = defineProps<Props>();
</script>

<template>
  <table-cell
    :width="props.width"
    :height="props.height"
  >
    <div />
  </table-cell>
</template>
