<script
  lang="ts"
  setup
>
import TableCell from '../TableCell.vue';

type Props = {
  name: string,
  url: string,
  icon: string,
}

const props = defineProps<Props>();
</script>

<template>
  <table-cell width="24">
    <a
      :href="props.url"
      color="#000000"
      style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"
    >
      <img
        :src="props.icon"
        :alt="props.name"
        width="24"
        height="24"
        style="max-width: 24px; max-height: 24px; display: block;"
      >
    </a>
  </table-cell>
</template>
