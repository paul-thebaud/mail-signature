import 'flag-icons/css/flag-icons.min.css';
import { createVPhoneInput } from 'v-phone-input';
import 'v-phone-input/dist/v-phone-input.css';

export default createVPhoneInput({
  countryIconMode: 'svg',
  enableSearchingCountry: true,
});
