import { computed, Ref } from 'vue';
import { Signature } from '../utils/signature';

export default function useSignatureState(signature: Ref<Signature>) {
  const hasLogo = computed(() => !!signature.value.logo);
  const hasPhone = computed(() => !!signature.value.phone);
  const hasEmail = computed(() => !!signature.value.email);
  const hasActivities = computed(() => !!signature.value.activities);
  const hasAddress = computed(() => !!signature.value.address);
  const hasInformation = computed(() => !!(
    signature.value.avatar
    || signature.value.firstName
    || signature.value.lastName
    || signature.value.title
  ));
  const hasWebsite = computed(() => !!signature.value.website);
  const hasSocialNetworks = computed(() => !!(
    signature.value.facebook
    || signature.value.linkedin
    || signature.value.instagram
    || signature.value.twitter
  ));
  const hasData = computed(() => (
    hasLogo.value
    || hasInformation.value
    || hasPhone.value
    || hasEmail.value
    || hasAddress.value
    || hasWebsite.value
    || hasSocialNetworks.value
  ));

  return {
    hasData,
    hasLogo,
    hasPhone,
    hasEmail,
    hasActivities,
    hasAddress,
    hasInformation,
    hasWebsite,
    hasSocialNetworks,
  };
}
