import { computed, Ref } from 'vue';

const PROTOCOL_REGEXP = /^https?:\/\//;

export default function useWebsite(website: Ref<string>) {
  const websiteWithoutHttps = computed(() => website.value.replace(PROTOCOL_REGEXP, ''));
  const websiteWithHttps = computed(() => (
    PROTOCOL_REGEXP.test(website.value) ? website.value : `https://${website.value}`
  ));

  return {
    websiteWithHttps,
    websiteWithoutHttps,
  };
}
