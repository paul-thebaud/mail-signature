<script
  lang="ts"
  setup
>
import { computed, watch } from 'vue';
import mdiMapMarker from '../../../icons/mdiMapMarker';
import PrependIconTableCell from './PrependIconTableCell.vue';

type Props = {
  address: string,
}

const props = defineProps<Props>();

const addressParts = computed(() => props.address.split(/\r\n|\n|\r/));
</script>

<template>
  <prepend-icon-table-cell :icon="mdiMapMarker">
    <template
      v-for="(addressPart, index) in addressParts"
      :key="`parts-${index}`"
    >
      <br v-if="index !== 0">
      <span
        style="margin: 0px; color: rgb(0, 0, 0); font-size: 12px;"
        v-text="addressPart"
      />
    </template>
  </prepend-icon-table-cell>
</template>
