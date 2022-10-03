<script
  lang="ts"
  setup
>
import { makePhone } from 'v-phone-input';
import { computed } from 'vue';
import mdiPhone from '../../../icons/mdiPhone';
import PrependIconTableCell from './PrependIconTableCell.vue';

type Props = {
  phone: string,
}

const props = defineProps<Props>();

const phoneObject = computed(() => makePhone(props.phone).toJSON());
const phoneE164 = computed(() => phoneObject.value.number.e164 || phoneObject.value.number.input);
const phoneNational = computed(() => phoneObject.value.number.national || phoneObject.value.number.input);
</script>

<template>
  <prepend-icon-table-cell :icon="mdiPhone">
    <a
      :href="`tel:${phoneE164}`"
      color="#000000"
      style="text-decoration: none; color: #000000; font-size: 12px;"
    >
      <span>{{ phoneNational }}</span>
    </a>
  </prepend-icon-table-cell>
</template>
