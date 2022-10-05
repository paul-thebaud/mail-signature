<script
  lang="ts"
  setup
>
import { InputFile } from '../../../utils/fileToInputFile';

type Props = {
  logo: InputFile,
  logoAlt?: string,
  width: number,
  height: number,
}

const props = defineProps<Props>();
</script>

<template>
  <img
    :src="props.logo.base64"
    :alt="props.logoAlt"
    :width="props.width"
    :height="props.height"
    :style="{
      'max-width': `${width}px`,
      'max-height': `${height}px`,
      display: 'block',
    }"
  >
</template>
