<script
  lang="ts"
  setup
>
import { toRef } from 'vue';
import useWebsite from '../../../composables/useWebsite';
import TableCell from './../TableCell.vue';

type Props = {
  color: string,
  website: string,
}

const props = defineProps<Props>();

const { websiteWithHttps, websiteWithoutHttps } = useWebsite(toRef(props, 'website'));
</script>

<template>
  <table-cell>
    <a
      :href="websiteWithHttps"
      :color="props.color"
      :style="`text-decoration: none; color: ${props.color}; font-size: 12px;`"
    >
      <strong>{{ websiteWithoutHttps }}</strong>
    </a>
  </table-cell>
</template>
