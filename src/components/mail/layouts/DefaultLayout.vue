<script
  lang="ts"
  setup
>
import { computed, PropType } from 'vue';
import useSignatureState from '../../../composables/useSignatureState';
import { InputFile } from '../../../utils/fileToInputFile';
import { Signature } from '../../../utils/signature';
import AddressTableCell from '../cells/AddressTableCell.vue';
import DividerTableCell from '../cells/DividerTableCell.vue';
import EmailTableCell from '../cells/EmailTableCell.vue';
import HoursTableCell from '../cells/HoursTableCell.vue';
import LogoTableCell from '../cells/LogoTableCell.vue';
import PaddingTableCell from '../cells/PaddingTableCell.vue';
import PhoneTableCell from '../cells/PhoneTableCell.vue';
import SocialNetworksTableCell from '../cells/SocialNetworksTableCell.vue';
import TitleTableCell from '../cells/TitleTableCell.vue';
import WebsiteTableCell from '../cells/WebsiteTableCell.vue';
import TableBlock from './../TableBlock.vue';
import TableCell from './../TableCell.vue';
import TableRow from './../TableRow.vue';

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
  hours: {
    required : true,
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
</script>

<template>
  <table-block>
    <table-row>
      <template v-if="props.logo">
        <logo-table-cell
          :logo="props.logo"
          :logo-alt="props.logoAlt"
          :logo-width="props.logoWidth"
          :website="props.website"
          style="vertical-align: middle;text-align: center;"
        />
        <padding-table-cell width="12" />
      </template>
      <table-cell style="vertical-align: top;">
        <table-block>
          <table-row v-if="signatureState.hasInformation.value">
            <title-table-cell
              :avatar="props.avatar"
              :first-name="props.firstName"
              :last-name="props.lastName"
              :title="props.title"
            />
          </table-row>
          <table-row v-if="signatureState.hasHours.value">
            <hours-table-cell :hours="props.hours" />
          </table-row>
          <table-row v-if="signatureState.hasEmail.value">
            <email-table-cell :email="props.email" />
          </table-row>
          <table-row v-if="signatureState.hasPhone.value">
            <phone-table-cell :phone="props.phone" />
          </table-row>
          <table-row v-if="signatureState.hasAddress.value">
            <address-table-cell :address="props.address" />
          </table-row>
          <template v-if="signatureState.hasWebsite.value || signatureState.hasSocialNetworks.value">
            <table-row>
              <divider-table-cell
                :color="props.color"
                height="4"
              />
            </table-row>
            <table-row>
              <padding-table-cell height="4" />
            </table-row>
            <table-row>
              <table-cell style="vertical-align: middle;text-align: center;">
                <table-block>
                  <table-row>
                    <social-networks-table-cell
                      v-if="signatureState.hasSocialNetworks.value"
                      :facebook="props.facebook"
                      :linkedin="props.linkedin"
                      :instagram="props.instagram"
                      :twitter="props.twitter"
                    />
                    <website-table-cell
                      v-if="signatureState.hasWebsite.value"
                      :website="props.website"
                      :color="props.color"
                      style="vertical-align: middle;text-align: right;"
                    />
                  </table-row>
                </table-block>
              </table-cell>
            </table-row>
          </template>
        </table-block>
      </table-cell>
    </table-row>
  </table-block>
</template>

<style>
    td {
        padding: 1px;
    }
</style>
