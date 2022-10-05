<script
  lang="ts"
  setup
>
import { computed, toRef } from 'vue';
import useImageRatio from '../../../composables/useImageRatio';
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

const { ratio } = useImageRatio(toRef(props, 'logo'));

const width = 148;
const height = computed(() => (
  ratio.value ? Math.ceil(width / ratio.value) : undefined
));
</script>

<template>
  <table-cell :width="width">
    <a
      v-if="props.website"
      :href="websiteWithHttps"
      color="#000000"
      style="text-decoration: none; color: rgb(0, 0, 0); font-size: 12px;"
    >
      <logo-image
        v-if="height"
        :logo="props.logo"
        :logo-alt="props.logoAlt"
        :width="width"
        :height="height"
      />
    </a>
    <logo-image
      v-else-if="height"
      :logo="props.logo"
      :logo-alt="props.logoAlt"
      :width="width"
      :height="height"
    />
  </table-cell>
</template>
