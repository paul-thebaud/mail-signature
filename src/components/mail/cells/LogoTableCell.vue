<script
  lang="ts"
  setup
>
import { toRef } from 'vue';
import useWebsite from '../../../composables/useWebsite';
import { InputFile } from '../../../utils/fileToInputFile';
import TableCell from './../TableCell.vue';
import LogoImage from './LogoImage.vue';

type Props = {
  logo: InputFile,
  logoAlt: string,
  website: string,
}

const props = defineProps<Props>();

const { websiteWithHttps } = useWebsite(toRef(props, 'website'));
</script>

<template>
  <table-cell width="148">
    <a
      v-if="props.website"
      :href="websiteWithHttps"
      color="#000000"
      style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"
    >
      <logo-image
        :logo="props.logo"
        :logo-alt="props.logoAlt"
      />
    </a>
    <logo-image
      v-else
      :logo="props.logo"
      :logo-alt="props.logoAlt"
    />
  </table-cell>
</template>
