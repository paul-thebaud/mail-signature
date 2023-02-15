<script
  lang="ts"
  setup
>
import { VPhoneInput } from 'v-phone-input';
import { PropType, reactive, watch } from 'vue';
import { InputFile } from '../utils/fileToInputFile';
import { Signature } from '../utils/signature';
import FileInput from './form/FileInput.vue';

type Emits = {
  (e: 'update', value: Signature): void;
};

const emit = defineEmits<Emits>();

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

const signatureData = reactive({ ...props }) as Signature;

watch([props], () => {
  (Object.keys(props) as (keyof Signature)[]).forEach((key) => {
    signatureData[key] = props[key] as any;
  });
});

watch([signatureData], () => {
  emit('update', signatureData);
});
</script>

<template>
  <v-card>
    <v-card-text>
      <v-form>
        <fieldset class="border-0">
          <legend class="text-overline">
            Customization
          </legend>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="signatureData.color"
                label="Color"
                placeholder="#0000FF"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model.number="signatureData.logoWidth"
                label="Logo width"
                placeholder="148"
                suffix="px"
                type="number"
                min="0"
                step="1"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model.number="signatureData.signatureMaxWidth"
                label="Signature max width"
                placeholder="600"
                suffix="px"
                type="number"
                min="0"
                step="1"
              />
            </v-col>
          </v-row>
        </fieldset>
        <fieldset class="border-0">
          <legend class="text-overline">
            Your information
          </legend>
          <v-row dense>
            <v-col cols="12">
              <file-input
                v-model="signatureData.avatar"
                label="Avatar"
                prepend-inner-icon="mdi-camera-outline"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="signatureData.firstName"
                label="First name"
                placeholder="John"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="signatureData.lastName"
                label="Last name"
                placeholder="Doe"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="signatureData.title"
                label="Job title"
                prepend-inner-icon="mdi-briefcase-outline"
                placeholder="Sales director"
                rows="2"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="signatureData.activities"
                label="Activities"
                prepend-inner-icon="mdi-clock-outline"
                placeholder="Development: monday & tuesday&#10;Project follow-up: wednesday"
                rows="2"
              />
            </v-col>
            <v-col cols="12">
              <v-phone-input
                v-model="signatureData.phone"
                label="Phone number"
                prepend-inner-icon="mdi-phone-outline"
                placeholder="+33123456789"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="signatureData.email"
                label="Email address"
                prepend-inner-icon="mdi-email-outline"
                placeholder="john.doe@example.com"
              />
            </v-col>
            <v-col cols="12">
              <v-textarea
                v-model="signatureData.address"
                label="Address"
                prepend-inner-icon="mdi-map-marker-outline"
                :placeholder="'1234 Marguerite Street\n92000 PARIS, FRANCE'"
              />
            </v-col>
          </v-row>
        </fieldset>
        <fieldset class="border-0">
          <legend class="text-overline">
            Your organization
          </legend>
          <v-row dense>
            <v-col cols="12">
              <file-input
                v-model="signatureData.logo"
                label="Logo"
                prepend-inner-icon="mdi-camera-outline"
              />
            </v-col>
            <v-col cols="12">
              <v-text-field
                v-model="signatureData.logoAlt"
                label="Logo text"
                prepend-inner-icon="mdi-domain"
                placeholder="John Co."
              />
            </v-col>
          </v-row>
        </fieldset>
        <fieldset class="border-0">
          <legend class="text-overline">
            Social networks
          </legend>
          <v-row dense>
            <v-col cols="12">
              <v-text-field
                v-model="signatureData.website"
                label="Website"
                prepend-inner-icon="mdi-web"
                placeholder="https://www.john-co.example.com"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="signatureData.facebook"
                label="Facebook"
                prepend-inner-icon="mdi-facebook"
                placeholder="https://facebook.com/john-co"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="signatureData.linkedin"
                label="LinkedIn"
                prepend-inner-icon="mdi-linkedin"
                placeholder="https://linkedin.com/john-co"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="signatureData.instagram"
                label="Instagram"
                prepend-inner-icon="mdi-instagram"
                placeholder="https://instagram.com/john-co"
              />
            </v-col>
            <v-col
              cols="12"
              md="6"
            >
              <v-text-field
                v-model="signatureData.twitter"
                label="Twitter"
                prepend-inner-icon="mdi-twitter"
                placeholder="https://twitter.com/john-co"
              />
            </v-col>
          </v-row>
        </fieldset>
      </v-form>
    </v-card-text>
  </v-card>
</template>
