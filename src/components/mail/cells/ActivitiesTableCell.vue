<script
  lang="ts"
  setup
>
import { computed } from 'vue';
import mdiClock from '../../../icons/mdiClock';
import PrependIconTableCell from './PrependIconTableCell.vue';

type Props = {
  activities: string,
}

const props = defineProps<Props>();

const activitiesParts = computed(() => props.activities.split(/\r\n|\n|\r/));
</script>

<template>
  <prepend-icon-table-cell :icon="mdiClock">
    <template
      v-for="(activitiesPart, index) in activitiesParts"
      :key="`parts-${index}`"
    >
      <br v-if="index !== 0">
      <span
        style="margin: 0px; color: rgb(0, 0, 0); font-size: 12px;"
        v-text="activitiesPart"
      />
    </template>
  </prepend-icon-table-cell>
</template>
