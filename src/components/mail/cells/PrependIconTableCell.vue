<script
  lang="ts"
  setup
>
import TableBlock from '../TableBlock.vue';
import TableRow from '../TableRow.vue';
import TableCell from './../TableCell.vue';

type Props = {
  icon: string,
}

const props = defineProps<Props>();
</script>

<template>
  <table-cell>
    <table-block>
      <table-row>
        <table-cell width="24">
          <img
            :src="props.icon"
            role="presentation"
            alt=""
            width="18"
            height="18"
            style="max-width: 18px; max-height: 18px; display: block;"
          >
        </table-cell>
        <table-cell>
          <slot />
        </table-cell>
      </table-row>
    </table-block>
  </table-cell>
</template>
