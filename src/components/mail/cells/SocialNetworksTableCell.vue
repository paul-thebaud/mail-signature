<script
  lang="ts"
  setup
>
import { computed } from 'vue';
import iFacebook from '../../../icons/iFacebook';
import iInstagram from '../../../icons/iInstagram';
import iLinkedIn from '../../../icons/iLinkedIn';
import iTwitter from '../../../icons/iTwitter';
import TableCell from '../TableCell.vue';
import PaddingTableCell from './PaddingTableCell.vue';
import SocialNetworkTableCell from './SocialNetworkTableCell.vue';

type Props = {
  facebook: string,
  linkedin: string,
  instagram: string,
  twitter: string,
}

const props = defineProps<Props>();

const networks = computed(() => [
  { name: 'Facebook', url: props.facebook, icon: iFacebook },
  { name: 'LinkedIn', url: props.linkedin, icon: iLinkedIn },
  { name: 'Instagram', url: props.instagram, icon: iInstagram },
  { name: 'Twitter', url: props.twitter, icon: iTwitter },
].filter((network) => network.url));
</script>

<template>
  <table-cell>
    <template
      v-for="(network, index) in networks"
      :key="`networks-${index}`"
    >
      <padding-table-cell
        v-if="index !== 0"
        width="6"
      />
      <social-network-table-cell v-bind="network" />
    </template>
  </table-cell>
</template>
