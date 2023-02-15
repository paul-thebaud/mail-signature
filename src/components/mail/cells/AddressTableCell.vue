<script
  lang="ts"
  setup
>
import mdiMapMarker from '../../../icons/mdiMapMarker';
import MultilineContent from './MultilineContent.vue';
import PrependIconTableCell from './PrependIconTableCell.vue';

type Props = {
  address: string,
}

const props = defineProps<Props>();
</script>

<template>
  <prepend-icon-table-cell :icon="mdiMapMarker">
    <span style="margin: 0px; color: rgb(0, 0, 0); font-size: 12px;">
      <multiline-content :content="address" />
    </span>
  </prepend-icon-table-cell>
</template>
