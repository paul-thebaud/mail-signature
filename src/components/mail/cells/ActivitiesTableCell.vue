<script
  lang="ts"
  setup
>
import mdiClock from '../../../icons/mdiClock';
import MultilineContent from './MultilineContent.vue';
import PrependIconTableCell from './PrependIconTableCell.vue';

type Props = {
  activities: string,
}

const props = defineProps<Props>();
</script>

<template>
  <prepend-icon-table-cell :icon="mdiClock">
    <span style="margin: 0px; color: rgb(0, 0, 0); font-size: 12px;">
      <multiline-content :content="activities" />
    </span>
  </prepend-icon-table-cell>
</template>
