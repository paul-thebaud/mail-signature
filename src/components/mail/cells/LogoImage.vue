<script
  lang="ts"
  setup
>
import { InputFile } from '../../../utils/fileToInputFile';

type Props = {
  logo: InputFile,
  logoAlt?: string,
}

const props = defineProps<Props>();
</script>

<template>
  <img
    :src="props.logo.base64"
    :alt="props.logoAlt"
    width="148"
    style="max-width: 148px; display: block;"
  >
</template>
