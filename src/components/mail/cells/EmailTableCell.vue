<script
  lang="ts"
  setup
>
import mdiEmail from '../../../icons/mdiEmail';
import PrependIconTableCell from './PrependIconTableCell.vue';

type Props = {
  email: string,
}

const props = defineProps<Props>();
</script>

<template>
  <prepend-icon-table-cell :icon="mdiEmail">
    <a
      :href="`mailto:${props.email}`"
      color="#000000"
      style="text-decoration: none; color: #000000; font-size: 12px;"
    >
      <span>{{ props.email }}</span>
    </a>
  </prepend-icon-table-cell>
</template>
