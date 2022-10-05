import { ref, Ref, watch } from 'vue';
import { InputFile } from '../utils/fileToInputFile';

export default function useImageRatio(image: Ref<InputFile>) {
  const ratio = ref<number | null>(null);

  watch([image], () => {
    const imageEl = new Image();

    imageEl.onload = () => {
      ratio.value = imageEl.width / imageEl.height;
    };

    imageEl.src = image.value.base64;
  }, { immediate: true });

  return {
    ratio,
  };
}
