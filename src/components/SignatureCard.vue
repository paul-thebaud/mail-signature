<script
  lang="ts"
  setup
>
import { computed, PropType, ref } from 'vue';
import useSignatureState from '../composables/useSignatureState';
import downloadAsFile from '../utils/downloadAsFile';
import { InputFile } from '../utils/fileToInputFile';
import { Signature } from '../utils/signature';
import DefaultLayout from './mail/layouts/DefaultLayout.vue';

const signatureRef = ref<InstanceType<typeof DefaultLayout> | null>(null);

const props = defineProps({
  logoWidth: {
    required: true,
    type: [Number, String],
  },
  signatureMaxWidth: {
    required: true,
    type: [Number, String],
  },
  color: {
    required: true,
    type: String,
  },
  avatar: {
    type: Object as PropType<InputFile>,
    default: undefined,
  },
  firstName: {
    required: true,
    type: String,
  },
  lastName: {
    required: true,
    type: String,
  },
  title: {
    required: true,
    type: String,
  },
  activities: {
    required: true,
    type: String,
  },
  phone: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  address: {
    required: true,
    type: String,
  },
  logo: {
    type: Object as PropType<InputFile>,
    default: undefined,
  },
  logoAlt: {
    required: true,
    type: String,
  },
  website: {
    required: true,
    type: String,
  },
  facebook: {
    required: true,
    type: String,
  },
  linkedin: {
    required: true,
    type: String,
  },
  instagram: {
    required: true,
    type: String,
  },
  twitter: {
    required: true,
    type: String,
  },
});

const signatureState = useSignatureState(computed(() => props as Signature));

const downloadSuccess = ref(false);
const copySuccess = ref(false);
const copyError = ref(false);

const signatureStyle = computed(() => ({
  'max-width': props.signatureMaxWidth > 0
    ? `${Math.ceil(props.signatureMaxWidth as number)}px`
    : undefined,
}));

const resetState = () => {
  downloadSuccess.value = false;
  copySuccess.value = false;
  copyError.value = false;
};

const copyToClipboard = async (content: string, mimeType: string) => {
  resetState();

  try {
    const clipboardContentBlob = new Blob([content], { type: mimeType });
    const clipboardItem = new ClipboardItem({ [mimeType]: clipboardContentBlob });

    await navigator.clipboard.write([clipboardItem]);

    copySuccess.value = true;
  } catch (error) {
    copyError.value = true;
  }
};

const onDownloadJsonConfig = () => {
  resetState();

  const configJsonBlob = new Blob([
    JSON.stringify(props, null, 2),
  ], { type: 'application/json' });

  downloadAsFile(configJsonBlob, 'signature.json');

  downloadSuccess.value = true;
};

const onCopyContentToClipboard = () => {
  copyToClipboard(signatureRef.value?.$el?.outerHTML, 'text/html');
};
</script>

<template>
  <v-slide-y-transition
    mode="out-in"
    leave-absolute
  >
    <div v-if="signatureState.hasData.value">
      <v-card class="overflow-x-auto">
        <v-card-text style="min-width: 400px;">
          <default-layout
            ref="signatureRef"
            :style="signatureStyle"
            v-bind="props"
          />
        </v-card-text>
        <v-card-actions
          class="justify-end"
          style="min-width: 400px;"
        >
          <v-btn
            color="primary"
            variant="tonal"
            @click="onDownloadJsonConfig"
          >
            <v-icon
              icon="mdi-tray-arrow-down"
              start
            />
            Download config
          </v-btn>
          <v-btn
            color="primary"
            variant="flat"
            @click="onCopyContentToClipboard"
          >
            <v-icon
              icon="mdi-content-copy"
              start
            />
            Copy
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-slide-y-transition>
        <v-alert
          v-if="copySuccess"
          text="Copied to clipboard successfully!"
          type="success"
          variant="tonal"
          density="compact"
          class="mt-5"
          border
        />
        <v-alert
          v-else-if="copyError"
          text="Copy to clipboard failed."
          type="error"
          variant="tonal"
          density="compact"
          class="mt-5"
          border
        >
          Copy to clipboard failed. Your browser must be
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API#browser_compatibility"
            target="_blank"
            rel="noopener"
          >
            compatible with the Clipboard API.
            <span class="d-sr-only">
              (open in new tab)
            </span>
          </a>
        </v-alert>
        <v-alert
          v-else-if="downloadSuccess"
          text="Downloaded config successfully!"
          type="success"
          variant="tonal"
          density="compact"
          class="mt-5"
          border
        />
      </v-slide-y-transition>
    </div>
    <v-alert
      v-else
      text="Your signature is empty for now."
      type="info"
      variant="tonal"
      density="compact"
      border
    />
  </v-slide-y-transition>
</template>
