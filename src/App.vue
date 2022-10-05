<script
  lang="ts"
  setup
>
import { ref } from 'vue';
import { useTheme } from 'vuetify';
import PropsCard from './components/PropsCard.vue';
import SignatureCard from './components/SignatureCard.vue';
import fileToJsonObject from './utils/fileToJsonObject';
import { Signature } from './utils/signature';

const STORAGE_KEY = 'signature.data';

const theme = useTheme();

let defaultData = {
  logoWidth: 148,
  signatureMaxWidth: 600,
  color: theme.current.value.colors.primary,
  avatar: undefined,
  firstName: '',
  lastName: '',
  title: '',
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
const jsonConfigFileInput = ref<HTMLInputElement | null>(null);
const jsonConfigFileError = ref<Error | undefined>(undefined);

const onSignatureDataUpdate = (data: Signature) => {
  signatureData.value = data;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const onImportJsonConfigClick = () => {
  jsonConfigFileInput.value?.click();
};

const onJsonConfigFileChange = async (event: Event) => {
  const files = (event.target as HTMLInputElement).files;
  if (files && files.length === 1) {
    try {
      onSignatureDataUpdate({ ...defaultData, ...(await fileToJsonObject(files[0])) });
    } catch (error) {
      jsonConfigFileError.value = error as Error;
    }
  }
};
</script>

<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="text-uppercase text-h3 text-sm-h2 text-center my-8">
          Mail signature
        </h1>
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
      </v-container>
    </v-main>
  </v-app>
</template>
