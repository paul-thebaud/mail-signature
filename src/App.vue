<script
  lang="ts"
  setup
>
import { computed, ref } from 'vue';
import { useDisplay, useTheme } from 'vuetify';
import PropsCard from './components/PropsCard.vue';
import SignatureCard from './components/SignatureCard.vue';
import fileToJsonObject from './utils/fileToJsonObject';
import { Signature } from './utils/signature';

const STORAGE_KEY = 'signature.data';

const { xs } = useDisplay();
const theme = useTheme();

let defaultData = {
  logoWidth: 148,
  signatureMaxWidth: 600,
  color: theme.current.value.colors.primary,
  avatar: undefined,
  firstName: '',
  lastName: '',
  title: '',
  activities: '',
  phone: '',
  email: '',
  address: '',
  logo: undefined,
  logoAlt: '',
  website: '',
  facebook: '',
  linkedin: '',
  instagram: '',
  twitter: '',
} as Signature;

let initialData = { ...defaultData };
const storageData = localStorage.getItem(STORAGE_KEY);
if (storageData) {
  initialData = { ...initialData, ...JSON.parse(storageData) };
}

const signatureData = ref(initialData);
const jsonConfigFileDragging = ref(false);
const jsonConfigFileInput = ref<HTMLInputElement | null>(null);
const jsonConfigFileSuccess = ref(false);
const jsonConfigFileError = ref<Error | undefined>(undefined);

const size = computed(() => (xs.value ? 'small' : 'large'));

const onSignatureDataUpdate = (data: Signature) => {
  signatureData.value = data;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const onJsonConfigFilesInput = async (files: FileList | null) => {
  jsonConfigFileSuccess.value = false;

  if (files && files.length === 1) {
    try {
      onSignatureDataUpdate({ ...defaultData, ...(await fileToJsonObject(files[0])) });

      jsonConfigFileSuccess.value = true;
    } catch (error) {
      jsonConfigFileError.value = error as Error;
    }
  }
};

const onJsonConfigDragenter = () => {
  jsonConfigFileDragging.value = true;
};

const onJsonConfigDragover = () => {
  jsonConfigFileDragging.value = true;
};

const onJsonConfigDragleave = () => {
  jsonConfigFileDragging.value = false;
};

const onJsonConfigDrop = (event: DragEvent) => {
  event.preventDefault();
  jsonConfigFileDragging.value = false;

  const { files } = event.dataTransfer || { files: null };

  onJsonConfigFilesInput(files);
};

const onImportJsonConfigClick = () => {
  jsonConfigFileInput.value?.click();
};

const onJsonConfigFileChange = (event: Event) => {
  onJsonConfigFilesInput((event.target as HTMLInputElement).files);
};
</script>

<template>
  <v-app
    @dragenter.prevent="onJsonConfigDragenter"
    @dragleave.prevent="onJsonConfigDragleave"
    @dragover.prevent="onJsonConfigDragover"
    @drop.prevent="onJsonConfigDrop"
  >
    <v-fade-transition>
      <div
        v-show="jsonConfigFileDragging"
        class="drag-overlay"
      >
        <v-icon
          icon="mdi-tray-arrow-up"
          color="primary"
          size="128"
        />
      </div>
    </v-fade-transition>
    <v-main>
      <v-container class="my-4 my-md-12">
        <header class="mb-4 mb-md-8">
          <h1 class="text-uppercase text-h4 text-sm-h2 text-center mb-4">
            <span class="text-uppercase">
              Mail signature
            </span>
          </h1>
          <p class="text-body-1 text-sm-h5 text-center mb-4">
            Open source mail signature generator with embedded base64 images
            and compatible with all mailboxes.
          </p>
          <div class="d-flex align-center justify-center flex-wrap">
            <v-btn
              :size="size"
              href="url"
              target="_blank"
              rel="noopener"
              variant="text"
            >
              <v-icon
                icon="mdi-github"
                size="24"
                start
              />
              GitHub
              <span class="d-sr-only">
                (open in new tab)
              </span>
            </v-btn>
          </div>
        </header>
        <v-row>
          <v-col
            cols="12"
            md="6"
          >
            <div class="mb-5">
              <v-btn
                color="primary"
                variant="tonal"
                block
                @click="onImportJsonConfigClick"
              >
                <v-icon
                  icon="mdi-tray-arrow-up"
                  start
                />
                Import config
              </v-btn>
              <input
                ref="jsonConfigFileInput"
                type="file"
                accept="application/json"
                class="d-none"
                @change="onJsonConfigFileChange"
              >
              <v-slide-y-transition>
                <v-alert
                  v-if="jsonConfigFileSuccess"
                  text="Successfully imported config file."
                  type="success"
                  variant="tonal"
                  density="compact"
                  class="mt-5"
                  border
                />
              </v-slide-y-transition>
              <v-slide-y-transition>
                <v-alert
                  v-if="jsonConfigFileError"
                  :text="`Error with file importation: ${jsonConfigFileError.message}`"
                  type="error"
                  variant="tonal"
                  density="compact"
                  class="mt-5"
                  border
                />
              </v-slide-y-transition>
            </div>
            <props-card
              v-bind="signatureData"
              @update="onSignatureDataUpdate"
            />
          </v-col>
          <v-col
            cols="12"
            md="6"
            style="position: relative;"
          >
            <signature-card
              v-bind="signatureData"
              style="position: sticky; top: 24px"
            />
          </v-col>
        </v-row>
        <footer class="mt-4 mt-md-8">
          <p class="text-body-1 text-center mb-0">
            Made by
            <a
              href="https://github.com/paul-thebaud"
              rel="noopener"
              target="_blank"
            >
              Paul Thébaud
              <span class="d-sr-only">
                (open in new tab)
              </span>
            </a>
          </p>
        </footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped>
  .drag-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    border-width: 4px;
    border-style: dashed;
    border-color: rgb(var(--v-theme-primary));
    background: rgb(var(--v-theme-on-surface), 0.12);
  }
</style>
