<script
  lang="ts"
  setup
>
import mdiClock from '../../../icons/mdiClock';
import PrependIconTableCell from './PrependIconTableCell.vue';

type Props = {
  hours: string,
}

const props = defineProps<Props>();
</script>

<template>
  <prepend-icon-table-cell :icon="mdiClock">
    <a
      :href="`mailto:${props.hours}`"
      color="#000000"
      style="text-decoration: none; color: #000000; font-size: 12px;"
    >
      <span>{{ props.hours }}</span>
    </a>
  </prepend-icon-table-cell>
</template>
