<script
  lang="ts"
  setup
>
import { computed, ref, watch } from 'vue';
import fileToInputFile, { InputFile } from '../../utils/fileToInputFile';

type Emits = {
  (e: 'update:model-value', value?: InputFile): void;
};

type Props = {
  modelValue?: InputFile,
}

const emit = defineEmits<Emits>();

const props = defineProps<Props>();

const fileInput = ref<HTMLInputElement | null>(null);
const modelValue = ref(props.modelValue);

const fileName = computed(() => (modelValue.value?.name || ''));

watch([props], () => {
  modelValue.value = props.modelValue;
});

const onFileClick = () => {
  fileInput.value?.click();
};

const onFileClear = () => {
  modelValue.value = undefined;

  emit('update:model-value', undefined);
};

const onFileChange = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files && files.length === 1) {
    modelValue.value = await fileToInputFile(files[0]);

    emit('update:model-value', modelValue.value);
  }
};
</script>

<template>
  <div>
    <v-text-field
      :on-click:clear="onFileClear"
      readonly
      clearable
      v-bind="{ ...$attrs, modelValue: fileName }"
      @click="onFileClick"
      @keydown.enter="onFileClick"
      @keydown.space="onFileClick"
    />
    <input
      ref="fileInput"
      type="file"
      accept="image/*"
      class="d-none"
      @change="onFileChange"
    >
  </div>
</template>
